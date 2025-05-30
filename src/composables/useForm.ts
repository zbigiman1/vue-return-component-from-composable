import { h } from 'vue'
import { FormField, useInput } from "../composables/useInput"

export interface Form {
    fields: FormField[]
}

export function useForm(props: Form) {
    return () => h('form',
        props.fields.map((field: FormField) =>
            useInput({ type: field.type })
        )
    )
}