### Fetch vs AsyncData

- Both `asyncData` & `fetch` will be triggered in server side during initial load
- `asyncData` can set component level objects and access vuex store
- `fetch` cannot set component level objects but has access to vuex store
- After initial load, asyncData and fetch will be triggered when the corresponding page routes are invoked

- Use cases of `fetch`:
  - Use vuex store as a central repository
  - Access data from the vuex store for the entire application
- Use cases of `asyncData`:
  - Use vuex store as a central repository
  - Have options to set component level objects
  - Data fetched in a particular route is used only by a single component
  - Need flexibility to have permission to either vuex store or set component level object