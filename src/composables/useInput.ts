import { h } from 'vue'

export interface FormField {
    type: string
}

export function useInput(props: FormField) {
    return h('input', { type: props.type, })
}