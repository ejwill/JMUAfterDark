/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/



function initPushwoosh()
{
    var pushNotification = window.plugins.pushNotification;
    
    //projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID"
    pushNotification.registerDevice({ projectid: "1044753095409", appid : "4F8A0-B1178" },
                                    function(status) {
                                        var pushToken = status;
                                        console.warn('push token: ' + pushToken);
                                    },
                                    function(status) {
                                        console.warn(JSON.stringify(['failed to register ', status]));
                                    });

    document.addEventListener('push-notification', function(event) {
                                var title = event.notification.title;
                                var userData = event.notification.userdata;
                                
                                if(typeof(userData) != "undefined") {
                                    console.warn('user data: ' + JSON.stringify(userData));
                                }
                                    
                                navigator.notification.alert(title);
                              });
 }

function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
    document.addEventListener("deviceready", initPushwoosh, true);
}
