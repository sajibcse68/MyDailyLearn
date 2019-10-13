#### Flex with Responsive

```css
@media screen and (min-width: 40em) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -1em;
  }

/*
  .card { 
  	flex: 0 1 33%;
  }
*/

  .card {
    display: flex;
    flex: 0 1 calc(50% - 0.5em); // use percentage, similar as widtch: calc(33% - 1em);
    margin-bottom: 1em;
  }
}

@media screen and (min-width: 60em) {
  .cards {
    margin-top: inherit;
  }
  .card {
    flex: 0 1 calc(33% - 1em);
    margin-bottom: 2em;
  }
}
```
