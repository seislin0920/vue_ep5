import axios from "axios";
import { ref } from "vue";

export function useFetchCard() {
     const cat = ref([]);
     const errormessage = ref("");
     const Fetschin = async () => {
          try {
               const res = await axios.get("https://images.pexels.com/lib/api/pexels-white.png");
               cat.value = res.data;
               console.log(cat);
          } catch (error) {
               errormessage.value = "Error:404 ";
          }
     };
     return { cat, errormessage, Fetschin };
}
