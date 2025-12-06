import {
  BulkOrderRequest,
  CheckHealthData,
  ContactFormRequest,
  NewsletterSubscriptionRequest,
  SendMessageData,
  SendMessageError,
  SubmitBulkOrderData,
  SubmitBulkOrderError,
  SubscribeToNewsletterData,
  SubscribeToNewsletterError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brain<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   *
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  check_health = (params: RequestParams = {}) =>
    this.request<CheckHealthData, any>({
      path: `/_healthz`,
      method: "GET",
      ...params,
    });

  /**
   * @description Receives bulk order inquiries, sends an email notification, and returns a confirmation message.
   *
   * @tags dbtn/module:bulk_order_api
   * @name submit_bulk_order
   * @summary Submit Bulk Order
   * @request POST:/routes/bulk-order
   */
  submit_bulk_order = (data: BulkOrderRequest, params: RequestParams = {}) =>
    this.request<SubmitBulkOrderData, SubmitBulkOrderError>({
      path: `/routes/bulk-order`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Receives newsletter subscription requests and sends notification email.
   *
   * @tags dbtn/module:newsletter_api
   * @name subscribe_to_newsletter
   * @summary Subscribe To Newsletter
   * @request POST:/routes/newsletter/subscribe
   */
  subscribe_to_newsletter = (data: NewsletterSubscriptionRequest, params: RequestParams = {}) =>
    this.request<SubscribeToNewsletterData, SubscribeToNewsletterError>({
      path: `/routes/newsletter/subscribe`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Sends a contact form submission as an email.
   *
   * @tags dbtn/module:contact
   * @name send_message
   * @summary Send Message
   * @request POST:/routes/send-message
   */
  send_message = (data: ContactFormRequest, params: RequestParams = {}) =>
    this.request<SendMessageData, SendMessageError>({
      path: `/routes/send-message`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
