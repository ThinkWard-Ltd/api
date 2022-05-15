"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightningClient = void 0;
const rpc_1 = require("./rpc");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
// 
// Comments in this file will be directly parsed into the API
// Documentation as descriptions of the associated method, message, or field.
// These descriptions should go right above the definition of the object, and
// can be in either block or // comment format.
// 
// An RPC method can be matched to an lncli command by placing a line in the
// beginning of the description in exactly the following format:
// lncli: `methodname`
// 
// Failure to specify the exact name of the command will cause documentation
// generation to fail.
// 
// More information on how exactly the gRPC documentation is generated from
// this proto file can be found here:
// https://github.com/lightninglabs/lightning-api
/**
 * Lightning is the main RPC server of the daemon.
 *
 * @generated from protobuf service lnrpc.Lightning
 */
class LightningClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = rpc_1.Lightning.typeName;
        this.methods = rpc_1.Lightning.methods;
        this.options = rpc_1.Lightning.options;
    }
    /**
     * lncli: `walletbalance`
     * WalletBalance returns total unspent outputs(confirmed and unconfirmed), all
     * confirmed unspent outputs and all unconfirmed unspent outputs under control
     * of the wallet.
     *
     * @generated from protobuf rpc: WalletBalance(lnrpc.WalletBalanceRequest) returns (lnrpc.WalletBalanceResponse);
     */
    walletBalance(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `channelbalance`
     * ChannelBalance returns a report on the total funds across all open channels,
     * categorized in local/remote, pending local/remote and unsettled local/remote
     * balances.
     *
     * @generated from protobuf rpc: ChannelBalance(lnrpc.ChannelBalanceRequest) returns (lnrpc.ChannelBalanceResponse);
     */
    channelBalance(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listchaintxns`
     * GetTransactions returns a list describing all the known transactions
     * relevant to the wallet.
     *
     * @generated from protobuf rpc: GetTransactions(lnrpc.GetTransactionsRequest) returns (lnrpc.TransactionDetails);
     */
    getTransactions(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `estimatefee`
     * EstimateFee asks the chain backend to estimate the fee rate and total fees
     * for a transaction that pays to multiple specified outputs.
     *
     * When using REST, the `AddrToAmount` map type can be set by appending
     * `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this
     * map type doesn't appear in the REST API documentation because of a bug in
     * the grpc-gateway library.
     *
     * @generated from protobuf rpc: EstimateFee(lnrpc.EstimateFeeRequest) returns (lnrpc.EstimateFeeResponse);
     */
    estimateFee(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `sendcoins`
     * SendCoins executes a request to send coins to a particular address. Unlike
     * SendMany, this RPC call only allows creating a single output at a time. If
     * neither target_conf, or sat_per_vbyte are set, then the internal wallet will
     * consult its fee model to determine a fee for the default confirmation
     * target.
     *
     * @generated from protobuf rpc: SendCoins(lnrpc.SendCoinsRequest) returns (lnrpc.SendCoinsResponse);
     */
    sendCoins(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listunspent`
     * Deprecated, use walletrpc.ListUnspent instead.
     *
     * ListUnspent returns a list of all utxos spendable by the wallet with a
     * number of confirmations between the specified minimum and maximum.
     *
     * @generated from protobuf rpc: ListUnspent(lnrpc.ListUnspentRequest) returns (lnrpc.ListUnspentResponse);
     */
    listUnspent(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeTransactions creates a uni-directional stream from the server to
     * the client in which any newly discovered transactions relevant to the
     * wallet are sent over.
     *
     * @generated from protobuf rpc: SubscribeTransactions(lnrpc.GetTransactionsRequest) returns (stream lnrpc.Transaction);
     */
    subscribeTransactions(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `sendmany`
     * SendMany handles a request for a transaction that creates multiple specified
     * outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then
     * the internal wallet will consult its fee model to determine a fee for the
     * default confirmation target.
     *
     * @generated from protobuf rpc: SendMany(lnrpc.SendManyRequest) returns (lnrpc.SendManyResponse);
     */
    sendMany(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `newaddress`
     * NewAddress creates a new address under control of the local wallet.
     *
     * @generated from protobuf rpc: NewAddress(lnrpc.NewAddressRequest) returns (lnrpc.NewAddressResponse);
     */
    newAddress(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `signmessage`
     * SignMessage signs a message with this node's private key. The returned
     * signature string is `zbase32` encoded and pubkey recoverable, meaning that
     * only the message digest and signature are needed for verification.
     *
     * @generated from protobuf rpc: SignMessage(lnrpc.SignMessageRequest) returns (lnrpc.SignMessageResponse);
     */
    signMessage(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `verifymessage`
     * VerifyMessage verifies a signature over a msg. The signature must be
     * zbase32 encoded and signed by an active node in the resident node's
     * channel database. In addition to returning the validity of the signature,
     * VerifyMessage also returns the recovered pubkey from the signature.
     *
     * @generated from protobuf rpc: VerifyMessage(lnrpc.VerifyMessageRequest) returns (lnrpc.VerifyMessageResponse);
     */
    verifyMessage(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `connect`
     * ConnectPeer attempts to establish a connection to a remote peer. This is at
     * the networking level, and is used for communication between nodes. This is
     * distinct from establishing a channel with a peer.
     *
     * @generated from protobuf rpc: ConnectPeer(lnrpc.ConnectPeerRequest) returns (lnrpc.ConnectPeerResponse);
     */
    connectPeer(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `disconnect`
     * DisconnectPeer attempts to disconnect one peer from another identified by a
     * given pubKey. In the case that we currently have a pending or active channel
     * with the target peer, then this action will be not be allowed.
     *
     * @generated from protobuf rpc: DisconnectPeer(lnrpc.DisconnectPeerRequest) returns (lnrpc.DisconnectPeerResponse);
     */
    disconnectPeer(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listpeers`
     * ListPeers returns a verbose listing of all currently active peers.
     *
     * @generated from protobuf rpc: ListPeers(lnrpc.ListPeersRequest) returns (lnrpc.ListPeersResponse);
     */
    listPeers(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribePeerEvents creates a uni-directional stream from the server to
     * the client in which any events relevant to the state of peers are sent
     * over. Events include peers going online and offline.
     *
     * @generated from protobuf rpc: SubscribePeerEvents(lnrpc.PeerEventSubscription) returns (stream lnrpc.PeerEvent);
     */
    subscribePeerEvents(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `getinfo`
     * GetInfo returns general information concerning the lightning node including
     * it's identity pubkey, alias, the chains it is connected to, and information
     * concerning the number of open+pending channels.
     *
     * @generated from protobuf rpc: GetInfo(lnrpc.GetInfoRequest) returns (lnrpc.GetInfoResponse);
     */
    getInfo(input, options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * * lncli: `getrecoveryinfo`
     * GetRecoveryInfo returns information concerning the recovery mode including
     * whether it's in a recovery mode, whether the recovery is finished, and the
     * progress made so far.
     *
     * @generated from protobuf rpc: GetRecoveryInfo(lnrpc.GetRecoveryInfoRequest) returns (lnrpc.GetRecoveryInfoResponse);
     */
    getRecoveryInfo(input, options) {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    // TODO(roasbeef): merge with below with bool?
    /**
     * lncli: `pendingchannels`
     * PendingChannels returns a list of all the channels that are currently
     * considered "pending". A channel is pending if it has finished the funding
     * workflow and is waiting for confirmations for the funding txn, or is in the
     * process of closure, either initiated cooperatively or non-cooperatively.
     *
     * @generated from protobuf rpc: PendingChannels(lnrpc.PendingChannelsRequest) returns (lnrpc.PendingChannelsResponse);
     */
    pendingChannels(input, options) {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listchannels`
     * ListChannels returns a description of all the open channels that this node
     * is a participant in.
     *
     * @generated from protobuf rpc: ListChannels(lnrpc.ListChannelsRequest) returns (lnrpc.ListChannelsResponse);
     */
    listChannels(input, options) {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeChannelEvents creates a uni-directional stream from the server to
     * the client in which any updates relevant to the state of the channels are
     * sent over. Events include new active channels, inactive channels, and closed
     * channels.
     *
     * @generated from protobuf rpc: SubscribeChannelEvents(lnrpc.ChannelEventSubscription) returns (stream lnrpc.ChannelEventUpdate);
     */
    subscribeChannelEvents(input, options) {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `closedchannels`
     * ClosedChannels returns a description of all the closed channels that
     * this node was a participant in.
     *
     * @generated from protobuf rpc: ClosedChannels(lnrpc.ClosedChannelsRequest) returns (lnrpc.ClosedChannelsResponse);
     */
    closedChannels(input, options) {
        const method = this.methods[20], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This
     * call is meant to be consumed by clients to the REST proxy. As with all
     * other sync calls, all byte slices are intended to be populated as hex
     * encoded strings.
     *
     * @generated from protobuf rpc: OpenChannelSync(lnrpc.OpenChannelRequest) returns (lnrpc.ChannelPoint);
     */
    openChannelSync(input, options) {
        const method = this.methods[21], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `openchannel`
     * OpenChannel attempts to open a singly funded channel specified in the
     * request to a remote peer. Users are able to specify a target number of
     * blocks that the funding transaction should be confirmed in, or a manual fee
     * rate to us for the funding transaction. If neither are specified, then a
     * lax block confirmation target is used. Each OpenStatusUpdate will return
     * the pending channel ID of the in-progress channel. Depending on the
     * arguments specified in the OpenChannelRequest, this pending channel ID can
     * then be used to manually progress the channel funding flow.
     *
     * @generated from protobuf rpc: OpenChannel(lnrpc.OpenChannelRequest) returns (stream lnrpc.OpenStatusUpdate);
     */
    openChannel(input, options) {
        const method = this.methods[22], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     *
     * FundingStateStep is an advanced funding related call that allows the caller
     * to either execute some preparatory steps for a funding workflow, or
     * manually progress a funding workflow. The primary way a funding flow is
     * identified is via its pending channel ID. As an example, this method can be
     * used to specify that we're expecting a funding flow for a particular
     * pending channel ID, for which we need to use specific parameters.
     * Alternatively, this can be used to interactively drive PSBT signing for
     * funding for partially complete funding transactions.
     *
     * @generated from protobuf rpc: FundingStateStep(lnrpc.FundingTransitionMsg) returns (lnrpc.FundingStateStepResp);
     */
    fundingStateStep(input, options) {
        const method = this.methods[23], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which
     * OpenChannel requests are sent to the client and the client responds with
     * a boolean that tells LND whether or not to accept the channel. This allows
     * node operators to specify their own criteria for accepting inbound channels
     * through a single persistent connection.
     *
     * @generated from protobuf rpc: ChannelAcceptor(stream lnrpc.ChannelAcceptResponse) returns (stream lnrpc.ChannelAcceptRequest);
     */
    channelAcceptor(options) {
        const method = this.methods[24], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * lncli: `closechannel`
     * CloseChannel attempts to close an active channel identified by its channel
     * outpoint (ChannelPoint). The actions of this method can additionally be
     * augmented to attempt a force close after a timeout period in the case of an
     * inactive peer. If a non-force close (cooperative closure) is requested,
     * then the user can specify either a target number of blocks until the
     * closure transaction is confirmed, or a manual fee rate. If neither are
     * specified, then a default lax, block confirmation target is used.
     *
     * @generated from protobuf rpc: CloseChannel(lnrpc.CloseChannelRequest) returns (stream lnrpc.CloseStatusUpdate);
     */
    closeChannel(input, options) {
        const method = this.methods[25], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `abandonchannel`
     * AbandonChannel removes all channel state from the database except for a
     * close summary. This method can be used to get rid of permanently unusable
     * channels due to bugs fixed in newer versions of lnd. This method can also be
     * used to remove externally funded channels where the funding transaction was
     * never broadcast. Only available for non-externally funded channels in dev
     * build.
     *
     * @generated from protobuf rpc: AbandonChannel(lnrpc.AbandonChannelRequest) returns (lnrpc.AbandonChannelResponse);
     */
    abandonChannel(input, options) {
        const method = this.methods[26], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `sendpayment`
     * Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a
     * bi-directional streaming RPC for sending payments through the Lightning
     * Network. A single RPC invocation creates a persistent bi-directional
     * stream allowing clients to rapidly send payments through the Lightning
     * Network with a single persistent connection.
     *
     * @deprecated
     * @generated from protobuf rpc: SendPayment(stream lnrpc.SendRequest) returns (stream lnrpc.SendResponse);
     */
    sendPayment(options) {
        const method = this.methods[27], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     *
     * SendPaymentSync is the synchronous non-streaming version of SendPayment.
     * This RPC is intended to be consumed by clients of the REST proxy.
     * Additionally, this RPC expects the destination's public key and the payment
     * hash (if any) to be encoded as hex strings.
     *
     * @generated from protobuf rpc: SendPaymentSync(lnrpc.SendRequest) returns (lnrpc.SendResponse);
     */
    sendPaymentSync(input, options) {
        const method = this.methods[28], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `sendtoroute`
     * Deprecated, use routerrpc.SendToRouteV2. SendToRoute is a bi-directional
     * streaming RPC for sending payment through the Lightning Network. This
     * method differs from SendPayment in that it allows users to specify a full
     * route manually. This can be used for things like rebalancing, and atomic
     * swaps.
     *
     * @deprecated
     * @generated from protobuf rpc: SendToRoute(stream lnrpc.SendToRouteRequest) returns (stream lnrpc.SendResponse);
     */
    sendToRoute(options) {
        const method = this.methods[29], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     *
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block
     * until the payment either fails or succeeds.
     *
     * @generated from protobuf rpc: SendToRouteSync(lnrpc.SendToRouteRequest) returns (lnrpc.SendResponse);
     */
    sendToRouteSync(input, options) {
        const method = this.methods[30], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `addinvoice`
     * AddInvoice attempts to add a new invoice to the invoice database. Any
     * duplicated invoices are rejected, therefore all invoices *must* have a
     * unique payment preimage.
     *
     * @generated from protobuf rpc: AddInvoice(lnrpc.Invoice) returns (lnrpc.AddInvoiceResponse);
     */
    addInvoice(input, options) {
        const method = this.methods[31], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listinvoices`
     * ListInvoices returns a list of all the invoices currently stored within the
     * database. Any active debug invoices are ignored. It has full support for
     * paginated responses, allowing users to query for specific invoices through
     * their add_index. This can be done by using either the first_index_offset or
     * last_index_offset fields included in the response as the index_offset of the
     * next request. By default, the first 100 invoices created will be returned.
     * Backwards pagination is also supported through the Reversed flag.
     *
     * @generated from protobuf rpc: ListInvoices(lnrpc.ListInvoiceRequest) returns (lnrpc.ListInvoiceResponse);
     */
    listInvoices(input, options) {
        const method = this.methods[32], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `lookupinvoice`
     * LookupInvoice attempts to look up an invoice according to its payment hash.
     * The passed payment hash *must* be exactly 32 bytes, if not, an error is
     * returned.
     *
     * @generated from protobuf rpc: LookupInvoice(lnrpc.PaymentHash) returns (lnrpc.Invoice);
     */
    lookupInvoice(input, options) {
        const method = this.methods[33], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeInvoices returns a uni-directional stream (server -> client) for
     * notifying the client of newly added/settled invoices. The caller can
     * optionally specify the add_index and/or the settle_index. If the add_index
     * is specified, then we'll first start by sending add invoice events for all
     * invoices with an add_index greater than the specified value. If the
     * settle_index is specified, the next, we'll send out all settle events for
     * invoices with a settle_index greater than the specified value. One or both
     * of these fields can be set. If no fields are set, then we'll only send out
     * the latest add/settle events.
     *
     * @generated from protobuf rpc: SubscribeInvoices(lnrpc.InvoiceSubscription) returns (stream lnrpc.Invoice);
     */
    subscribeInvoices(input, options) {
        const method = this.methods[34], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `decodepayreq`
     * DecodePayReq takes an encoded payment request string and attempts to decode
     * it, returning a full description of the conditions encoded within the
     * payment request.
     *
     * @generated from protobuf rpc: DecodePayReq(lnrpc.PayReqString) returns (lnrpc.PayReq);
     */
    decodePayReq(input, options) {
        const method = this.methods[35], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listpayments`
     * ListPayments returns a list of all outgoing payments.
     *
     * @generated from protobuf rpc: ListPayments(lnrpc.ListPaymentsRequest) returns (lnrpc.ListPaymentsResponse);
     */
    listPayments(input, options) {
        const method = this.methods[36], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * DeleteAllPayments deletes all outgoing payments from DB.
     *
     * @generated from protobuf rpc: DeleteAllPayments(lnrpc.DeleteAllPaymentsRequest) returns (lnrpc.DeleteAllPaymentsResponse);
     */
    deleteAllPayments(input, options) {
        const method = this.methods[37], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `describegraph`
     * DescribeGraph returns a description of the latest graph state from the
     * point of view of the node. The graph information is partitioned into two
     * components: all the nodes/vertexes, and all the edges that connect the
     * vertexes themselves. As this is a directed graph, the edges also contain
     * the node directional specific routing policy which includes: the time lock
     * delta, fee information, etc.
     *
     * @generated from protobuf rpc: DescribeGraph(lnrpc.ChannelGraphRequest) returns (lnrpc.ChannelGraph);
     */
    describeGraph(input, options) {
        const method = this.methods[38], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `getnodemetrics`
     * GetNodeMetrics returns node metrics calculated from the graph. Currently
     * the only supported metric is betweenness centrality of individual nodes.
     *
     * @generated from protobuf rpc: GetNodeMetrics(lnrpc.NodeMetricsRequest) returns (lnrpc.NodeMetricsResponse);
     */
    getNodeMetrics(input, options) {
        const method = this.methods[39], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `getchaninfo`
     * GetChanInfo returns the latest authenticated network announcement for the
     * given channel identified by its channel ID: an 8-byte integer which
     * uniquely identifies the location of transaction's funding output within the
     * blockchain.
     *
     * @generated from protobuf rpc: GetChanInfo(lnrpc.ChanInfoRequest) returns (lnrpc.ChannelEdge);
     */
    getChanInfo(input, options) {
        const method = this.methods[40], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `getnodeinfo`
     * GetNodeInfo returns the latest advertised, aggregated, and authenticated
     * channel information for the specified node identified by its public key.
     *
     * @generated from protobuf rpc: GetNodeInfo(lnrpc.NodeInfoRequest) returns (lnrpc.NodeInfo);
     */
    getNodeInfo(input, options) {
        const method = this.methods[41], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `queryroutes`
     * QueryRoutes attempts to query the daemon's Channel Router for a possible
     * route to a target destination capable of carrying a specific amount of
     * satoshis. The returned route contains the full details required to craft and
     * send an HTLC, also including the necessary information that should be
     * present within the Sphinx packet encapsulated within the HTLC.
     *
     * When using REST, the `dest_custom_records` map type can be set by appending
     * `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>`
     * to the URL. Unfortunately this map type doesn't appear in the REST API
     * documentation because of a bug in the grpc-gateway library.
     *
     * @generated from protobuf rpc: QueryRoutes(lnrpc.QueryRoutesRequest) returns (lnrpc.QueryRoutesResponse);
     */
    queryRoutes(input, options) {
        const method = this.methods[42], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `getnetworkinfo`
     * GetNetworkInfo returns some basic stats about the known channel graph from
     * the point of view of the node.
     *
     * @generated from protobuf rpc: GetNetworkInfo(lnrpc.NetworkInfoRequest) returns (lnrpc.NetworkInfo);
     */
    getNetworkInfo(input, options) {
        const method = this.methods[43], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `stop`
     * StopDaemon will send a shutdown request to the interrupt handler, triggering
     * a graceful shutdown of the daemon.
     *
     * @generated from protobuf rpc: StopDaemon(lnrpc.StopRequest) returns (lnrpc.StopResponse);
     */
    stopDaemon(input, options) {
        const method = this.methods[44], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to
     * receive notifications upon any changes to the channel graph topology from
     * the point of view of the responding node. Events notified include: new
     * nodes coming online, nodes updating their authenticated attributes, new
     * channels being advertised, updates in the routing policy for a directional
     * channel edge, and when channels are closed on-chain.
     *
     * @generated from protobuf rpc: SubscribeChannelGraph(lnrpc.GraphTopologySubscription) returns (stream lnrpc.GraphTopologyUpdate);
     */
    subscribeChannelGraph(input, options) {
        const method = this.methods[45], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `debuglevel`
     * DebugLevel allows a caller to programmatically set the logging verbosity of
     * lnd. The logging can be targeted according to a coarse daemon-wide logging
     * level, or in a granular fashion to specify the logging for a target
     * sub-system.
     *
     * @generated from protobuf rpc: DebugLevel(lnrpc.DebugLevelRequest) returns (lnrpc.DebugLevelResponse);
     */
    debugLevel(input, options) {
        const method = this.methods[46], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `feereport`
     * FeeReport allows the caller to obtain a report detailing the current fee
     * schedule enforced by the node globally for each channel.
     *
     * @generated from protobuf rpc: FeeReport(lnrpc.FeeReportRequest) returns (lnrpc.FeeReportResponse);
     */
    feeReport(input, options) {
        const method = this.methods[47], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `updatechanpolicy`
     * UpdateChannelPolicy allows the caller to update the fee schedule and
     * channel policies for all channels globally, or a particular channel.
     *
     * @generated from protobuf rpc: UpdateChannelPolicy(lnrpc.PolicyUpdateRequest) returns (lnrpc.PolicyUpdateResponse);
     */
    updateChannelPolicy(input, options) {
        const method = this.methods[48], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `fwdinghistory`
     * ForwardingHistory allows the caller to query the htlcswitch for a record of
     * all HTLCs forwarded within the target time range, and integer offset
     * within that time range. If no time-range is specified, then the first chunk
     * of the past 24 hrs of forwarding history are returned.
     *
     * A list of forwarding events are returned. The size of each forwarding event
     * is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB.
     * As a result each message can only contain 50k entries. Each response has
     * the index offset of the last entry. The index offset can be provided to the
     * request to allow the caller to skip a series of records.
     *
     * @generated from protobuf rpc: ForwardingHistory(lnrpc.ForwardingHistoryRequest) returns (lnrpc.ForwardingHistoryResponse);
     */
    forwardingHistory(input, options) {
        const method = this.methods[49], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `exportchanbackup`
     * ExportChannelBackup attempts to return an encrypted static channel backup
     * for the target channel identified by it channel point. The backup is
     * encrypted with a key generated from the aezeed seed of the user. The
     * returned backup can either be restored using the RestoreChannelBackup
     * method once lnd is running, or via the InitWallet and UnlockWallet methods
     * from the WalletUnlocker service.
     *
     * @generated from protobuf rpc: ExportChannelBackup(lnrpc.ExportChannelBackupRequest) returns (lnrpc.ChannelBackup);
     */
    exportChannelBackup(input, options) {
        const method = this.methods[50], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * ExportAllChannelBackups returns static channel backups for all existing
     * channels known to lnd. A set of regular singular static channel backups for
     * each channel are returned. Additionally, a multi-channel backup is returned
     * as well, which contains a single encrypted blob containing the backups of
     * each channel.
     *
     * @generated from protobuf rpc: ExportAllChannelBackups(lnrpc.ChanBackupExportRequest) returns (lnrpc.ChanBackupSnapshot);
     */
    exportAllChannelBackups(input, options) {
        const method = this.methods[51], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup
     * snapshot. This method will accept either a packed Single or a packed Multi.
     * Specifying both will result in an error.
     *
     * @generated from protobuf rpc: VerifyChanBackup(lnrpc.ChanBackupSnapshot) returns (lnrpc.VerifyChanBackupResponse);
     */
    verifyChanBackup(input, options) {
        const method = this.methods[52], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `restorechanbackup`
     * RestoreChannelBackups accepts a set of singular channel backups, or a
     * single encrypted multi-chan backup and attempts to recover any funds
     * remaining within the channel. If we are able to unpack the backup, then the
     * new channel will be shown under listchannels, as well as pending channels.
     *
     * @generated from protobuf rpc: RestoreChannelBackups(lnrpc.RestoreChanBackupRequest) returns (lnrpc.RestoreBackupResponse);
     */
    restoreChannelBackups(input, options) {
        const method = this.methods[53], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     *
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to
     * date information concerning the state of all channel backups. Each time a
     * new channel is added, we return the new set of channels, along with a
     * multi-chan backup containing the backup info for all channels. Each time a
     * channel is closed, we send a new update, which contains new new chan back
     * ups, but the updated set of encrypted multi-chan backups with the closed
     * channel(s) removed.
     *
     * @generated from protobuf rpc: SubscribeChannelBackups(lnrpc.ChannelBackupSubscription) returns (stream lnrpc.ChanBackupSnapshot);
     */
    subscribeChannelBackups(input, options) {
        const method = this.methods[54], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * lncli: `bakemacaroon`
     * BakeMacaroon allows the creation of a new macaroon with custom read and
     * write permissions. No first-party caveats are added since this can be done
     * offline.
     *
     * @generated from protobuf rpc: BakeMacaroon(lnrpc.BakeMacaroonRequest) returns (lnrpc.BakeMacaroonResponse);
     */
    bakeMacaroon(input, options) {
        const method = this.methods[55], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listmacaroonids`
     * ListMacaroonIDs returns all root key IDs that are in use.
     *
     * @generated from protobuf rpc: ListMacaroonIDs(lnrpc.ListMacaroonIDsRequest) returns (lnrpc.ListMacaroonIDsResponse);
     */
    listMacaroonIDs(input, options) {
        const method = this.methods[56], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `deletemacaroonid`
     * DeleteMacaroonID deletes the specified macaroon ID and invalidates all
     * macaroons derived from that ID.
     *
     * @generated from protobuf rpc: DeleteMacaroonID(lnrpc.DeleteMacaroonIDRequest) returns (lnrpc.DeleteMacaroonIDResponse);
     */
    deleteMacaroonID(input, options) {
        const method = this.methods[57], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * lncli: `listpermissions`
     * ListPermissions lists all RPC method URIs and their required macaroon
     * permissions to access them.
     *
     * @generated from protobuf rpc: ListPermissions(lnrpc.ListPermissionsRequest) returns (lnrpc.ListPermissionsResponse);
     */
    listPermissions(input, options) {
        const method = this.methods[58], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.LightningClient = LightningClient;
//# sourceMappingURL=rpc.client.js.map