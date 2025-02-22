import { writable } from "svelte/store";

//export const minhaLista = writable<string[]>([])

const {subscribe, set, update} = writable<string[]>([])

export const minhaLista = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente: string) {
        update((valorAtual) => [...valorAtual, ingrediente])
    },
    removerIngrediente(ingrediente: string) {
        update((valorAtual) => valorAtual.filter((item) => item !== ingrediente))
    }

}