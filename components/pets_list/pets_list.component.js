/**
 * Created by Anuradha on 3/10/2016.
 */

'use strict';

angular.module('petsApp', [])
    .component('petsList', {
        templateUrl: 'components/pets_list/pets_list.html',
        controller: function ($http, $q) {

            var self = this;
            self.getPetsList = function () {
                var defer = $q.defer();
                $http({
                    method: 'GET',
                    url: 'http://agl-developer-test.azurewebsites.net/people.json'
                }).then(function successCallback(response) {
                    defer.resolve(response);
                }, function errorCallback(error) {
                    console.error('Unable to fetch the people list', error);
                    defer.reject(error);
                });

                return defer.promise;
            };

            self.$onInit = function () {
                // The following can be utilized once CORS (Cross Origin Resource Sharing) is enable on the Web Service
                // self.getPetsList().then(function(result){
                //  self.pepoleList = result;
                // });
                self.peopleList = [{
                    "name": "Bob",
                    "gender": "Male",
                    "age": 23,
                    "pets": [{"name": "Garfield", "type": "Cat"}, {"name": "Fido", "type": "Dog"}]
                }, {
                    "name": "Jennifer",
                    "gender": "Female",
                    "age": 18,
                    "pets": [{"name": "Garfield", "type": "Cat"}]
                }, {"name": "Steve", "gender": "Male", "age": 45, "pets": null}, {
                    "name": "Fred",
                    "gender": "Male",
                    "age": 40,
                    "pets": [{"name": "Tom", "type": "Cat"}, {"name": "Max", "type": "Cat"}, {
                        "name": "Sam",
                        "type": "Dog"
                    }, {"name": "Jim", "type": "Cat"}]
                }, {
                    "name": "Samantha",
                    "gender": "Female",
                    "age": 40,
                    "pets": [{"name": "Tabby", "type": "Cat"}]
                }, {
                    "name": "Alice",
                    "gender": "Female",
                    "age": 64,
                    "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
                }];

                self.catsBelongingToMales = [];
                self.catsBelongingToFemales = [];

                angular.forEach(self.peopleList, function (person) {
                        angular.forEach(person.pets, function (pet) {
                            if (pet.type === 'Cat') {
                                if (person.gender === 'Male') {
                                    self.catsBelongingToMales.push(pet);
                                } else {
                                    self.catsBelongingToFemales.push(pet);
                                }
                            }
                        });
                    }
                );

                self.catsBelongingToMales.sort(function(a, b) {
                    return a.name > b.name;
                });
                self.catsBelongingToFemales.sort(function(a, b) {
                    return a.name > b.name;
                });
            };
        },
        controllerAs: 'petsAppCtrl'
    })
;