"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterClient = void 0;
const router_1 = require("./router");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * Router is a service that offers advanced interaction with the router
 * subsystem of the daemon.
 *
 * @generated from protobuf service routerrpc.Router
 */
class RouterClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = router_1.Router.typeName;
        this.methods = router_1.Router.methods;
        this.options = router_1.Router.options;
    }
    /**
     *
     * SendPaymentV2 attempts to route a payment described by the passed
     * PaymentRequest to the final destination. The call returns a stream of
     * payment updates.
     *
     * @generated from protobuf rpc: SendPaymentV2(routerrpc.SendPaymentRequest) returns (stream lnrpc.Payment);
     */
    sendPaymentV2(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * TrackPaymentV2 returns an update stream for the payment identified by the
     * payment hash.
     *
     * @generated from protobuf rpc: TrackPaymentV2(routerrpc.TrackPaymentRequest) returns (stream lnrpc.Payment);
     */
    trackPaymentV2(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * EstimateRouteFee allows callers to obtain a lower bound w.r.t how much it
     * may cost to send an HTLC to the target end destination.
     *
     * @generated from protobuf rpc: EstimateRouteFee(routerrpc.RouteFeeRequest) returns (routerrpc.RouteFeeResponse);
     */
    estimateRouteFee(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * Deprecated, use SendToRouteV2. SendToRoute attempts to make a payment via
     * the specified route. This method differs from SendPayment in that it
     * allows users to specify a full route manually. This can be used for
     * things like rebalancing, and atomic swaps. It differs from the newer
     * SendToRouteV2 in that it doesn't return the full HTLC information.
     *
     * @deprecated
     * @generated from protobuf rpc: SendToRoute(routerrpc.SendToRouteRequest) returns (routerrpc.SendToRouteResponse);
     */
    sendToRoute(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SendToRouteV2 attempts to make a payment via the specified route. This
     * method differs from SendPayment in that it allows users to specify a full
     * route manually. This can be used for things like rebalancing, and atomic
     * swaps.
     *
     * @generated from protobuf rpc: SendToRouteV2(routerrpc.SendToRouteRequest) returns (lnrpc.HTLCAttempt);
     */
    sendToRouteV2(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * ResetMissionControl clears all mission control state and starts with a clean
     * slate.
     *
     * @generated from protobuf rpc: ResetMissionControl(routerrpc.ResetMissionControlRequest) returns (routerrpc.ResetMissionControlResponse);
     */
    resetMissionControl(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * QueryMissionControl exposes the internal mission control state to callers.
     * It is a development feature.
     *
     * @generated from protobuf rpc: QueryMissionControl(routerrpc.QueryMissionControlRequest) returns (routerrpc.QueryMissionControlResponse);
     */
    queryMissionControl(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * XImportMissionControl is an experimental API that imports the state provided
     * to the internal mission control's state, using all results which are more
     * recent than our existing values. These values will only be imported
     * in-memory, and will not be persisted across restarts.
     *
     * @generated from protobuf rpc: XImportMissionControl(routerrpc.XImportMissionControlRequest) returns (routerrpc.XImportMissionControlResponse);
     */
    xImportMissionControl(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * GetMissionControlConfig returns mission control's current config.
     *
     * @generated from protobuf rpc: GetMissionControlConfig(routerrpc.GetMissionControlConfigRequest) returns (routerrpc.GetMissionControlConfigResponse);
     */
    getMissionControlConfig(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SetMissionControlConfig will set mission control's config, if the config
     * provided is valid.
     *
     * @generated from protobuf rpc: SetMissionControlConfig(routerrpc.SetMissionControlConfigRequest) returns (routerrpc.SetMissionControlConfigResponse);
     */
    setMissionControlConfig(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * QueryProbability returns the current success probability estimate for a
     * given node pair and amount.
     *
     * @generated from protobuf rpc: QueryProbability(routerrpc.QueryProbabilityRequest) returns (routerrpc.QueryProbabilityResponse);
     */
    queryProbability(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * BuildRoute builds a fully specified route based on a list of hop public
     * keys. It retrieves the relevant channel policies from the graph in order to
     * calculate the correct fees and time locks.
     *
     * @generated from protobuf rpc: BuildRoute(routerrpc.BuildRouteRequest) returns (routerrpc.BuildRouteResponse);
     */
    buildRoute(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeHtlcEvents creates a uni-directional stream from the server to
     * the client which delivers a stream of htlc events.
     *
     * @generated from protobuf rpc: SubscribeHtlcEvents(routerrpc.SubscribeHtlcEventsRequest) returns (stream routerrpc.HtlcEvent);
     */
    subscribeHtlcEvents(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Deprecated, use SendPaymentV2. SendPayment attempts to route a payment
     * described by the passed PaymentRequest to the final destination. The call
     * returns a stream of payment status updates.
     *
     * @deprecated
     * @generated from protobuf rpc: SendPayment(routerrpc.SendPaymentRequest) returns (stream routerrpc.PaymentStatus);
     */
    sendPayment(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * Deprecated, use TrackPaymentV2. TrackPayment returns an update stream for
     * the payment identified by the payment hash.
     *
     * @deprecated
     * @generated from protobuf rpc: TrackPayment(routerrpc.TrackPaymentRequest) returns (stream routerrpc.PaymentStatus);
     */
    trackPayment(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * *
     * HtlcInterceptor dispatches a bi-directional streaming RPC in which
     * Forwarded HTLC requests are sent to the client and the client responds with
     * a boolean that tells LND if this htlc should be intercepted.
     * In case of interception, the htlc can be either settled, cancelled or
     * resumed later by using the ResolveHoldForward endpoint.
     *
     * @generated from protobuf rpc: HtlcInterceptor(stream routerrpc.ForwardHtlcInterceptResponse) returns (stream routerrpc.ForwardHtlcInterceptRequest);
     */
    htlcInterceptor(options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     *
     * UpdateChanStatus attempts to manually set the state of a channel
     * (enabled, disabled, or auto). A manual "disable" request will cause the
     * channel to stay disabled until a subsequent manual request of either
     * "enable" or "auto".
     *
     * @generated from protobuf rpc: UpdateChanStatus(routerrpc.UpdateChanStatusRequest) returns (routerrpc.UpdateChanStatusResponse);
     */
    updateChanStatus(input, options) {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.RouterClient = RouterClient;
//# sourceMappingURL=router.client.js.map