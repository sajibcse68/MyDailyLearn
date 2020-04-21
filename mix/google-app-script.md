# Setup a Google App Script

## Create the script

- Create a new script by going to [script.google.com/create](https://script.google.com/create)

- Replace the contents of the script editor with the following code:

```js
/**
 * Creates a Sheets API service object and prints the names and majors of
 * students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function logNamesAndMajors() {
  var spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
  var rangeName = 'Class Data!A2:E';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  if (!values) {
    Logger.log('No data found.');
  } else {
    Logger.log('Name, Major:');
    for (var row = 0; row < values.length; row++) {
      // Print columns A and E, which correspond to indices 0 and 4.
      Logger.log(' - %s, %s', values[row][0], values[row][4]);
    }
  }
}
```

## Turn on the Google Sheets API

Enable the [Google Sheets API](https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services) advanced service in your script.

## Run the Sample

In the Apps Script editor, click `Run > logNamesAndMajors`.

The first time you run the sample, it will prompt you to authorize access:

- Click the `Continue` button.
- Click the `Accept` button.

To view the script's output, click `View > Logs`.

Done!
