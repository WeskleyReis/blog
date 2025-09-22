'use client'

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUpload } from '../ImageUpload';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('')

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digie o nome do autor'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Título'
          name='title'
          placeholder='Digie o título'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digie o resumo'
          type='text'
          defaultValue={''}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={false}
        />

        <ImageUpload />

        <InputText
          labelText='Url da imagem de capa'
          name='coverImageUrl'
          placeholder='Digie a url da imagem'
          type='text'
          defaultValue={''}
        />

        <InputCheckbox
          labelText='Publicar?'
          name='published'
          type='checkbox'
        />

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  )
}
