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
    const { posts, home, resume, portfolio } = await jdown('content')
    return [
      {
        path: '/',
        component: `src/containers/${home.layout||'Page'}`,
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
        path: '/portfolio',
        component: 'src/containers/Archive',
        getData: () => ({
          title: 'Portfolio',
          posts: portfolio,
          breadcrumbs: [
            {
              url: '/',
              text: 'home'
            },
            {
              text: 'portfolio'
            }
          ],
        }),
        children: portfolio.map( page => ({
          path: `/${page.permalink}`,
          component: `src/containers/${page.layout||'Page'}`,
          getData: () => ({
            page,
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
