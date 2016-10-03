# Development Challenge - Sorted Pets List

## Notes
Accessing the webservice for the data payload was programmed using AngularJS `$http`. However due to CORS issue, the result couldn't be obtained via the call. 

``` 
// self.getPetsList().then(function(result){
//     self.pepoleList = result;
// });
```

The code is disabled and the returned data is copied across to the code to allow the rest of the challenge to be completed. Thus, once the CORS issue is solved, the `$http` call can be restored so that the program get the data dynamically from the web service.

```
$http({
    method: 'GET',
    url: 'http://agl-developer-test.azurewebsites.net/people.json'
}).then(function successCallback(response) {
    defer.resolve(response);
}, function errorCallback(error) {
    console.error('Unable to fetch the people list', error);
    defer.reject(error);
});
```
Grouping of the cats under their owners gender is done using AngularJS and it is coded as a angular component.
 
## Deployment

1. Host the files from `master` branch on a web server root directory.
2. Access the web server URL to view the output.
