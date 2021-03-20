const WIDGETS_URL = "http://localhost:8080/api/widgets";
const TOPICS_URL = "http://localhost:8080/api/topics";


export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())
        //.then(widgets => setWidgets(widgets));


export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        //.then(actualWidget => {
          //  setWidgets([...widgets, actualWidget])
        //})

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: 'DELETE'
    }).then( response => response.json());


const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_URL}/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })

const api = {
   findWidgetsForTopic,
   createWidget,
   deleteWidget,
   updateWidget
};

export default api;