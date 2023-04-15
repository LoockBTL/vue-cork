<template>
    <div>
        <div class="youtube">
            <iframe height="321" :src="instructions?.strYoutube || ''" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div class="instruction">
            {{ instructions?.strInstructions }}
        </div>
    </div>
</template>
<style>
.youtube {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.youtube iframe {
    width: 50%;

}

.instruction {
    padding: 10px;
}
</style>
<script lang="ts">
import type { IPropsInstruction } from '@/types/view.types';
import type { PropType } from 'vue';

export default {
    name: 'instruction-view',
    props: {
        instructions: {
            type: null as unknown as PropType<IPropsInstruction | null>,
            required: true,
            default: null
        }
    }
}
</script>