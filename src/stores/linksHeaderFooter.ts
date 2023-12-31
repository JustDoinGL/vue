import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { HeaderLinks } from '@/interface/links'
import { Links, PathNames } from '@/router/enum'

export const useLinksHeaderFooterStore = defineStore('LinksHeaderFooter', () => {
  const linksHeader = ref<HeaderLinks[]>([
    {
      nameUrl: PathNames.POSTS,
      url: Links.POSTS
    },
    { nameUrl: PathNames.USERS, url: Links.USERS },
    {
      nameUrl: PathNames.LOGIN,
      url: Links.LOGIN
    }
  ])

  const linksFooter = ref<string>('https://github.com/JustDoinGL/vue')

  return {
    linksHeader,
    linksFooter
  }
})
