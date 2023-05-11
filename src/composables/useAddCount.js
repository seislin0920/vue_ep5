import { readonly, ref } from "vue";

export function useAddCount(val) {
     const count = ref(val);
     const addcount = (set) => {
          count.value = set;
     };
     return { count: readonly(count), addcount };
}
