'use strict';

module.exports = async (data) => {
    const params = {
        Ticket: {
            hs_pipeline: data.hs_pipeline,
            hs_pipeline_stage: data.hs_pipeline_stage,
            hs_ticket_priority: data.hs_ticket_priority,
            hubspot_owner_id: data.hubspot_owner_id,
            subject: data.subject,
        }
    };
    console.log('Params.ticket : ' + params.Ticket);
    return createHubspotTicket(params.Ticket).then((res) =>
        JSON.stringify(res)
    );
};

// Call Hubspot API to create a new ticket
async function createHubspotTicket(ticket) {

    const hubspot = require('@hubspot/api-client');

    const hubspotClient = new hubspot.Client({"apiKey": "APIKEY"});

    const properties = {
        "hs_pipeline": ticket.hs_pipeline,
        "hs_pipeline_stage": ticket.hs_pipeline_stage,
        "hs_ticket_priority": ticket.hs_ticket_priority,
        "hubspot_owner_id": ticket.hubspot_owner_id,
        "subject": ticket.subject
    };
    const simplePublicObjectInput = {properties};

    try {
        const apiResponse = await hubspotClient.crm.tickets.basicApi.create(simplePublicObjectInput);
        console.log(JSON.stringify(apiResponse.body, null, 2));
    } catch (e) {
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    }
}

