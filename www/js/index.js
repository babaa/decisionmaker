/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


    // DECISIONMAKER CODE

    var options = 2;

    /* --------- FUNCTIONS --------- */

    function addBox() {
        var optionbox = '<input type="text" class="form-control" id="option'+ options +'">';

        if(options < 10) {
            $('#options').append(optionbox);
            options++;
        }
    }

    function deleteBox(){

        if (options > 2) { 
          $('input').last().remove();
          options--;
        }
    }

    function decide(){
        var choice = "#option" + returnRandom(options);
        var answer = $(choice).val();
        
        var answerText = escapeHtmlEntities(answer);
        
        $('#answer').html('<p>' + answerText +'</p>');
    }

    //Function copied from stackoverflow

    function escapeHtmlEntities (str) {
      if (typeof jQuery !== 'undefined') {
        // Create an empty div to use as a container,
        // then put the raw text in and get the HTML
        // equivalent out.
        return jQuery('<div/>').text(str).html();
      }

      // No jQuery, so use string replace.
      return str
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;');
    }

    function returnRandom(max) {

        var randomNumber = Math.floor(Math.random() * max);
        return randomNumber;
    }

    /* --------- TO HTML --------- */

    $('#add').click(addBox);
    $('#remove').click(deleteBox);
    $('#decide').click(decide);
    $('#reset').click(function(){
      location.reload();
    });




};
