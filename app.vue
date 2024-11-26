<template>
    <div class="bg-gray-950 h-screen text-gray-200 p-10 text-xl max-w-[50%] mx-auto">
        <NuxtLoadingIndicator :height="10" />
        <NuxtPage />
    </div>
</template>

<style>
    ::-webkit-scrollbar {
        @apply size-[6px];
    }

    ::-webkit-scrollbar-track {
        @apply bg-transparent;
    }

    ::-webkit-scrollbar-thumb {
        @apply bg-transparent rounded-full border-2 border-transparent bg-clip-content;
    }

    ::-webkit-scrollbar-thumb:hover {
        @apply bg-gray-300;
    }

    *:hover::-webkit-scrollbar-thumb {
        @apply bg-gray-300;
    }

</style>
