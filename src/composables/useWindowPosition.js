import { onMounted, onUnmounted, ref } from "vue";

export function useWindowPosition() {
     const pageX = ref(0);
     const pageY = ref(0);
     const position = (e) => {
          pageX.value = e.pageX;
          pageY.value = e.pageY;
     };

     onMounted(() => {
          window.addEventListener("mouseover", position);
     });
     onUnmounted(() => {
          window.removeEventListener("mouseover", position);
     });

     return { pageX, pageY };
}
