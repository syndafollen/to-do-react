import { ChangeEvent } from 'react'

export type TagsProps = {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    tags: string[]
}