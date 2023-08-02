import { generateRoutes } from '../useRouteLocales'

test('generateRoutes', () => {
  expect(generateRoutes('/aa/bb/cc')).toStrictEqual([
    '/aa',
    '/aa/bb',
    '/aa/bb/cc'
  ])
})
