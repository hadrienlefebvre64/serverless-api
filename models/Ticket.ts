    // "createdAt": "2019-10-30T03:30:17.883Z",
    // "archived": false,
    // "id": "512",
    // "properties": {
    //     "createdate": "2019-10-30T03:30:17.883Z",
    //     "hs_lastmodifieddate": "2019-12-07T16:50:06.678Z",
    //     "hs_pipeline": "support_pipeline",
    //     "hs_pipeline_stage": "open",
    //     "hs_ticket_priority": "HIGH",
    //     "hubspot_owner_id": "910901",
    //     "subject": "troubleshoot report"
    // },
    // "updatedAt": "2019-12-07T16:50:06.678Z"

export interface Ticket {
    createdAt: Date,
    archived: boolean,
    id: number,
    properties: {
        createdate: Date,
        hs_lastmodifieddate: Date,
        hs_pipeline: string,
        hs_pipeline_stage: string,
        hs_ticket_priority: string,
        hubspot_owner_id: number,
        subject: number,
    },
    updatedAt: Date,
}
