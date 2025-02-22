import { renderBundle } from '@_unit/unit/lib/client/platform/web/render'

const root = document.getElementById('root')

const bundle = {
  spec: {
    units: {
      helloworld: {
        id: 'a9cbed12-9a53-11eb-8c2e-f3146b36128d',
      },
    },
  },
}

const [system, graph] = renderBundle(root, bundle)

const helloworld = graph.getUnit('helloworld')

helloworld.push('style', {
  color: '#ffdd00',
})
