import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  preact: true,
  siteRoot: 'https://www.ericmikkelsen.com',
  getRoutes: async () => {
    const { posts, home, resume } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Page',
        getData: () => ({
          page: home,
        }),
      },
      {
        path: '/resume',
        component: 'src/containers/Resume',
        getData: () => ({
          resume,
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
