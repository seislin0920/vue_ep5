<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useAddCount } from "./composables/useAddCount.js";
import { useFetchCard } from "./composables/useFetchCard.js";
import { useWindowPosition } from "./composables/useWindowPosition.js";

const { pageX, pageY } = useWindowPosition();
const { count, addcount } = useAddCount(0);
const addclick = (n1) => {
     addcount(n1);
};

const { cat, errormessage, Fetschin } = useFetchCard();
onMounted(() => {
     Fetschin();
});
</script>

<template>
     <h1 v-if="cat.length === 0">Loading........</h1>
     <div v-else>
          <img src="{{cat}}" width="125" height="125" />
          <header>
               <h1>pageX:{{ pageX }} pageY:{{ pageY }}</h1>
               <h1>{{ count }}</h1>
               <button @click="addclick(count + 2)">Add</button>
               <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

               <div class="wrapper">
                    <HelloWorld msg="You did it!" />

                    <nav>
                         <RouterLink to="/">Home</RouterLink>
                         <RouterLink to="/about">About</RouterLink>
                    </nav>
               </div>
          </header>
     </div>
     <div v-if="errormessage !== ''">
          <h1>{{ errormessage }}</h1>
     </div>

     <RouterView />
</template>

<style scoped>
header {
     line-height: 1.5;
     max-height: 100vh;
}

.logo {
     display: block;
     margin: 0 auto 2rem;
}

nav {
     width: 100%;
     font-size: 12px;
     text-align: center;
     margin-top: 2rem;
}

nav a.router-link-exact-active {
     color: var(--color-text);
}

nav a.router-link-exact-active:hover {
     background-color: transparent;
}

nav a {
     display: inline-block;
     padding: 0 1rem;
     border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
     border: 0;
}

@media (min-width: 1024px) {
     header {
          display: flex;
          place-items: center;
          padding-right: calc(var(--section-gap) / 2);
     }

     .logo {
          margin: 0 2rem 0 0;
     }

     header .wrapper {
          display: flex;
          place-items: flex-start;
          flex-wrap: wrap;
     }

     nav {
          text-align: left;
          margin-left: -1rem;
          font-size: 1rem;

          padding: 1rem 0;
          margin-top: 1rem;
     }
}
</style>
