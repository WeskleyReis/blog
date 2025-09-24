'use server'

import { drizzleDb } from "@/db/drizzle"
import { postsTable } from "@/db/drizzle/schemas"
import { postRepository } from "@/repositories/post"
import { asyncDelay } from "@/utils/async-delay"
import { logColor } from "@/utils/log-color"
import { eq } from "drizzle-orm"
import { revalidateTag } from "next/cache"


export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  // TODO: remover linhas abaixo
  await asyncDelay(2000)
  logColor('' + id)

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos'
    }
  }

  let post
  try {
    post = await postRepository.delete(id)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      }
    }

    return {
      error: 'Erro desconhecido'
    }
  }

  revalidateTag('posts')
  revalidateTag(`post-${post.slug}`)

  return {
      error: ''
    }
}
