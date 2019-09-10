This document serves as a guide for the web application in which the purpose and layout for views and components are outlined.


## **Components**


#### CompanyEventListElement.tsx
  ```CompanyEventListElement``` returns one company event card, to be rendered in the ```CompanyEvents``` screen.

#### EventListElement.tsx
  ```CompanyEventListElement``` returns one host event card, to be rendered in the ```Events``` screen.

#### NoCompanyEventsText.tsx
  ```NoCompanyEventsText``` returns the text to be shown when there are no events that the company is attending, to be rendered in the ```CompanyEvents```
  component.

#### NoEventsText.tsx
  ```NoEventsText``` returns the text to be shown when there are no events that the host is attending, to be rendered in the ```Events```
  component.

#### StudentListElement.tsx
```StudentListElement``` returns the individual student element when searching for students interested (not available currently).


## **Screens**

#### Event.tsx
  ```Event``` is a host page that returns the event page for a particular event.
  Host can view all the details of one of their events on this page, as
  well as click on the back button to redirect back to the ```Events``` page.
  *User can only access this page through the ```Events``` page

  *Components Utilized*:
    - ```StudentListElement```: to search for students interested in the Event
      (not implemented as of now)

  *Connected Screens*:
    - ```Event``` (when the user clicks on the Back button)

#### Events.tsx

  ```Events``` returns the page of events for the host. Host has the option
  to edit or delete each event in this events page, as well as click on the
  event itself to redirect to the ```Event``` page for the selected event.

  *Components Utilized*:
    - ```EventListElement```: the individual event card
    - ```NoEventsText```: shows when no events exist

  *Connected Screens*:
    - ```Event``` (when the user clicks on the event)

## **Other Components**

#### index.js
```index``` renders the entire application when using ```npm start```.

#### App.js
```App``` is the entrypoint of the web application. It either shows the host screen, or the company screen.

  *Connected Screens*:
    - ```Events``` (when a host clicks on Events)
