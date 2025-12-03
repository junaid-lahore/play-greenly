/** BulkOrderRequest */
export interface BulkOrderRequest {
  /** Name */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Company */
  company?: string | null;
  /** Quantity */
  quantity: string;
  /** Message */
  message: string;
  /** Product */
  product: string;
}

/** BulkOrderResponse */
export interface BulkOrderResponse {
  /** Message */
  message: string;
}

/** ContactFormRequest */
export interface ContactFormRequest {
  /** Name */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Message */
  message: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** NewsletterSubscriptionRequest */
export interface NewsletterSubscriptionRequest {
  /**
   * Email
   * @format email
   */
  email: string;
  /** Source */
  source?: string | null;
}

/** NewsletterSubscriptionResponse */
export interface NewsletterSubscriptionResponse {
  /** Message */
  message: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type CheckHealthData = HealthResponse;

export type SubmitBulkOrderData = BulkOrderResponse;

export type SubmitBulkOrderError = HTTPValidationError;

export type SubscribeToNewsletterData = NewsletterSubscriptionResponse;

export type SubscribeToNewsletterError = HTTPValidationError;

export type SendMessageData = any;

export type SendMessageError = HTTPValidationError;
