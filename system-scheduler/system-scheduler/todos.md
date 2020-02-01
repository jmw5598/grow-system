- Figure out structure for sending node status updates.
    - Don't send whole system details with components but only status with and event attribute that 
      designates what the event (nodeStatus)
    - Emit events for chagnes in components (componentChange)
    - Create a message endpoint that emits the state of the whole node? Maybe on system too/insted? 
        - Used when someone logs in, they can send a message to get the status of the whole system 
          to initialize the view.


  - send out notificaiton on unresponsive node in System.
        