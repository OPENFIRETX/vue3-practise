import { ref } from "vue"
import axios from 'axios'

export default function <T>(url: string,) {

    const loading = ref(true)
    const data = ref<T | null>(null)
    const err = ref("")


    axios.get(url).then(res => {
        loading.value = false
        data.value = res.data

    }).catch(err => {
        loading.value = true
        err.value = err.message
    })
    return {
        loading, data, err
    }
}