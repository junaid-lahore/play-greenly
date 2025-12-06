import {
  BulkOrderRequest,
  CheckHealthData,
  ContactFormRequest,
  NewsletterSubscriptionRequest,
  SendMessageData,
  SubmitBulkOrderData,
  SubscribeToNewsletterData,
} from "./data-contracts";

export namespace Brain {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Receives bulk order inquiries, sends an email notification, and returns a confirmation message.
   * @tags dbtn/module:bulk_order_api
   * @name submit_bulk_order
   * @summary Submit Bulk Order
   * @request POST:/routes/bulk-order
   */
  export namespace submit_bulk_order {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BulkOrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubmitBulkOrderData;
  }

  /**
   * @description Receives newsletter subscription requests and sends notification email.
   * @tags dbtn/module:newsletter_api
   * @name subscribe_to_newsletter
   * @summary Subscribe To Newsletter
   * @request POST:/routes/newsletter/subscribe
   */
  export namespace subscribe_to_newsletter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewsletterSubscriptionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubscribeToNewsletterData;
  }

  /**
   * @description Sends a contact form submission as an email.
   * @tags dbtn/module:contact
   * @name send_message
   * @summary Send Message
   * @request POST:/routes/send-message
   */
  export namespace send_message {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactFormRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendMessageData;
  }
}
