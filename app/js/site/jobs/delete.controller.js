/**
 * @ngdoc controller
 * @name ngFireJobs.DeleteCtrl:DeleteCtrl
 * @requires $scope
 * @requires $log
 * @requires $location
 * @requires $routeParams
 * @requires ngFireCommon.JobsService
 * @description
 * This is the controller for DeleteCtrl.
 */
angular.module('ngFireJobs').controller('DeleteCtrl', function($scope, $log, $location, $routeParams, JobsService) {
    'use strict';

    if ($routeParams.jobId) {
        $scope.job = JobsService.getJob($routeParams.jobId);
    } else {
        $location.path('/');
    }

    $scope.deleteJob = function(job) {
        JobsService.deleteJob(job).then(function() {
            $log.log('Job was deleted');
            $location.path('/search');
        }, function (error) {
            $log.error('Error deleting the Job');
        });
    };
});