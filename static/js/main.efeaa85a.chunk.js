/*! For license information please see main.efeaa85a.chunk.js.LICENSE.txt */
(this["webpackJsonpflex-ever-surf"] = this["webpackJsonpflex-ever-surf"] || []).push([
    [1], {
        107: function(e, t, n) {
            e.exports = {
                "form-control": "FormControl_form-control__3sG-E",
                label: "FormControl_label__ABzgf",
                "label-active": "FormControl_label-active__3yAH8",
                "label-error": "FormControl_label-error__7StOy",
                shake: "FormControl_shake__3TvNF",
                group: "FormControl_group__3ivuZ",
                icon: "FormControl_icon__jF_Mb",
                "input-component-active": "FormControl_input-component-active__2gPK6"
            }
        },
        155: function(e, t, n) {
            "use strict";
            t.a = {
                abi: '{\n\t"ABI version": 2,\n\t"version": "2.2",\n\t"header": ["time"],\n\t"functions": [\n\t\t{\n\t\t\t"name": "onGetPairs",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"ticker","type":"string"},{"name":"addr","type":"string"},{"name":"majorDecimals","type":"uint8"},{"name":"minorDecimals","type":"uint8"},{"name":"priceScale","type":"string"},{"name":"open","type":"string"},{"name":"price","type":"string"}],"name":"tradingPairs","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetOrderBook",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"price","type":"string"},{"name":"buyVolume","type":"string"},{"name":"sellVolume","type":"string"}],"name":"orderBook","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetRecentTrades",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"time","type":"uint32"},{"name":"side","type":"string"},{"name":"price","type":"string"},{"name":"volume","type":"string"}],"name":"recentTrades","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetStatistic",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"price","type":"string"},{"name":"h24open","type":"string"},{"name":"h24high","type":"string"},{"name":"h24low","type":"string"},{"name":"h24volume","type":"string"}],"name":"statistic","type":"tuple"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetUserWallets",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"ticker","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"string"}],"name":"wallets","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetUserOpenOrders",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"ticker","type":"string"},{"name":"side","type":"string"},{"name":"price","type":"string"},{"name":"amount","type":"string"},{"name":"tpAddress","type":"string"},{"name":"priceNum","type":"string"},{"name":"orderId","type":"string"}],"name":"orders","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetUserTradesHistory",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"ticker","type":"string"},{"name":"side","type":"string"},{"name":"price","type":"string"},{"name":"amount","type":"string"},{"name":"time","type":"uint64"}],"name":"trades","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetUserFunds",\n\t\t\t"inputs": [\n\t\t\t\t{"components":[{"name":"ticker","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalBalance","type":"string"},{"name":"availableBalance","type":"string"}],"name":"funds","type":"tuple[]"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "constructor",\n\t\t\t"inputs": [\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t}\n\t],\n\t"data": [\n\t],\n\t"events": [\n\t],\n\t"fields": [\n\t\t{"name":"_pubkey","type":"uint256"},\n\t\t{"name":"_timestamp","type":"uint64"},\n\t\t{"name":"_constructorFlag","type":"bool"}\n\t]\n}',
                authabi: '{\n\t"ABI version": 2,\n\t"version": "2.2",\n\t"header": ["time"],\n\t"functions": [\n\t\t{\n\t\t\t"name": "onGetFlexClientAndUserId",\n\t\t\t"inputs": [\n\t\t\t\t{"name":"flexClient","type":"optional(address)"},\n\t\t\t\t{"name":"userId","type":"optional(uint256)"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onAuth",\n\t\t\t"inputs": [\n\t\t\t\t{"name":"flexClient","type":"address"},\n\t\t\t\t{"name":"userId","type":"uint256"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "onGetInvokeAuthMessage",\n\t\t\t"inputs": [\n\t\t\t\t{"name":"message","type":"cell"}\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"name": "constructor",\n\t\t\t"inputs": [\n\t\t\t],\n\t\t\t"outputs": [\n\t\t\t]\n\t\t}\n\t],\n\t"data": [\n\t],\n\t"events": [\n\t],\n\t"fields": [\n\t\t{"name":"_pubkey","type":"uint256"},\n\t\t{"name":"_timestamp","type":"uint64"},\n\t\t{"name":"_constructorFlag","type":"bool"}\n\t]\n}',
                tradeabi: '{\n    "ABI version": 2,\n    "version": "2.2",\n    "header": ["time"],\n    "functions": [\n        {\n            "name": "onTrade",\n            "inputs": [\n                {"name":"status","type":"uint8"},\n                {"name":"sdkError","type":"uint32"},\n                {"name":"exitCode","type":"uint32"}\n            ],\n            "outputs": [\n            ]\n        },\n\t\t\t\t{\n\t\t\t\t\t\t"name": "onCancelOrder",\n\t\t\t\t\t\t"inputs": [\n\t\t\t\t\t\t\t\t{"name":"status","type":"uint8"},\n\t\t\t\t\t\t\t\t{"name":"sdkError","type":"uint32"},\n\t\t\t\t\t\t\t\t{"name":"exitCode","type":"uint32"}\n\t\t\t\t\t\t],\n\t\t\t\t\t\t"outputs": [\n\t\t\t\t\t\t]\n\t\t\t\t},\n        {\n            "name": "onSBox",\n            "inputs": [\n                {"name":"result","type":"uint32"},\n                {"name":"key","type":"uint256"}\n            ],\n            "outputs": [\n            ]\n        },\n        {\n            "name": "constructor",\n            "inputs": [\n            ],\n            "outputs": [\n            ]\n        }\n    ],\n    "data": [\n    ],\n    "events": [\n    ],\n    "fields": [\n        {"name":"_pubkey","type":"uint256"},\n        {"name":"_timestamp","type":"uint64"},\n        {"name":"_constructorFlag","type":"bool"}\n    ]\n}'
            }
        },
        162: function(e, t, n) {
            e.exports = {
                switch: "Switch_switch__1ULAK"
            }
        },
        188: function(e, t, n) {
            e.exports = {
                "trades-loading": "Trades_trades-loading__2siPJ",
                trades: "Trades_trades__34rcc",
                "scrollable-table-container": "Trades_scrollable-table-container__-EK2n",
                "trade-table-button": "Trades_trade-table-button__3M3Mm"
            }
        },
        27: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return h
                }));
                var r = n(11),
                    a = n(7),
                    s = n(8),
                    i = n(4),
                    c = n.n(i),
                    o = n(155),
                    l = n.e(0).then(n.bind(null, 414)),
                    u = new Map([
                        ["api", {
                            title: "api",
                            name: "flex4.dev.tonlabs.io",
                            alias: "devnet",
                            address: "0:f6aeecd474b6c9c8e69ba8ba28d64425ae15a5ed33c21723775eebd34688d579"
                        }],
                        ["auth", {
                            title: "auth",
                            name: "flex4.dev.tonlabs.io",
                            alias: "devnet",
                            address: "0:8cfb75d62939ddbebf9cddaa962c0faf0050de3ddd43bc03a4a45ca0f249ba0e"
                        }],
                        ["trade", {
                            title: "trade",
                            name: "flex4.dev.tonlabs.io",
                            alias: "devnet",
                            address: "0:d4a698db78e27b8e8ccd3f75310feebe0f28370b1d8b401f3873804d24558b34"
                        }]
                    ]),
                    d = console,
                    h = function() {
                        function e() {
                            Object(a.a)(this, e), e.init()
                        }
                        return Object(s.a)(e, null, [{
                            key: "init",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return console.log("init"), t.next = 3, l;
                                            case 3:
                                                return e.apiBrowserHandle = t.sent.create_browser(u.get("api").name, u.get("api").address, e.defaultWallet, e.defaultPubkey), t.next = 6, l;
                                            case 6:
                                                e.tradeBrowserHandle = t.sent.create_browser(u.get("trade").name, u.get("trade").address);
                                            case 7:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "updateApiBrowser",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.keypair = n, e.userSigningBox.get_public_key = Object(r.a)(c.a.mark((function t() {
                                                    return c.a.wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.abrupt("return", e.keypair.public);
                                                            case 1:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), e.userSigningBox.sign = function() {
                                                    var t = Object(r.a)(c.a.mark((function t(n) {
                                                        var r;
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, l;
                                                                case 2:
                                                                    return t.next = 4, t.sent.sign(e.keypair, n);
                                                                case 4:
                                                                    return r = t.sent, t.abrupt("return", r.signature);
                                                                case 6:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }(), t.next = 5, l;
                                            case 5:
                                                return t.t0 = t.sent, t.next = 8, e.apiBrowserHandle;
                                            case 8:
                                                return t.t1 = t.sent, t.t2 = e.userSigningBox, t.next = 12, t.t0.register_signing_box.call(t.t0, t.t1, t.t2);
                                            case 12:
                                                return e.sboxApiHandle = t.sent, t.next = 15, l;
                                            case 15:
                                                return t.t3 = t.sent, t.next = 18, e.tradeBrowserHandle;
                                            case 18:
                                                return t.t4 = t.sent, t.t5 = e.userSigningBox, t.next = 22, t.t3.register_signing_box.call(t.t3, t.t4, t.t5);
                                            case 22:
                                                return e.sboxTradeHandle = t.sent, t.next = 25, l;
                                            case 25:
                                                return t.t6 = t.sent, t.next = 28, e.apiBrowserHandle;
                                            case 28:
                                                return t.t7 = t.sent, t.t8 = {
                                                    wallet: e.defaultWallet,
                                                    pubkey: e.keypair.public,
                                                    signing_box: e.sboxApiHandle
                                                }, t.next = 32, t.t6.update_user_settings.call(t.t6, t.t7, t.t8);
                                            case 32:
                                                return t.t9 = t.sent, t.next = 35, l;
                                            case 35:
                                                return t.t10 = t.sent, t.next = 38, e.tradeBrowserHandle;
                                            case 38:
                                                return t.t11 = t.sent, t.t12 = {
                                                    wallet: e.defaultWallet,
                                                    pubkey: e.keypair.public,
                                                    signing_box: e.sboxTradeHandle
                                                }, t.next = 42, t.t10.update_user_settings.call(t.t10, t.t11, t.t12);
                                            case 42:
                                                return t.t13 = t.sent, t.abrupt("return", [t.t9, t.t13]);
                                            case 44:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "buildManifest",
                            value: function(e, t) {
                                return JSON.parse('{\n      "version": 0,\n      "debotAddress": "'.concat(u.get("api").address, '",\n      "initMethod": "').concat(e, '",\n      "initArgs": ').concat(t, ',\n      "quiet": true,\n      "chain": [],\n      "abi": ').concat(o.a.abi, "\n    }"))
                            }
                        }, {
                            key: "buildTradeManifest",
                            value: function(e, t) {
                                return JSON.parse('{\n      "version": 0,\n      "debotAddress": "'.concat(u.get("trade").address, '",\n      "initMethod": "').concat(e, '",\n      "initArgs": ').concat(t, ',\n      "quiet": true,\n      "autoApprove": ["ApproveOnChainCall"],\n      "chain": [],\n      "abi": ').concat(o.a.tradeabi, "\n    }"))
                            }
                        }, {
                            key: "getPairs",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    var n;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getPairs...\n"), n = e.buildManifest("getPairs", "{}"), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = n, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getPairStats",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getPairStats...\n"), r = e.buildManifest("getStatistic", '{"tradingPair":"'.concat(n.addr, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getOrderBook",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getOrderBook for ".concat(n.ticker, "...\n")), r = e.buildManifest("getOrderBook", '{"tradingPair":"'.concat(n.addr, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getRecentTrades",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getRecentTrades for ".concat(n.ticker, "...\n")), r = e.buildManifest("getRecentTrades", '{"tradingPair":"'.concat(n.addr, '","startTime":0}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getUserWallets",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, r) {
                                    var a;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getUserWallets for ".concat(n, "...\n")), a = e.buildManifest("getUserWallets", '{"userId": "'.concat(n, '", "flexClient": "').concat(r, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = a, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getUserOpenOrders",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getUserOpenOrders for ".concat(n, "...\n")), r = e.buildManifest("getUserOpenOrders", '{"userId": "'.concat(n, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getUserTrades",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getUserTradesHistory for ".concat(n, "...\n")), r = e.buildManifest("getUserTradesHistory", '{"userId": "'.concat(n, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getUserFunds",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, r) {
                                    var a;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getUserFunds for ".concat(n, "...\n")), a = e.buildManifest("getUserFunds", '{"userId": "'.concat(n, '", "flexClient": "').concat(r, '"}')), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.apiBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = a, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "trade",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, r, a, s, i, o) {
                                    var u;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling trade for ".concat(n, "...\n")), t.t0 = e, t.t1 = '{"pubkey": "0x', t.next = 5, e.keypair.public;
                                            case 5:
                                                return t.t2 = t.sent, t.t3 = t.t1.concat.call(t.t1, t.t2, '", "flexClient": "').concat(e.flexClient, '", "userId": "').concat(e.userId, '", "tradingPair": "').concat(n, '", "sell": "').concat(r, '", "ioc": "').concat(a, '", "post": "').concat(s, '", "amount": "').concat(i, '", "priceNum": "').concat(o, '"}'), u = t.t0.buildTradeManifest.call(t.t0, "trade", t.t3), console.log(u), t.next = 11, l;
                                            case 11:
                                                return t.t4 = t.sent, t.next = 14, e.tradeBrowserHandle;
                                            case 14:
                                                return t.t5 = t.sent, t.t6 = u, t.next = 18, t.t4.run_browser.call(t.t4, t.t5, t.t6);
                                            case 18:
                                                return t.abrupt("return", t.sent);
                                            case 19:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n, r, a, s, i) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "cancelOrder",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, r, a, s) {
                                    var i;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling cancelOrder for ".concat(n, "...\n")), i = e.buildTradeManifest("cancelOrder", '{"flexClient": "'.concat(e.flexClient, '", "userId": "').concat(e.userId, '", "tradingPair": "').concat(n, '", "sell": "').concat(r, '", "priceNum": "').concat(a, '", "orderId": "').concat(s, '"}')), console.log(i), t.next = 5, l;
                                            case 5:
                                                return t.t0 = t.sent, t.next = 8, e.tradeBrowserHandle;
                                            case 8:
                                                return t.t1 = t.sent, t.t2 = i, t.next = 12, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 12:
                                                return t.abrupt("return", t.sent);
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n, r, a) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getSBox",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    var n;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return d.log("Calling getSBox"), n = e.buildTradeManifest("getSBox", "{}"), t.next = 4, l;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.tradeBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = n, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }]), e
                    }();
                h.convert = function(t, n) {
                    return function(r) {
                        return e.from(r, t).toString(n)
                    }
                }, h.hexToUtf8 = h.convert("hex", "utf8"), h.utf8ToHex = h.convert("utf8", "hex"), h.apiBrowserHandle = void 0, h.tradeBrowserHandle = void 0, h.sboxApiHandle = void 0, h.sboxTradeHandle = void 0, h.defaultWallet = null, h.defaultPubkey = null, h.flexClient = void 0, h.userId = void 0, h.keypair = void 0, h.userSigningBox = {}, Object(r.a)(c.a.mark((function e() {
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                new h;
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }).call(this, n(35).Buffer)
        },
        31: function(e, t, n) {
            e.exports = {
                picker: "Picker_picker__3dMDW",
                label: "Picker_label__18LTj",
                "label-active": "Picker_label-active__34EMM",
                "label-error": "Picker_label-error__2IV3Z",
                shake: "Picker_shake__ymFSp",
                group: "Picker_group__2vl6d",
                input: "Picker_input__3ou3N",
                select: "Picker_select__2Nz3j",
                "dropdown-button": "Picker_dropdown-button__1rZkl",
                "dropdown-button-icon": "Picker_dropdown-button-icon__2_MuQ",
                "dropdown-button-body": "Picker_dropdown-button-body__2g8pd",
                "dropdown-button-chevron": "Picker_dropdown-button-chevron__E9oc-",
                "dropdown-menu": "Picker_dropdown-menu__3rl-U",
                "dropdown-menu-header": "Picker_dropdown-menu-header__cIg4x",
                "dropdown-menu-body": "Picker_dropdown-menu-body__G3gqV",
                option: "Picker_option__3lz4L",
                "option-selected": "Picker_option-selected__3SgdA",
                "option-disabled": "Picker_option-disabled__2UDEr",
                "option-icon": "Picker_option-icon__1K5Mb",
                "option-label": "Picker_option-label__BC95Y",
                "option-title": "Picker_option-title__1Tu5T",
                "dropdown-menu-active": "Picker_dropdown-menu-active__c-IVE"
            }
        },
        384: function(e, t, n) {
            e.exports = {
                orderbook: "Orderbook_orderbook__Z5mNC"
            }
        },
        388: function(e, t, n) {
            e.exports = {
                header: "Header_header__1fCsm",
                navbar: "Header_navbar__2GzfN",
                "navbar-brand": "Header_navbar-brand__3lGXh",
                btn: "Header_btn__3Wkv8",
                "navbar-collapse": "Header_navbar-collapse__37uIs",
                "navbar-nav": "Header_navbar-nav__2U3k6",
                "surf-toggle": "Header_surf-toggle__1gTyv",
                "nav-item": "Header_nav-item__3Z5n3",
                active: "Header_active__10Kea",
                "navbar-dropdown": "Header_navbar-dropdown__3PKJu",
                "nav-link": "Header_nav-link__mQ8HP",
                "nav-link-default": "Header_nav-link-default__2zunU",
                "navbar-toggler": "Header_navbar-toggler__pyFj-",
                collapsed: "Header_collapsed__1TpfC",
                "header-panel": "Header_header-panel__1D6fP",
                "pairs-menu": "Header_pairs-menu__3fpln"
            }
        },
        392: function(e, t, n) {},
        393: function(e, t, n) {
            e.exports = {
                "pair-stats": "Stats_pair-stats__XlfMn",
                "pair-stats-header": "Stats_pair-stats-header__1yUNF",
                "pair-stats-body": "Stats_pair-stats-body__iJsIO",
                up: "Stats_up__1tYLB",
                down: "Stats_down__1TKxa",
                "pair-stats-skeleton": "Stats_pair-stats-skeleton__zOxEK"
            }
        },
        394: function(e, t, n) {
            e.exports = {
                panel: "Panel_panel__3VGf8",
                "panel-header": "Panel_panel-header__2q5MS",
                "panel-body": "Panel_panel-body__3Xm-c"
            }
        },
        395: function(e, t, n) {
            e.exports = {
                skeleton: "Skeleton_skeleton__8yEY-",
                "skeleton-normal": "Skeleton_skeleton-normal__3LEOo",
                "skeleton-primary": "Skeleton_skeleton-primary__3INrS",
                "skeleton-green": "Skeleton_skeleton-green__2Sejr",
                "skeleton-red": "Skeleton_skeleton-red__3y6rq",
                "skeleton-height-large": "Skeleton_skeleton-height-large__3QSCo",
                "skeleton-width-normal": "Skeleton_skeleton-width-normal__3nH6k",
                "skeleton-width-half": "Skeleton_skeleton-width-half__2ADwC",
                "skeleton-width-triplet": "Skeleton_skeleton-width-triplet__1soHf"
            }
        },
        396: function(e, t, n) {
            e.exports = {
                loader: "Loader_loader__lzqSF",
                spinner: "Loader_spinner__odVZ-"
            }
        },
        397: function(e, t, n) {
            e.exports = {
                "progress-ring": "progressRing_progress-ring__2q1LP",
                "circle-back": "progressRing_circle-back__1k8OJ",
                "circle-bar": "progressRing_circle-bar__7ceJ-",
                active: "progressRing_active__3YRG9"
            }
        },
        398: function(e, t, n) {
            e.exports = {
                "toast-container": "Toast_toast-container__1Q6KF",
                toast: "Toast_toast__152gw",
                "toast-header": "Toast_toast-header__2ItDN",
                "toast-body": "Toast_toast-body__AT2O-"
            }
        },
        400: function(e, t, n) {
            e.exports = {
                orderbook: "Form_orderbook__1Hl6_",
                "btn-buy": "Form_btn-buy__1kP9R",
                disabled: "Form_disabled__2nyfJ",
                "btn-sell": "Form_btn-sell__3D-UP"
            }
        },
        404: function(e, t, n) {
            e.exports = {
                tooltip: "cursorTooltip_tooltip__2g8of",
                active: "cursorTooltip_active__AhOjg"
            }
        },
        409: function(e, t, n) {
            e.exports = {
                "enter-form": "Authenticate_enter-form__2FBlc",
                description: "Authenticate_description__2rTTe",
                logo: "Authenticate_logo__1ObXT",
                input: "Authenticate_input__1OkBr",
                "show-button": "Authenticate_show-button__1faQl",
                "btn-enter": "Authenticate_btn-enter__23bn7",
                note: "Authenticate_note__1UJ5n",
                error: "Authenticate_error__NGFEt",
                shake: "Authenticate_shake__rXltH"
            }
        },
        49: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return j
                }));
                var r = n(11),
                    a = n(7),
                    s = n(8),
                    i = n(4),
                    c = n.n(i),
                    o = n(155),
                    l = n(27),
                    u = n(405),
                    d = n(782),
                    h = n(82),
                    p = (n(544), n.e(0).then(n.bind(null, 414))),
                    b = console,
                    j = function() {
                        function e() {
                            Object(a.a)(this, e), e.init()
                        }
                        return Object(s.a)(e, null, [{
                            key: "init",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (e.Storage = new d.a, !e.Storage.get("woof") || !e.Storage.get("ruff")) {
                                                    t.next = 7;
                                                    break
                                                }
                                                e.mode = "signin", e.keystoreEncrypted = e.Storage.get("woof"), e.nonceEncrypted = e.Storage.get("ruff"), t.next = 13;
                                                break;
                                            case 7:
                                                return e.mode = "signup", e.Storage.remove("woof"), e.Storage.remove("ruff"), t.next = 12, p;
                                            case 12:
                                                e.keystore.keyPair = t.sent.generate_keypair();
                                            case 13:
                                                return t.next = 15, p;
                                            case 15:
                                                e.authBrowserHandle = t.sent.create_browser(l.a.get("auth").name, l.a.get("auth").address);
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "authorize",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", new Promise(function() {
                                                    var t = Object(r.a)(c.a.mark((function t(n, a) {
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    p.then((function() {
                                                                        var t;
                                                                        e.keystore.keyPair && e.getFlexClientAndUserId(null === (t = e.keystore.keyPair) || void 0 === t ? void 0 : t.public).then(function() {
                                                                            var t = Object(r.a)(c.a.mark((function t(r) {
                                                                                return c.a.wrap((function(t) {
                                                                                    for (;;) switch (t.prev = t.next) {
                                                                                        case 0:
                                                                                            console.log(r), r.flexClient ? (e._isAuthenticated = !0, e.flexClient = r.flexClient, e.userId = r.userId, l.b.flexClient = r.flexClient, l.b.userId = r.userId, l.b.updateApiBrowser(e.keystore.keyPair), n(r)) : n(void 0);
                                                                                        case 2:
                                                                                        case "end":
                                                                                            return t.stop()
                                                                                    }
                                                                                }), t)
                                                                            })));
                                                                            return function(e) {
                                                                                return t.apply(this, arguments)
                                                                            }
                                                                        }())
                                                                    }), (function(e) {
                                                                        a(), alert("Rejected: " + e)
                                                                    }));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "authorizePolling",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", new Promise(function() {
                                                    var t = Object(r.a)(c.a.mark((function t(n, r) {
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    p.then((function() {
                                                                        var t = setInterval((function() {
                                                                            e.checkAuthorization(n, r, t)
                                                                        }), 3e3)
                                                                    }), (function(e) {
                                                                        r(), alert("Rejected: " + e)
                                                                    }));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "invokeAuthMessage",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", new Promise(function() {
                                                    var t = Object(r.a)(c.a.mark((function t(n, a) {
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    p.then(Object(r.a)(c.a.mark((function t() {
                                                                        var r, a;
                                                                        return c.a.wrap((function(t) {
                                                                            for (;;) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    if (e.authMessage || null === (r = e.keystore.keyPair) || void 0 === r || !r.public) {
                                                                                        t.next = 11;
                                                                                        break
                                                                                    }
                                                                                    return t.t0 = e, t.t1 = null === (a = e.keystore.keyPair) || void 0 === a ? void 0 : a.public, t.next = 5, e.password;
                                                                                case 5:
                                                                                    return t.t2 = t.sent, t.t3 = e.username, t.next = 9, t.t0.getInvokeAuthMessage.call(t.t0, t.t1, t.t2, t.t3);
                                                                                case 9:
                                                                                    e.authMessage = t.sent.message, n(e.authMessage);
                                                                                case 11:
                                                                                case "end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t)
                                                                    }))), (function(e) {
                                                                        a(), alert("Auth message error: " + e)
                                                                    }));
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "checkAuthorization",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, a, s) {
                                    var i;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e._isAuthenticated ? s && clearInterval(s) : e.keystore.keyPair && e.getFlexClientAndUserId(null === (i = e.keystore.keyPair) || void 0 === i ? void 0 : i.public).then(function() {
                                                    var t = Object(r.a)(c.a.mark((function t(r) {
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    console.log(r), r.flexClient && (e._isAuthenticated = !0, e.flexClient = r.flexClient, e.userId = r.userId, l.b.flexClient = r.flexClient, l.b.userId = r.userId, l.b.updateApiBrowser(e.keystore.keyPair), console.log(l.b.updateApiBrowser(e.keystore.keyPair)), s && clearInterval(s), n(r));
                                                                case 2:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }());
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n, r) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "setEntered",
                            value: function(t) {
                                t && e.Storage.set("bark", t, {
                                    maxAge: 302400
                                }), e._isEntered = t
                            }
                        }, {
                            key: "logOut",
                            value: function() {
                                e._isEntered = !1
                            }
                        }, {
                            key: "deleteSession",
                            value: function() {
                                e.keystore.keyPair = void 0, e.Storage.remove("woof"), e.Storage.remove("ruff"), e._isAuthenticated = !1, e._isEntered = !1
                            }
                        }, {
                            key: "enterCredentials",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var a, s;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return a = n.username, s = n.password, t.abrupt("return", new Promise(function() {
                                                    var t = Object(r.a)(c.a.mark((function t(n, r) {
                                                        var i, o, l, u;
                                                        return c.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2, p;
                                                                case 2:
                                                                    return t.next = 4, t.sent.sha256(h.a.stringToBase64(s.trim()));
                                                                case 4:
                                                                    if (e.password = t.sent, e.username = a.trim(), "signup" !== e.mode) {
                                                                        t.next = 32;
                                                                        break
                                                                    }
                                                                    return t.t0 = e, t.next = 10, s;
                                                                case 10:
                                                                    return t.t1 = t.sent, t.t2 = e, t.next = 14, e.deviceID;
                                                                case 14:
                                                                    return t.t3 = t.sent, t.next = 17, t.t2.saltKey.call(t.t2, t.t3);
                                                                case 17:
                                                                    return t.t4 = t.sent, t.next = 20, t.t0.deriveKeyFromPasswordAndSalt.call(t.t0, t.t1, t.t4);
                                                                case 20:
                                                                    return e.derivedKey = t.sent, t.next = 23, e.encryptString(JSON.stringify(e.keystore), e.derivedKey);
                                                                case 23:
                                                                    i = t.sent, o = i.encStr, l = i.nonce, e.Storage.set("woof", o, {
                                                                        maxAge: 2147483647
                                                                    }), e.Storage.set("ruff", l + o, {
                                                                        maxAge: 2147483647
                                                                    }), n(!0), e._isEntered = !0, t.next = 50;
                                                                    break;
                                                                case 32:
                                                                    return t.t5 = e, t.next = 35, s;
                                                                case 35:
                                                                    return t.t6 = t.sent, t.t7 = e, t.next = 39, e.deviceID;
                                                                case 39:
                                                                    return t.t8 = t.sent, t.next = 42, t.t7.saltKey.call(t.t7, t.t8);
                                                                case 42:
                                                                    return t.t9 = t.sent, t.next = 45, t.t5.deriveKeyFromPasswordAndSalt.call(t.t5, t.t6, t.t9);
                                                                case 45:
                                                                    return e.derivedKey = t.sent, t.next = 48, e.decryptString({
                                                                        encStr: e.keystoreEncrypted,
                                                                        nonce: e.nonceEncrypted.substring(0, e.nonceEncrypted.length - e.keystoreEncrypted.length)
                                                                    }, e.derivedKey);
                                                                case 48:
                                                                    u = t.sent;
                                                                    try {
                                                                        e.keystore = JSON.parse(u), e._isEntered = !0, n(!0)
                                                                    } catch (r) {
                                                                        n(!1), console.error("Login and password pair is not correct")
                                                                    }
                                                                case 50:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t)
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "isEntered",
                            value: function() {
                                return e._isEntered
                            }
                        }, {
                            key: "isAuthenticated",
                            value: function() {
                                return e._isAuthenticated
                            }
                        }, {
                            key: "saltKey",
                            value: function() {
                                var e = Object(r.a)(c.a.mark((function e(t) {
                                    return c.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, p;
                                            case 2:
                                                return e.next = 4, e.sent.sha256(h.a.stringToBase64(t));
                                            case 4:
                                                return e.abrupt("return", e.sent);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "deriveKeyFromPasswordAndSalt",
                            value: function() {
                                var e = Object(r.a)(c.a.mark((function e(t, n) {
                                    var r, a, s, i, o;
                                    return c.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = 14, a = 8, s = 1, i = 32, e.next = 6, p;
                                            case 6:
                                                return e.next = 8, e.sent.scrypt({
                                                    password: h.a.stringToBase64(t),
                                                    salt: h.a.stringToBase64(n),
                                                    log_n: r,
                                                    r: a,
                                                    p: s,
                                                    dk_len: i
                                                });
                                            case 8:
                                                return o = e.sent, e.abrupt("return", o);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "encryptString",
                            value: function() {
                                var e = Object(r.a)(c.a.mark((function e(t, n) {
                                    var r, a, s;
                                    return c.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, p;
                                            case 2:
                                                return e.next = 4, e.sent.generate_random_bytes(12);
                                            case 4:
                                                return r = e.sent, a = h.a.base64ToHex(r), e.next = 8, p;
                                            case 8:
                                                return e.next = 10, e.sent.chacha20({
                                                    data: h.a.stringToBase64(t),
                                                    nonce: a,
                                                    key: n
                                                });
                                            case 10:
                                                return s = e.sent, e.abrupt("return", {
                                                    encStr: s,
                                                    nonce: h.a.hexToBase64(a)
                                                });
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "decryptString",
                            value: function() {
                                var e = Object(r.a)(c.a.mark((function e(t, n) {
                                    var r, a;
                                    return c.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = h.a.base64ToHex(t.nonce), e.next = 3, p;
                                            case 3:
                                                return e.next = 5, e.sent.chacha20({
                                                    data: t.encStr,
                                                    nonce: r,
                                                    key: n
                                                });
                                            case 5:
                                                return a = e.sent, e.abrupt("return", h.a.base64ToString(a));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "buildManifest",
                            value: function(e, t) {
                                return JSON.parse('{\n      "version": 0,\n      "debotAddress": "'.concat(l.a.get("auth").address, '",\n      "initMethod": "').concat(e, '",\n      "initArgs": ').concat(t, ',\n      "quiet": true,\n      "chain": [],\n      "abi": ').concat(o.a.authabi, "\n    }"))
                            }
                        }, {
                            key: "getFlexClientAndUserId",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n) {
                                    var r;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return b.log("Calling getFlexClientAndUserId...\n"), r = e.buildManifest("getFlexClientAndUserId", '{"pubkey" : "0x'.concat(n, '"}')), console.log(r), t.next = 5, p;
                                            case 5:
                                                return t.t0 = t.sent, t.next = 8, e.authBrowserHandle;
                                            case 8:
                                                return t.t1 = t.sent, t.t2 = r, t.next = 12, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 12:
                                                return t.abrupt("return", t.sent);
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getInvokeAuthMessage",
                            value: function() {
                                var t = Object(r.a)(c.a.mark((function t(n, r, a) {
                                    var s;
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return b.log("Calling getInvokeAuthMessage...\n"), s = e.buildManifest("getInvokeAuthMessage", '{"pubkey" : "0x'.concat(n, '", "keyHash" : "0x').concat(r, '", "login" : "').concat(a, '"}')), t.next = 4, p;
                                            case 4:
                                                return t.t0 = t.sent, t.next = 7, e.authBrowserHandle;
                                            case 7:
                                                return t.t1 = t.sent, t.t2 = s, t.next = 11, t.t0.run_browser.call(t.t0, t.t1, t.t2);
                                            case 11:
                                                return t.abrupt("return", t.sent);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n, r) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }]), e
                    }();
                j.convert = function(t, n) {
                    return function(r) {
                        return e.from(r, t).toString(n)
                    }
                }, j.hexToUtf8 = j.convert("hex", "utf8"), j.utf8ToHex = j.convert("utf8", "hex"), j.authBrowserHandle = void 0, j._isAuthenticated = !1, j._isEntered = !1, j.keystoreEncrypted = void 0, j.nonceEncrypted = void 0, j.derivedKey = void 0, j.mode = void 0, j.deviceID = Object(r.a)(c.a.mark((function e() {
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, u.a.load();
                            case 2:
                                return e.next = 4, e.sent.get();
                            case 4:
                                return e.abrupt("return", e.sent.visitorId);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))(), j.keystore = {
                    keyPair: void 0,
                    version: "1.0"
                }, j.enter = "t8mK_1", j.username = void 0, j.password = void 0, j.userId = "", j.flexClient = "", j.Storage = void 0, j.PollingInterval = void 0, j.authMessage = void 0, Object(r.a)(c.a.mark((function e() {
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                new j;
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }).call(this, n(35).Buffer)
        },
        546: function(e, t) {},
        548: function(e, t) {},
        55: function(e, t, n) {
            e.exports = {
                input: "Input_input__3eDDn",
                label: "Input_label__1Hg8k",
                "label-active": "Input_label-active__2Svhw",
                "label-error": "Input_label-error__30C2G",
                shake: "Input_shake__3e1ji",
                group: "Input_group__sJYP3",
                units: "Input_units__3bV6X",
                clear: "Input_clear__3XLO0",
                "clear-button": "Input_clear-button__25Xut",
                active: "Input_active__2goe-",
                "input-component": "Input_input-component__14S7R",
                "input-component-active": "Input_input-component-active__ktSXJ",
                icon: "Input_icon__1wu5x",
                "input-disabled": "Input_input-disabled__3gxny",
                "input-icon": "Input_input-icon__2n79n"
            }
        },
        558: function(e, t) {},
        560: function(e, t) {},
        587: function(e, t) {},
        588: function(e, t) {},
        593: function(e, t) {},
        595: function(e, t) {},
        602: function(e, t) {},
        621: function(e, t) {},
        71: function(e, t, n) {
            e.exports = {
                btn: "Button_btn__1hdG6",
                "btn-icon": "Button_btn-icon__2kS8a",
                "btn-primary": "Button_btn-primary__1XfPA",
                "btn-default": "Button_btn-default__2jiz2",
                "btn-semitransparent": "Button_btn-semitransparent__2oy4p",
                "btn-transparent": "Button_btn-transparent__kmuE1",
                "btn-icon-arrow-right": "Button_btn-icon-arrow-right__2dn79",
                "btn-icon-arrow-up-right": "Button_btn-icon-arrow-up-right__2bEWH",
                "dropdown-toggle": "Button_dropdown-toggle__hpiXj",
                "dropdown-menu": "Button_dropdown-menu__1ErR6",
                "dropdown-item": "Button_dropdown-item__h9Ekl",
                "btn-lg": "Button_btn-lg__3CoFO",
                "btn-xl": "Button_btn-xl__vif0K"
            }
        },
        775: function(e, t, n) {
            var r = {
                "./surf-decentralization-policy.md": [783, 4]
            };

            function a(e) {
                if (!n.o(r, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    a = t[0];
                return n.e(t[1]).then((function() {
                    return n(a)
                }))
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.id = 775, e.exports = a
        },
        776: function(e, t, n) {},
        777: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a, s, i, c, o, l = n(1),
                u = n.n(l),
                d = n(65),
                h = n.n(d),
                p = n(11),
                b = n(6),
                j = n(4),
                f = n.n(j),
                m = n(90),
                v = n(3),
                g = n(34),
                x = n(10),
                O = n.n(x),
                w = n(377),
                y = n(9),
                _ = n(797),
                k = n(799),
                C = n(800),
                S = n(796),
                N = n(807),
                A = n(91),
                L = n(808),
                P = n(188),
                B = n.n(P),
                M = n(26),
                F = n.n(M),
                E = n(189),
                I = n(0),
                T = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "Ever Surf" : t,
                        r = e.description,
                        a = void 0 === r ? "A free, private and easy blockchain interface for smart people." : r,
                        s = e.keywords;
                    return Object(I.jsxs)(E.a, {
                        children: [Object(I.jsx)("title", {
                            children: n
                        }), Object(I.jsx)("meta", {
                            name: "description",
                            content: a
                        }), Object(I.jsx)("meta", {
                            name: "keywords",
                            content: s
                        })]
                    })
                },
                H = n(41),
                z = n(27),
                R = "SET_AUTH",
                D = "SELECT_PAIR",
                V = "SET_PAIRS",
                U = "LOAD_PAIRS",
                W = "SET_ORDERBOOK",
                K = "LOAD_ORDERBOOK",
                q = "SET_TRADES",
                Z = "LOAD_TRADES",
                G = "UPDATE_TRADES",
                J = "SET_STATS",
                Y = "LOAD_STATS",
                X = "SET_USER_WALLETS",
                Q = "LOAD_USER_WALLETS",
                $ = "UPDATE_USER_WALLETS",
                ee = "SET_USER_TRADES",
                te = "LOAD_USER_TRADES",
                ne = "UPDATE_USER_TRADES",
                re = "SET_USER_FUNDS",
                ae = "LOAD_USER_FUNDS",
                se = "SET_USER_OPEN_ORDERS",
                ie = "LOAD_USER_OPEN_ORDERS",
                ce = "UPDATE_USER_OPEN_ORDERS",
                oe = "SELECT_ORDERBOOK_ROW",
                le = "SET_EXCHANGE_MODE",
                ue = function(e) {
                    return {
                        type: W,
                        payload: e
                    }
                },
                de = function(e) {
                    return {
                        type: R,
                        payload: e
                    }
                },
                he = function(e) {
                    return {
                        type: D,
                        payload: e
                    }
                },
                pe = n(115),
                be = n(802),
                je = n(805),
                fe = n(804),
                me = n(381),
                ve = "wss://flex4.dev.tonlabs.io/graphql";

            function ge() {
                if (window.subscriptionClient) return window.subscriptionClient;
                var e = new me.a({
                    uri: ve,
                    options: {
                        reconnect: !0
                    }
                });
                return window.subscriptionClient = new be.a({
                    link: e,
                    cache: new je.a
                }), window.subscriptionClient
            }
            var xe = {
                    getSubscriptionClient: ge,
                    subscribeOrderbook: function(e) {
                        return ge().subscribe({
                            query: Object(fe.a)(i || (i = Object(pe.a)(['\n    subscription {\n      flexMarketOrderBook(\n        pairAddress: "', '"\n      ) {\n        bids {\n          price\n          amount\n        }\n        asks {\n          price\n          amount\n        }\n      }\n    }'])), e),
                            variables: {}
                        })
                    },
                    subscribeBars: function(e, t) {
                        return ge().subscribe({
                            query: Object(fe.a)(c || (c = Object(pe.a)(['\n    subscription {\n      flexMarketPriceHistory(\n        pairAddress: "', '"\n        resolution: ', "\n      ) {\n        open close low high time volume\n      }\n    }"])), e, 60 * t),
                            variables: {}
                        })
                    },
                    subscribeRecentTrades: function(e) {
                        return ge().subscribe({
                            query: Object(fe.a)(o || (o = Object(pe.a)(['\n    subscription {\n      flexMarketRecentTrades(\n        pairAddress: "', '"\n      ) {\n        price amount id time side amountUnits\n      }\n    }'])), e),
                            variables: {}
                        })
                    },
                    subscribeUserOrders: function(e) {
                        return ge().subscribe({
                            query: Object(fe.a)(s || (s = Object(pe.a)(['\n    subscription {\n      flexUserOrders(\n        userId: "', '"\n      ) {\n        orderId\n        pair {ticker address priceScale minAmount}\n        price\n        priceNum\n        side\n        amountLeft\n        finishTime\n      }\n    }'])), e),
                            variables: {}
                        })
                    },
                    subscribeUserWallets: function(e, t) {
                        return ge().subscribe({
                            query: Object(fe.a)(a || (a = Object(pe.a)(['\n    subscription {\n      flexWallets(\n        userId: "', '"\n        clientAddress: "', '"\n      ) {\n        address\n        cursor\n        balanceInOrders\n        availableBalance\n        nativeCurrencyBalance\n        totalBalance\n        token {ticker decimals}\n      }\n    }'])), e, t),
                            variables: {}
                        })
                    },
                    subscribeUserTrades: function(e) {
                        return ge().subscribe({
                            query: Object(fe.a)(r || (r = Object(pe.a)(['\n    subscription {\n      flexUserTrades(\n        userId: "', '"\n      ) {\n        side\n        price\n        amount\n        time\n        pair {ticker address priceScale minAmount}\n        id\n        fees\n        liquidity\n      }\n    }'])), e),
                            variables: {}
                        })
                    },
                    setEndpoint: function(e) {
                        ve = "wss://".concat(e, "/graphql")
                    }
                },
                Oe = "https://flex4.dev.tonlabs.io/graphql";

            function we() {
                return (we = Object(p.a)(f.a.mark((function e(t) {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (window.subscriptions && window.subscriptions[t]) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, window.subscriptions[t].unsubscribe();
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ye() {
                return (ye = Object(p.a)(f.a.mark((function e(t, n, r) {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[n] = xe.subscribeUserOrders(t).subscribe({
                                    next: function(e) {
                                        var t = e.data.flexUserOrders;
                                        r(t)
                                    }
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _e() {
                return (_e = Object(p.a)(f.a.mark((function e(t, n, r, a) {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[r] = xe.subscribeUserWallets(t, n).subscribe({
                                    next: function(e) {
                                        var t = e.data.flexWallets;
                                        a(t)
                                    }
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ke() {
                return (ke = Object(p.a)(f.a.mark((function e(t, n, r) {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[n] = xe.subscribeUserTrades(t).subscribe({
                                    next: function(e) {
                                        var t = e.data.flexUserTrades;
                                        r(t)
                                    }
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ce() {
                return (Ce = Object(p.a)(f.a.mark((function e(t, n, r) {
                    var a;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ee("", t);
                            case 2:
                                a = e.sent, xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[n] = xe.subscribeRecentTrades(t).subscribe({
                                    next: function(e) {
                                        var t = e.data.flexMarketRecentTrades;
                                        r(t.map((function(e) {
                                            return Object(v.a)(Object(v.a)({}, e), {}, {
                                                volume: e.amount
                                            })
                                        })), a)
                                    }
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Se() {
                return (Se = Object(p.a)(f.a.mark((function e(t, n, r) {
                    var a;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ee("", t);
                            case 2:
                                a = e.sent, xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[n] = xe.subscribeOrderbook(t).subscribe({
                                    next: function(e) {
                                        var t = e.data.flexMarketOrderBook;
                                        r(t, a)
                                    }
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ne() {
                return (Ne = Object(p.a)(f.a.mark((function e(t, n, r, a) {
                    var s;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ee(t);
                            case 2:
                                if (s = e.sent) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 5:
                                xe.getSubscriptionClient(), window.subscriptions || (window.subscriptions = {}), window.subscriptions[a] = xe.subscribeBars(s.address, n).subscribe({
                                    next: function(e) {
                                        var a = e.data.flexMarketPriceHistory;
                                        a.sort((function(e, t) {
                                            return e.time < t.time ? -1 : e.time > t.time ? 1 : 0
                                        }));
                                        var s = window.subscriptions && window.subscriptions["".concat(t, "-").concat(n)] ? window.subscriptions["".concat(t, "-").concat(n)].lastBar : null;
                                        a.forEach((function(e) {
                                            e.time *= 1e3, (s && s.time <= e.time || !s) && r(e)
                                        }))
                                    }
                                });
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ae(e) {
                return Le.apply(this, arguments)
            }

            function Le() {
                return (Le = Object(p.a)(f.a.mark((function e(t) {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", fetch(Oe, {
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST",
                                    body: JSON.stringify({
                                        query: t
                                    })
                                }).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return e.data
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Pe() {
                return (Pe = Object(p.a)(f.a.mark((function e() {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ae("query {flex {version}}").then((function(e) {
                                    return e.flex.version
                                })).catch((function(e) {
                                    console.error("flexVersion:error", e)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Be() {
                return (Be = Object(p.a)(f.a.mark((function e() {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ae("query { info {time}}").then((function(e) {
                                    return e.info.time
                                })).catch((function(e) {
                                    console.error("flexTime:error", e)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Me() {
                return Fe.apply(this, arguments)
            }

            function Fe() {
                return (Fe = Object(p.a)(f.a.mark((function e() {
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Ae("query{flex{  pairs{    address    ticker    minMove    priceScale    minAmount  }}}").then((function(e) {
                                    return e.flex.pairs
                                })).catch((function(e) {
                                    return console.error("flexPairs:error", e), []
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ee() {
                return Ie.apply(this, arguments)
            }

            function Ie() {
                return Ie = Object(p.a)(f.a.mark((function e() {
                    var t, n, r, a, s = arguments;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = s.length > 0 && void 0 !== s[0] ? s[0] : "", n = s.length > 1 && void 0 !== s[1] ? s[1] : "", e.next = 4, Me();
                            case 4:
                                if (r = e.sent) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 7:
                                return a = r.find((function(e) {
                                    return e.address === n || t.length && e.address.startsWith(t.substr(t.length - 4))
                                })), e.abrupt("return", a || null);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), Ie.apply(this, arguments)
            }

            function Te() {
                return Te = Object(p.a)(f.a.mark((function e(t) {
                    var n = arguments;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n.length > 1 && void 0 !== n[1] ? n[1] : 0, e.abrupt("return", Ae("query {flex {" + '  market(pairAddress: "'.concat(t, '") {') + "    orderBook {      bids {        price        amount      }      asks {        price        amount      }    }  }}}").then((function(e) {
                                    return e.flex.market ? e.flex.market.orderBook : null
                                })).catch((function(e) {
                                    console.error("flexOrderBook:error", e)
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), Te.apply(this, arguments)
            }

            function He() {
                return (He = Object(p.a)(f.a.mark((function e(t, n, r, a, s, i) {
                    var c, o;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ee(t);
                            case 2:
                                if (c = e.sent) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 5:
                                return o = "", n && (o += "".concat(o ? ", " : "", "resolution:").concat(60 * n)), a && (o += "".concat(o ? ", " : "", "countBack:").concat(a)), r && (o += "".concat(o ? ", " : "", "startTime:").concat(r)), s && (o += "".concat(o ? ", " : "", "endTime:").concat(s)), e.abrupt("return", Ae("query{flex{" + '    market(pairAddress: "'.concat(c.address, '"){') + "      priceHistory(".concat(o, "){") + "        nextTime        prices{           open           close           high           low           volume           time        }      }    }  }}").then((function(e) {
                                    return e && e.flex && e.flex.market ? {
                                        prices: e.flex.market.priceHistory.prices,
                                        nextTime: e.flex.market.priceHistory.nextTime
                                    } : {
                                        prices: []
                                    }
                                })).catch((function(e) {
                                    console.error("flexPriceHistory:error", e)
                                })));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ze = {
                    flexVersion: function() {
                        return Pe.apply(this, arguments)
                    },
                    flexPairs: Me,
                    flexPairByTicker: Ee,
                    flexPriceHistory: function(e, t, n, r, a, s) {
                        return He.apply(this, arguments)
                    },
                    flexTime: function() {
                        return Be.apply(this, arguments)
                    },
                    getSymbolName: function(e) {
                        return "".concat(e.ticker, " ").concat(e.address.substr(0, 4))
                    },
                    getSymbolDescription: function(e) {
                        return "".concat(e.ticker)
                    },
                    flexOrderBook: function(e) {
                        return Te.apply(this, arguments)
                    },
                    subscribeBars: function(e, t, n, r) {
                        return Ne.apply(this, arguments)
                    },
                    subscribeOrderbook: function(e, t, n) {
                        return Se.apply(this, arguments)
                    },
                    subscribeRecentTrades: function(e, t, n) {
                        return Ce.apply(this, arguments)
                    },
                    subscribeUserOrders: function(e, t, n) {
                        return ye.apply(this, arguments)
                    },
                    subscribeUserWallets: function(e, t, n, r) {
                        return _e.apply(this, arguments)
                    },
                    subscribeUserTrades: function(e, t, n) {
                        return ke.apply(this, arguments)
                    },
                    unsubscribe: function(e) {
                        return we.apply(this, arguments)
                    },
                    setEndpoint: function(e) {
                        Oe = "https://".concat(e, "/graphql"), xe.setEndpoint(e)
                    }
                },
                Re = "recent_trades_subscription",
                De = "orderbook_subscription",
                Ve = "stats_subscription",
                Ue = "subscription_user_orders",
                We = "subscription_user_wallets",
                Ke = "subscription_user_trades",
                qe = function() {
                    var e = Object(H.b)(),
                        t = Object(H.c)((function(e) {
                            return e.dashboard
                        })),
                        n = t.authorized,
                        r = t.selectedPair,
                        a = t.selectedOrderBookRow,
                        s = t.exchangeMode,
                        i = Object(H.c)((function(e) {
                            return e.flex
                        })),
                        c = i.pairInfo.data,
                        o = i.userWallets.data,
                        u = i.userTrades.data,
                        d = i.userOpenOrders.data,
                        h = Object(l.useState)("chart"),
                        p = Object(b.a)(h, 2),
                        j = p[0],
                        f = p[1],
                        m = Object(l.useState)(),
                        g = Object(b.a)(m, 2),
                        x = g[0],
                        O = g[1],
                        w = Object(l.useState)(!1),
                        y = Object(b.a)(w, 2),
                        _ = y[0],
                        k = y[1],
                        C = function(t) {
                            e(function(e) {
                                return {
                                    type: le,
                                    payload: e
                                }
                            }(t))
                        },
                        S = function(e, t, n, r) {
                            try {
                                z.b.cancelOrder(e, t, n, r).then((function(e) {
                                    O(Object(v.a)(Object(v.a)({}, e), {}, {
                                        additionalInfo: "cancelOrder"
                                    })), setTimeout((function() {
                                        O(void 0)
                                    }), 6e3)
                                }))
                            } catch (a) {
                                console.log("cancelOrder err => ", a)
                            }
                        },
                        N = function(e) {
                            var t = e.sell,
                                n = e.price,
                                a = e.amount,
                                s = e.ioc,
                                i = e.post;
                            r && (k(!0), z.b.trade(r.addr, t, s, i, a * Math.pow(10, r.majorDecimals), n * r.priceScale).then((function(e) {
                                k(!1), O(e), setTimeout((function() {
                                    O(void 0)
                                }), 6e3), e.status
                            })))
                        };
                    return Object(l.useEffect)((function() {
                        return n && (e({
                                type: Q,
                                payload: null
                            }), ze.unsubscribe(We).then((function() {
                                ze.subscribeUserWallets(null === n || void 0 === n ? void 0 : n.userId, null === n || void 0 === n ? void 0 : n.flexClient, We, (function(t) {
                                    var n;
                                    console.log("UPDATE USER WALLETS => ", t), e((n = t.map((function(e) {
                                        return {
                                            address: e.address,
                                            ticker: e.token.ticker,
                                            totalBalance: parseFloat(e.totalBalance),
                                            decimals: e.token.decimals,
                                            availableBalance: parseFloat(e.availableBalance),
                                            nativeCurrencyBalance: parseFloat(e.nativeCurrencyBalance),
                                            balanceInOrders: parseFloat(e.balanceInOrders)
                                        }
                                    })), {
                                        type: $,
                                        payload: n
                                    }))
                                }))
                            }))),
                            function() {
                                ze.unsubscribe(We)
                            }
                    }), [n, e]), Object(l.useEffect)((function() {
                        return n && (e({
                                type: ie,
                                payload: null
                            }), ze.unsubscribe(Ue).then((function() {
                                ze.subscribeUserOrders(null === n || void 0 === n ? void 0 : n.userId, Ue, (function(t) {
                                    var n;
                                    console.log("UPDATE USER ORDERS => ", t), e((n = t.map((function(e) {
                                        return {
                                            ticker: e.pair.ticker,
                                            priceScale: parseInt(e.pair.priceScale),
                                            minAmount: parseFloat(e.pair.minAmount),
                                            pairAddress: e.pair.address,
                                            side: e.side,
                                            price: parseFloat(e.price),
                                            amount: parseFloat(e.amountLeft),
                                            priceNum: e.priceNum,
                                            orderId: e.orderId,
                                            finishTime: e.finishTime
                                        }
                                    })), {
                                        type: ce,
                                        payload: n
                                    }))
                                }))
                            }))),
                            function() {
                                ze.unsubscribe(Ue)
                            }
                    }), [n, e]), Object(l.useEffect)((function() {
                        return n && (e({
                                type: te,
                                payload: null
                            }), ze.unsubscribe(Ke).then((function() {
                                ze.subscribeUserTrades(null === n || void 0 === n ? void 0 : n.userId, Ke, (function(t) {
                                    var n;
                                    console.log("UPDATE USER TRADES => ", t), e((n = t.map((function(e) {
                                        return {
                                            id: e.id,
                                            ticker: e.pair.ticker,
                                            priceScale: parseInt(e.pair.priceScale),
                                            minAmount: parseFloat(e.pair.minAmount),
                                            time: e.time,
                                            side: e.side,
                                            price: parseFloat(e.price),
                                            amount: parseFloat(e.amount),
                                            fees: parseFloat(e.fees),
                                            liquidity: e.liquidity
                                        }
                                    })), {
                                        type: ne,
                                        payload: n
                                    }))
                                }))
                            }))),
                            function() {
                                ze.unsubscribe(Ke)
                            }
                    }), [n, e]), Object(l.useEffect)((function() {
                        return r && ze.unsubscribe(Ve).then((function() {
                                e({
                                    type: Y,
                                    payload: null
                                }), ze.subscribeBars(ze.getSymbolName({
                                    ticker: null === r || void 0 === r ? void 0 : r.ticker,
                                    address: null === r || void 0 === r ? void 0 : r.addr
                                }), 1440, (function(t) {
                                    var n;
                                    e((n = {
                                        h24high: t.high,
                                        h24low: t.low,
                                        h24open: t.open,
                                        h24volume: t.volume,
                                        price: t.close
                                    }, {
                                        type: J,
                                        payload: n
                                    }))
                                }), Ve)
                            })),
                            function() {
                                ze.unsubscribe(Ve)
                            }
                    }), [r]), Object(l.useMemo)((function() {
                        return {
                            selectedPair: r,
                            selectedOrderBookRow: a,
                            pairInfo: c,
                            authorized: n,
                            exchangeMode: s,
                            setExchangeMode: C,
                            chartMode: j,
                            setChartMode: f,
                            userOpenOrders: d,
                            userWallets: o,
                            userTrades: u,
                            trade: N,
                            tradeStatus: x,
                            setTradeStatus: O,
                            tradeLoading: _,
                            cancelOrder: S
                        }
                    }), [r, a, s, C, n, c, u, j, f, d, x, o])
                },
                Ze = n(384),
                Ge = n.n(Ze),
                Je = n(385),
                Ye = n(71),
                Xe = n.n(Ye),
                Qe = function(e) {
                    var t = Object(l.useRef)(null),
                        n = function(e) {
                            e.currentTarget && (e.currentTarget.style.setProperty("--x", e.offsetX + "px"), e.currentTarget.style.setProperty("--y", e.offsetY + "px"))
                        };
                    Object(l.useEffect)((function() {
                        return t.current && e.glowing && t.current.addEventListener("mousemove", n),
                            function() {
                                t.current && e.glowing && t.current.removeEventListener("mousemove", n)
                            }
                    }), [t.current]);
                    var r = Object(v.a)(Object(v.a)({}, e), {}, {
                        size: void 0,
                        variant: void 0,
                        glowing: void 0
                    });
                    return "xl" === e.size ? r.className = r.className ? r.className + " " + Xe.a["btn-xl"] : Xe.a["btn-xl"] : e.size && (r.className = r.className ? r.className + " " + Xe.a["btn-" + e.size] : Xe.a["btn-" + e.size]), "string" === typeof e.icon ? r.className = r.className ? "".concat(r.className, " ").concat(Xe.a["btn-icon"], " ").concat(Xe.a["btn-icon-" + e.icon]) : "".concat(Xe.a["btn-icon"], " ").concat(Xe.a["btn-icon" + e.icon]) : r.children = Object(I.jsxs)(I.Fragment, {
                        children: [e.icon, r.children]
                    }), e.variant && (r.className = r.className ? "".concat(r.className, " ").concat(Xe.a["btn-" + e.variant]) : Xe.a["btn-" + e.variant]), Object(I.jsx)(Je.a, Object(v.a)(Object(v.a)({
                        ref: t
                    }, r), {}, {
                        className: "".concat(Xe.a.btn, " ").concat(r.className)
                    }))
                },
                $e = (n(31), n(81));
            var et, tt, nt, rt, at, st = n(55),
                it = n.n(st),
                ct = ["label", "value", "placeholder", "icon", "units", "disabled", "name", "className", "action"],
                ot = function(e) {
                    var t = e.label,
                        n = e.value,
                        r = e.placeholder,
                        a = e.icon,
                        s = e.units,
                        i = e.disabled,
                        c = e.name,
                        o = e.className,
                        u = e.action,
                        d = Object(y.a)(e, ct),
                        h = [];
                    Object(l.useEffect)((function() {}), []);
                    var p = h[c];
                    return Object(I.jsx)(I.Fragment, {
                        children: Object(I.jsxs)("div", {
                            className: "".concat(it.a.input).concat(i ? " " + it.a["input-disabled"] : "").concat(a ? " " + it.a["input-icon"] : "").concat(o ? " " + o : ""),
                            children: [t && Object(I.jsxs)("label", {
                                className: "paragraph paragraph-footnote ".concat(it.a.label, " ").concat(p ? it.a["label-error"] : ""),
                                children: [Object(I.jsx)(I.Fragment, {
                                    children: t
                                }), p && Object(I.jsx)("div", {
                                    className: "invalid-feedback d-block",
                                    children: h[c]
                                })]
                            }), Object(I.jsxs)("div", {
                                className: "form-group ".concat(it.a.group),
                                children: [a && Object(I.jsx)("div", {
                                    className: "".concat(it.a.icon),
                                    children: Object(I.jsx)(bt, {
                                        icon: a
                                    })
                                }), Object(I.jsx)("input", Object(v.a)({
                                    name: c,
                                    value: n,
                                    disabled: i,
                                    className: "form-control ".concat(it.a["input-component"], " ").concat(n && it.a["input-component-active"]),
                                    placeholder: r
                                }, d)), s && Object(I.jsx)("div", {
                                    className: "".concat(it.a.units),
                                    children: s
                                }), u && Object(I.jsx)("div", {
                                    className: "".concat(it.a.clear),
                                    children: u
                                })]
                            })]
                        })
                    })
                },
                lt = n(162),
                ut = n.n(lt),
                dt = ["field", "form"],
                ht = function(e) {
                    var t = e.field,
                        n = (e.form, Object(y.a)(e, dt));
                    return Object(I.jsx)("input", Object(v.a)(Object(v.a)({}, t), {}, {
                        type: "checkbox"
                    }, n))
                },
                pt = function(e) {
                    var t = e.label,
                        n = e.value,
                        r = e.disabled,
                        a = e.name,
                        s = e.className,
                        i = Object($e.d)().errors;
                    Object(l.useEffect)((function() {}), []);
                    var c = i[a];
                    return Object(I.jsx)(I.Fragment, {
                        children: Object(I.jsxs)("div", {
                            className: "".concat(ut.a.switch, " ").concat(r ? " " + ut.a["switch-disabled"] : "").concat(s ? " " + s : ""),
                            children: [Object(I.jsx)("label", {
                                className: "act act-note ".concat(ut.a.label, " ").concat(c ? ut.a["label-error"] : ""),
                                htmlFor: a,
                                children: t
                            }), Object(I.jsx)($e.a, {
                                id: a,
                                checked: n,
                                name: a,
                                disabled: r,
                                component: ht
                            })]
                        })
                    })
                },
                bt = (n(107), function(e) {
                    var t = e.icon,
                        n = e.className,
                        r = void 0 === n ? "" : n;
                    switch (t.toLocaleLowerCase()) {
                        case "amd":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 16 16",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M12.696 15.6v-3.797c0-.22.18-.4.4-.4h2.161a.4.4 0 00.4-.4V9.881a.4.4 0 00-.4-.4h-2.16a.4.4 0 01-.4-.4v-.548a.4.4 0 01.4-.4h2.16a.4.4 0 00.4-.4V6.632a.4.4 0 00-.4-.4h-2.163a.398.398 0 01-.398-.398c0-1.768-.523-3.182-1.569-4.243C10.081.531 8.564 0 6.575 0 4.483 0 2.92.582 1.89 1.746.858 2.91.343 4.47.343 6.43h3.116c0-1.37.243-2.361.729-2.972.486-.612 1.26-.918 2.32-.918 2.048 0 3.072 1.024 3.072 3.072v.219a.4.4 0 01-.4.4H7.02a.4.4 0 00-.4.4v1.1a.4.4 0 00.4.4h2.161a.4.4 0 01.4.4v.549a.4.4 0 01-.4.4H7.02a.4.4 0 00-.4.4v1.122a.4.4 0 00.4.4h2.161a.4.4 0 01.4.4V15.6c0 .22.18.4.4.4h2.316a.4.4 0 00.4-.4z"
                                })
                            });
                        case "aud":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 16",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M13.488.5l.227.001c1.043 0 1.043 0 1.046.94.004.665.004.668.738.77.563.081 1.098.23 1.62.437.284.115.394.295.305.567-.134.406-.254.815-.398 1.218-.138.38-.271.437-.676.26a5.673 5.673 0 00-2.567-.459c-.233.013-.463.04-.682.127-.776.307-.903 1.082-.24 1.559.336.241.717.415 1.115.564.686.257 1.379.505 2.03.83 2.08 1.038 2.639 3.395 1.17 5.006-.528.583-1.214.973-2.02 1.171-.35.087-.508.254-.49.583.013.322-.004.647-.004.97 0 .287-.162.442-.477.449a29.7 29.7 0 01-1.156.003c-.34-.007-.498-.18-.501-.477-.004-.236-.004-.474-.007-.71-.007-.52-.024-.542-.58-.623-.585-.084-1.162-.198-1.711-.395l-.008-.036a.445.445 0 01-.345.571l-.08.007h-1.67a.448.448 0 01-.397-.24l-.03-.078-1.088-3.65H3.634l-1.087 3.65a.445.445 0 01-.427.318H.45a.446.446 0 01-.426-.578L3.39 2.479a.446.446 0 01.426-.312h2.617c.167 0 .317.093.394.236l.031.076L9.7 11.582l.108-.327c.133-.38.249-.455.597-.308l.093.041c.72.338 1.485.527 2.285.617a3.083 3.083 0 001.499-.177c.892-.353 1.03-1.286.278-1.846a3.592 3.592 0 00-.851-.453c-.782-.313-1.599-.548-2.336-.948-1.198-.647-1.96-1.536-1.87-2.853.1-1.487 1.032-2.416 2.542-2.912.624-.205.628-.195.631-.784.004-.201-.003-.4.004-.598.013-.443.096-.52.583-.533.15-.003.302 0 .453 0zM5.123 4.863L4.16 8.096h1.925l-.962-3.233z",
                                    fillRule: "evenodd",
                                    fill: "currentColor"
                                })
                            });
                        case "azn":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 14 18",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M13.807 17.426V8.58c0-1.32-.307-2.41-.922-3.27a5.556 5.556 0 00-2.426-1.92 8.076 8.076 0 00-2.394-.59L7.7 2.774V.495a.494.494 0 10-.988-.001l-.001 2.28-.359.025c-.84.08-1.638.276-2.393.591A5.593 5.593 0 001.52 5.31C.901 6.17.591 7.26.591 8.58v8.846a.514.514 0 00.571.511l1.578-.174c.26-.03.457-.25.457-.512V8.544c0-1.48.334-2.606 1.003-3.378.556-.643 1.345-1.019 2.366-1.126l.145-.01v12.924a.495.495 0 00.99 0V4.029l.142.011c1.014.107 1.8.483 2.357 1.126.668.772 1.002 1.898 1.002 3.378v8.707c0 .263.197.483.458.512l1.577.174a.514.514 0 00.571-.511z"
                                })
                            });
                        case "brl":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M12 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C14.64 12.44 12 11.78 12 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C20.53 5.69 22 7.21 22 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C19.36 11.56 22 12.22 22 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C13.47 18.31 12 16.79 12 15M2 3h3.5A5.5 5.5 0 0111 8.5c0 2.19-1.29 4.09-3.14 4.97L11.64 21H9.4l-3.52-7H4v7H2V3m3.5 9A3.5 3.5 0 009 8.5 3.5 3.5 0 005.5 5H4v7h1.5z"
                                })
                            });
                        case "byn":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 16 14",
                                id: "BYN",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M5.89 13.73a4.527 4.527 0 001.62-.751 3.54 3.54 0 001.068-1.285c.257-.514.395-1.126.395-1.838 0-.929-.237-1.66-.711-2.194s-1.048-.89-1.74-1.067v-.04a3.478 3.478 0 001.424-1.186c.355-.514.533-1.166.533-1.956 0-.475-.079-.93-.237-1.344a2.562 2.562 0 00-.77-1.068C7.116.705 6.642.468 6.068.29 5.495.112 4.783.033 3.953.033H2.846c-.395 0-.77.02-1.126.04-.199.01-.631.03-1.298.056A.44.44 0 000 .569v12.894c0 .23.177.421.406.439l.365.026c.316.02.652.04 1.008.04h2.075c.732 0 1.404-.08 2.036-.238zM3.993 5.943h-1.64V2.444a25.26 25.26 0 011.521-.06c.573 0 1.186.1 1.581.396.396.297.593.731.593 1.305 0 .632-.197 1.106-.593 1.403-.395.296-.89.455-1.462.455zm-.04 5.81c-.336 0-.652 0-.929-.02a18.937 18.937 0 01-.672-.059l.02-3.676h1.72c.77 0 1.363.139 1.778.435.415.296.633.731.633 1.324 0 .653-.218 1.147-.652 1.483-.435.336-1.068.514-1.898.514zm8.628 1.695V7.92c.138-.257.316-.474.533-.652.218-.178.534-.277.93-.277.236 0 .434.02.592.06a.857.857 0 01.14.051.44.44 0 00.582-.22l.01-.025.49-1.292A.44.44 0 0015.613 5a1.82 1.82 0 00-.127-.045c-.198-.059-.494-.079-.87-.079-.533 0-.948.1-1.245.297a3.001 3.001 0 00-.77.731v-.437a.44.44 0 00-.433-.44l-1.413-.024a.439.439 0 00-.447.432v8.014c0 .243.197.44.44.44h1.393a.44.44 0 00.44-.44z"
                                })
                            });
                        case "cad":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 486 512",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M407.2,233.4l-108-31.6c-12.5-3.6-21.2-15.3-21.2-28.3c0-16.3,13.2-29.5,29.5-29.5h66.3c12.2,0,24.2,3.7,34.2,10.5 c6.1,4.1,14.3,3.1,19.5-2l34.8-34c7.1-6.9,6.1-18.4-1.8-24.5C436,74.8,405.4,64.1,374,64V16c0-8.8-7.2-16-16-16h-32 c-8.8,0-16,7.2-16,16v48h-2.5c-21.8,0-42.2,6.4-59.3,17.5L233,76c-8.8-3.1-19.8-5.8-32.6-8.1c-12.9-2.3-27.1-3.5-42-3.5 c-29.7,0-54.9,4-75,11.9c-20.7,8.2-37.6,20.1-50.2,35.4C20.7,126.8,11.9,145.4,7,167.2c-4.6,20.4-7,43.7-7,69.2v34.3 c0,26,2.2,49.4,6.4,69.5c4.6,21.4,12.9,39.7,24.7,54.4c12.1,15,28.8,26.5,49.6,34c19.8,7.2,45,10.8,74.8,10.8 c10.6,0,22-0.8,33.7-2.2c11.8-1.5,22.9-3.6,33.2-6.2l14.4-3.7c21.9,13.4,47.3,20.7,73.2,20.8v48c0,8.8,7.2,16,16,16h32 c8.8,0,16-7.2,16-16v-48.2c46.6-0.9,90.3-28.6,105.7-72.7C501.2,313.5,465.1,250.3,407.2,233.4z M376.5,368h-66.3 c-12.2,0-24.2-3.7-34.2-10.5c-3.8-2.6-8.5-3.1-12.7-2l-17.7,3.6l-22.3,3.8c-8.7,1.5-18.9,2.9-30.3,4.1c-11.1,1.2-21.1,1.8-29.6,1.8 c-17.7,0-32.5-1.6-43.9-4.6c-10-2.7-17.6-7.1-23.2-13.4c-5.9-6.6-10.2-16.1-12.9-28.3c-3-13.7-4.6-31.8-4.6-53.8v-31 c0-22.3,1.6-40.7,4.8-54.9c2.9-12.7,7.4-22.7,13.5-29.6c5.8-6.7,13.4-11.2,23-13.8c11.1-3.1,25.4-4.6,42.4-4.6 c9.4,0,18.9,0.8,28.2,2.4c4.5,0.8,8.7,1.5,12.6,2.3c-4.5,13.7-6.3,28.6-4.9,44c4.2,46.1,39.4,83.6,83.8,96.6l102.5,30 c12.5,3.7,21.2,15.3,21.2,28.3C406,354.8,392.8,368,376.5,368z",
                                    fillRule: "evenodd",
                                    fill: "currentColor"
                                })
                            });
                        case "eth":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 12 18",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M11.496 9.169L6 12.43.5 9.17 6 0l5.496 9.169zM6 13.479L.5 10.216 6 18l5.5-7.784L6 13.48z"
                                })
                            });
                        case "eur":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 320 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"
                                })
                            });
                        case "gbp":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 320 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M308 352h-45.495c-6.627 0-12 5.373-12 12v50.848H128V288h84c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-84v-63.556c0-32.266 24.562-57.086 61.792-57.086 23.658 0 45.878 11.505 57.652 18.849 5.151 3.213 11.888 2.051 15.688-2.685l28.493-35.513c4.233-5.276 3.279-13.005-2.119-17.081C273.124 54.56 236.576 32 187.931 32 106.026 32 48 84.742 48 157.961V224H20c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h28v128H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V364c0-6.627-5.373-12-12-12z"
                                })
                            });
                        case "hko":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M14.557.5h.173c.796 0 .796 0 .799.689.002.488.002.49.562.566.43.059.838.168 1.236.32.217.084.301.216.233.416-.102.297-.194.597-.304.893-.104.28-.206.32-.515.19a4.504 4.504 0 00-1.959-.336 1.7 1.7 0 00-.52.094c-.592.224-.689.792-.184 1.142.257.178.547.305.851.414.524.188 1.053.37 1.55.609 1.586.76 2.013 2.49.893 3.671-.404.428-.927.714-1.542.86-.267.063-.388.186-.375.426.01.237-.002.475-.002.712 0 .21-.123.325-.364.33-.293.006-.59.006-.882.001-.26-.004-.38-.131-.383-.35-.002-.172-.002-.347-.005-.52-.005-.382-.018-.397-.442-.457-.542-.075-1.074-.181-1.571-.39-.39-.166-.432-.25-.32-.605.084-.263.168-.527.262-.788.11-.302.204-.34.526-.196.55.248 1.134.387 1.744.453.395.043.78.009 1.144-.13.68-.259.785-.943.212-1.354a2.803 2.803 0 00-.65-.332c-.596-.23-1.22-.402-1.782-.695-.914-.475-1.495-1.127-1.427-2.093.076-1.09.788-1.772 1.94-2.135.477-.15.48-.143.482-.575.002-.148-.003-.293.002-.439.011-.325.074-.381.446-.39.115-.003.23 0 .345 0zm-13.213.726c.241 0 .437.196.437.438v3.441H4.75v-3.44c0-.243.197-.439.438-.439h.906c.242 0 .438.196.438.438v3.27l2.964-3.55a.439.439 0 01.337-.158h1.28a.44.44 0 01.343.715L8.34 5.836a.424.424 0 01-.158.124.373.373 0 01.112.073l.046.05 3.125 3.955a.44.44 0 01-.266.706l-.08.007H9.836a.441.441 0 01-.285-.105l-.055-.055-2.963-3.595v3.34a.438.438 0 01-.438.439h-.906a.438.438 0 01-.437-.438L4.75 6.895H1.781v3.442a.438.438 0 01-.437.438H.438A.438.438 0 010 10.337V1.664c0-.242.196-.438.438-.438h.906z",
                                    fillRule: "evenodd",
                                    fill: "currentColor"
                                })
                            });
                        case "huf":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 16 15",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M3.52 13.608V8.356h4.37a.375.375 0 00.375-.375V6.12a.375.375 0 00-.375-.375H3.895a.375.375 0 01-.375-.375V2.986c0-.207.168-.374.375-.374h4.516a.375.375 0 00.375-.375V.375A.375.375 0 008.411 0H1.11a.374.374 0 00-.374.375v13.233c0 .207.167.375.374.375h2.037a.374.374 0 00.374-.375zm8.199.426c1.66 0 2.793-.223 3.4-.667a.376.376 0 00.124-.45l-.55-1.284a.373.373 0 00-.395-.224c-1.084.148-1.711.222-1.883.222-.174 0-.296-.087-.383-.261a1.363 1.363 0 01-.122-.61V8.705c0-.207.168-.374.375-.374h2.427a.375.375 0 00.375-.375V6.268a.375.375 0 00-.375-.375h-2.427a.375.375 0 01-.375-.375V3.533a.374.374 0 00-.372-.374l-1.862-.013a.374.374 0 00-.377.372v7.347c0 .992.174 1.776.54 2.333.365.557.992.836 1.88.836z"
                                })
                            });
                        case "ils":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 448 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M248 168v168c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V168c0-75.11-60.89-136-136-136H24C10.75 32 0 42.74 0 56v408c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112h112c30.93 0 56 25.07 56 56zM432 32h-48c-8.84 0-16 7.16-16 16v296c0 30.93-25.07 56-56 56H200V176c0-8.84-7.16-16-16-16h-48c-8.84 0-16 7.16-16 16v280c0 13.25 10.75 24 24 24h168c75.11 0 136-60.89 136-136V48c0-8.84-7.16-16-16-16z"
                                })
                            });
                        case "inr":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 320 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"
                                })
                            });
                        case "jpy":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 384 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M351.2 32h-65.3c-4.6 0-8.8 2.6-10.8 6.7l-55.4 113.2c-14.5 34.7-27.1 71.9-27.1 71.9h-1.3s-12.6-37.2-27.1-71.9L108.8 38.7c-2-4.1-6.2-6.7-10.8-6.7H32.8c-9.1 0-14.8 9.7-10.6 17.6L102.3 200H44c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h88.2l19.8 37.2V320H44c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h108v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h108c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12H232v-26.8l19.8-37.2H340c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12h-58.3l80.1-150.4c4.3-7.9-1.5-17.6-10.6-17.6z"
                                })
                            });
                        case "krw":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 1000 1000",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M291.1 698.5L335.4 535h-86.9l41 164.1c.4.4.6.9.6 1.6 0 .7.2 1.3.6 1.6 0-.4.1-1 .3-1.9 0-.9.1-1.5.1-1.9zM354.5 465l19.1-70H214l17.5 70h123zm105 0h76l-19.1-70h-38.3l-18.6 70zm245.6 234.1L747.7 535h-88.6l44.3 163.5c0 .4.1 1 .3 1.9.2.9.5 1.6.8 1.9 0-.4.1-.9.3-1.6.2-.7.3-1.2.3-1.6zM765.8 465l18.1-70H621.4l18.6 70h125.8zM990 482.5v35c0 5.1-1.6 9.3-4.9 12.6s-7.5 4.9-12.6 4.9H856l-89.7 336.9c-2.5 8.8-8.2 13.1-16.9 13.1h-86.9c-8.8 0-14.4-4.4-16.9-13.1L554.7 535H440.4l-91.3 336.9c-2.5 8.8-8.2 13.1-16.9 13.1h-86.9c-4 0-7.6-1.3-10.7-3.8-3.1-2.5-5-5.6-5.7-9.3L141.3 535H27.5c-5.1 0-9.3-1.6-12.6-4.9-3.3-3.3-4.9-7.5-4.9-12.6v-35c0-5.1 1.6-9.3 4.9-12.6s7.5-4.9 12.6-4.9h95.7l-18.1-70H27.5c-5.1 0-9.3-1.6-12.6-4.9-3.3-3.3-4.9-7.5-4.9-12.6v-35c0-5.1 1.6-9.3 4.9-12.6 3.3-3.3 7.5-4.9 12.6-4.9h59.6L38.4 136.9c-1.8-5.5-.9-10.6 2.7-15.3 3.6-4.4 8.4-6.5 14.2-6.5h74.9c9.5 0 15.1 4.4 16.9 13.1L196.5 325h196.3l53.1-196.9c2.5-8.8 8.2-13.1 16.9-13.1h68.9c8.8 0 14.4 4.4 16.9 13.1L602.2 325h199.6l50.9-196.9c1.8-8.8 7.5-13.1 16.9-13.1h74.9c5.8 0 10.6 2.2 14.2 6.5 3.6 4.7 4.5 9.8 2.7 15.3L911.7 325h60.7c5.1 0 9.3 1.6 12.6 4.9 3.3 3.3 4.9 7.5 4.9 12.6v35c0 5.1-1.6 9.3-4.9 12.6-3.3 3.3-7.5 4.9-12.6 4.9h-79.3l-18.6 70h97.9c5.1 0 9.3 1.6 12.6 4.9 3.3 3.3 4.9 7.5 5 12.6z"
                                })
                            });
                        case "kzt":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 384 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M372 160H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h140v228c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V240h140c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12zm0-128H12C5.4 32 0 37.4 0 44v56c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12z"
                                })
                            });
                        case "matic":
                            return Object(I.jsx)("svg", {
                                className: r,
                                fill: "none",
                                viewBox: "0 0 18 18",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M18 9A9 9 0 110 9a9 9 0 0118 0zm-6.755-1.926a.762.762 0 01.734 0l2.504 1.403a.675.675 0 01.367.607v2.783a.718.718 0 01-.367.607l-2.482 1.382a.762.762 0 01-.734 0l-2.483-1.382a.675.675 0 01-.367-.607v-.962l1.144-.65v.964c0 .25.151.481.367.607l1.317.732a.762.762 0 00.734 0l1.317-.753a.676.676 0 00.367-.607V9.712a.718.718 0 00-.367-.607l-1.317-.733a.762.762 0 00-.734 0l-1.684.942-1.144.649-1.684.942a.762.762 0 01-.734 0L3.517 9.523a.676.676 0 01-.367-.607V6.133c0-.252.13-.482.367-.607l2.482-1.382a.762.762 0 01.734 0l2.44 1.382a.675.675 0 01.367.607v.962l-1.144.65V6.78a.718.718 0 00-.367-.607l-1.317-.732a.762.762 0 00-.734 0l-1.317.732a.675.675 0 00-.367.607v1.486c0 .252.151.482.367.607L6 9.628a.762.762 0 00.734 0l1.684-.963 1.144-.628 1.684-.963z",
                                    fill: "currentColor"
                                })
                            });
                        case "mdl":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 10 16",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M3 .4v12.388c0 .221.18.4.4.4h6.2c.22 0 .4.18.4.4V15.6c0 .22-.18.4-.4.4H.4c-.22 0-.4-.18-.4-.4V.4C0 .18.18 0 .4 0h2.2c.22 0 .4.18.4.4z"
                                })
                            });
                        case "mxn":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 446.8 512",
                                children: [Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M239.4,320c85.1,0,144.6-59.5,144.6-144.9S324.5,32,239.4,32H76c-6.6,0-12,5.4-12,12v424c0,6.6,5.4,12,12,12h58.6 c6.6,0,12-5.4,12-12V320H239.4z M146.6,100.7h78.7c46.7,0,74.9,29.1,74.9,74.3c0,45.8-28.2,75.6-76.2,75.6h-77.4V100.7z"
                                }), Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M436.3,210.6H11.4c-5.8,0-10.6-4.7-10.6-10.6v-48.6c0-5.8,4.7-10.6,10.6-10.6h424.9c5.8,0,10.6,4.7,10.6,10.6V200 C446.8,205.8,442.1,210.6,436.3,210.6z"
                                })]
                            });
                        case "myr":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 16 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M1.99 10.76V7.9c0-.196.158-.355.355-.355h.17c.126 0 .242.067.306.175l1.895 3.22c.064.11.18.176.306.176h1.551a.356.356 0 00.302-.544l-2.18-3.479c.111-.073.247-.175.42-.306s.334-.32.482-.554c.148-.233.272-.525.383-.86.111-.335.16-.743.16-1.224 0-.467-.06-.904-.172-1.297a2.602 2.602 0 00-.556-1.035 2.581 2.581 0 00-1.001-.685C4.003.972 3.509.884 2.916.884H.356A.356.356 0 000 1.24l.012 9.52c0 .197.16.356.355.356h1.267c.196 0 .355-.16.355-.356zm.666-5.445h-.36a.356.356 0 01-.356-.356V3.056c.21-.015.37-.015.482-.015h.42c.235 0 .432.03.58.088a.898.898 0 01.359.247.93.93 0 01.185.35c.037.131.05.277.05.423 0 .423-.136.729-.396.904-.26.174-.58.262-.964.262zm6.276 5.445v-6.1l2.323 3.813a.254.254 0 00.432 0l2.336-3.858v6.145c0 .197.159.356.355.356h1.266c.197 0 .356-.16.356-.356V1.27a.356.356 0 00-.356-.356h-1.306a.356.356 0 00-.307.176l-2.418 4.124L9.05 1.08a.358.358 0 00-.302-.168H7.31a.356.356 0 00-.356.356v9.491c0 .197.16.356.356.356h1.265c.197 0 .356-.16.356-.356z"
                                })
                            });
                        case "pln":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 16",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M15.264 0c.234 0 .424.19.424.424l-.001 6.028 1.664-.711a.422.422 0 01.59.389v2.053c0 .169-.1.322-.257.389l-1.997.854v6.15a.423.423 0 01-.423.424h-2.058a.423.423 0 01-.423-.424l-.001-4.906-1.662.712a.422.422 0 01-.591-.389V8.94c0-.169.101-.322.257-.389l1.996-.855V.424c0-.234.19-.424.424-.424h2.058zM9.232 5.289c.234 0 .424.19.424.423v1.385a.425.425 0 01-.115.29l-5.703 6.066h5.275c.234 0 .423.19.423.424v1.7c0 .233-.19.423-.423.423H.423A.424.424 0 010 15.576v-1.383c0-.108.041-.212.115-.291l5.702-6.043H.781a.423.423 0 01-.423-.423V5.712c0-.234.19-.423.423-.423z"
                                })
                            });
                        case "rur":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 384 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M239.36 320C324.48 320 384 260.542 384 175.071S324.48 32 239.36 32H76c-6.627 0-12 5.373-12 12v206.632H12c-6.627 0-12 5.373-12 12V308c0 6.627 5.373 12 12 12h52v32H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v52c0 6.627 5.373 12 12 12h58.56c6.627 0 12-5.373 12-12v-52H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H146.56v-32h92.8zm-92.8-219.252h78.72c46.72 0 74.88 29.11 74.88 74.323 0 45.832-28.16 75.561-76.16 75.561h-77.44V100.748z"
                                })
                            });
                        case "sek":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 16 14",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M2.488 13.6V.4a.4.4 0 00-.4-.4H.4C.18 0 0 .18 0 .4v13.2c0 .22.18.4.4.4h1.688a.4.4 0 00.4-.4zm6.63-.237l-3.622-4.94L8.65 4.36a.402.402 0 00-.316-.646H6.222a.4.4 0 00-.327.169L2.531 8.629l3.732 5.204a.4.4 0 00.325.167h2.208a.401.401 0 00.322-.637zm3.139.237V7.097c.151-.297.346-.548.584-.754.238-.206.584-.32 1.017-.32.26 0 .476.023.65.068.172.046.367.16.605.32L16 3.943a1.87 1.87 0 00-.563-.274c-.216-.069-.54-.092-.952-.092-.584 0-1.038.114-1.363.343a3.389 3.389 0 00-.843.846v-.613a.4.4 0 00-.393-.4l-1.71-.031a.4.4 0 00-.398.312l-.01.088V13.6c0 .22.18.4.4.4h1.689c.22 0 .4-.18.4-.4z"
                                })
                            });
                        case "sgd":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 18",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M12.546.966l.847.002.194.008c.407.029.498.139.52.557l.009.662.01.173c.026.25.113.32.42.377l.339.053a7.242 7.242 0 011.693.468c.298.123.413.315.32.607l-.273.872c-.046.145-.094.29-.144.433-.131.374-.26.456-.607.32l-.1-.041a5.793 5.793 0 00-2.683-.492 2.211 2.211 0 00-.714.137c-.81.328-.943 1.158-.251 1.67.352.258.75.444 1.166.603l.861.332c.43.17.854.349 1.263.558 2.174 1.112 2.758 3.638 1.223 5.364a4.058 4.058 0 01-1.864 1.185l-.249.07c-.325.082-.492.233-.512.513l.004.457-.009.692c0 .31-.168.475-.498.482-.402.01-.807.01-1.21.003-.315-.006-.48-.153-.516-.41l-.007-.101-.007-.76c-.006-.446-.018-.55-.32-.618l-.177-.033-.11-.016c-.742-.11-1.47-.266-2.152-.571-.496-.225-.581-.347-.467-.778l.03-.105c.114-.385.23-.77.358-1.152.14-.408.26-.487.625-.33l.096.045c.754.361 1.554.564 2.39.66.541.063 1.069.013 1.567-.19.933-.378 1.076-1.377.29-1.977a3.675 3.675 0 00-.889-.485l-.411-.162-.828-.311a9.571 9.571 0 01-1.204-.543c-1.252-.693-2.048-1.646-1.955-3.057.1-1.52.993-2.497 2.447-3.045l.514-.18c.27-.102.335-.179.351-.442l.006-.293c.004-.215-.003-.428.004-.64.014-.475.1-.558.61-.571zM2.964 3.017a5.41 5.41 0 012.619-.306l.316.043.276.044c.683.11 1.02.246 1.505.468.265.123.367.315.284.607l-.242.872c-.04.145-.083.29-.128.433-.117.374-.23.456-.539.32l-.089-.041a4.655 4.655 0 00-2.385-.492c-.217.014-.43.044-.635.137-.72.328-.838 1.158-.223 1.67a4.22 4.22 0 001.037.603l.765.332c.381.17.759.349 1.122.558C8.58 9.377 9.1 11.903 7.735 13.629a3.6 3.6 0 01-1.879 1.255c-.749.212-2.327.318-2.987.209-.66-.11-1.308-.266-1.914-.571-.475-.243-.526-.365-.389-.883.102-.385.204-.77.32-1.152.123-.408.23-.487.554-.33l.086.045c.67.361 1.38.564 2.124.66.481.063.95.013 1.393-.19.83-.378.957-1.377.259-1.977a3.18 3.18 0 00-.791-.485l-.366-.162-.736-.311a8.083 8.083 0 01-1.07-.543C1.226 8.501.52 7.548.601 6.137c.093-1.593.96-2.589 2.363-3.12z",
                                    fillRule: "evenodd",
                                    fill: "currentColor"
                                })
                            });
                        case "tmt":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 14 16",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M8.608 15.6V3.212a.4.4 0 01.4-.4H13.6c.22 0 .4-.18.4-.4V.4c0-.22-.18-.4-.4-.4H.4C.18 0 0 .18 0 .4v2.012c0 .22.18.4.4.4h4.592a.4.4 0 01.4.4V15.6c0 .22.179.4.4.4h2.416a.4.4 0 00.4-.4z"
                                })
                            });
                        case "ton":
                            return Object(I.jsx)("svg", {
                                className: r,
                                fill: "none",
                                viewBox: "0 0 18 14",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M3.844.245A.709.709 0 014.384 0h9.231c.21 0 .41.09.541.245L17.848 4.6c.22.26.199.635-.05.87L9.49 13.309a.722.722 0 01-.98 0L.203 5.47a.626.626 0 01-.051-.87L3.844.245zm.306 1.73l.9 2.38H2.134l2.017-2.38zM2.364 5.662l4.949 4.67-1.768-4.67H2.364zm4.651 0L9 10.905l1.985-5.244h-3.97zm5.44 0l-1.768 4.67 4.95-4.67h-3.182zm3.412-1.306H12.95l.901-2.38 2.017 2.38zm-3.234-3.049h-2.365l1.52 2.232.845-2.232zm-1.934 3.049L9 1.86 7.301 4.355h3.398zm-4.487-.817l1.52-2.232H5.367l.845 2.232z",
                                    fill: "currentColor"
                                })
                            });
                        case "trx":
                            return Object(I.jsx)("svg", {
                                className: r,
                                fill: "none",
                                viewBox: "0 0 19 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M1 1l7.103 18L18 6.856l-3.503-3.355L1 1zm15.199 6.571l-7.173 8.8.92-7.66 6.253-1.139v-.001zM2.844 3.101l6.203 5.182-.97 8.08L2.844 3.1v.001zM14.28 4.603l2.065 1.977-5.647 1.03 3.582-3.007zM3.52 2.433l9.727 1.802-3.776 3.168-5.952-4.97z",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: ".5"
                                })
                            });
                        case "try":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 384 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M371.994 256h-48.019C317.64 256 312 260.912 312 267.246 312 368 230.179 416 144 416V256.781l134.603-29.912A12 12 0 0 0 288 215.155v-40.976c0-7.677-7.109-13.38-14.603-11.714L144 191.219V160.78l134.603-29.912A12 12 0 0 0 288 119.154V78.179c0-7.677-7.109-13.38-14.603-11.714L144 95.219V44c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v68.997L9.397 125.131A12 12 0 0 0 0 136.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 178.558v30.439L9.397 221.131A12 12 0 0 0 0 232.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 274.558V468c0 6.627 5.373 12 12 12h79.583c134.091 0 223.255-77.834 228.408-211.592.261-6.782-5.211-12.408-11.997-12.408z"
                                })
                            });
                        case "twd":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    d: "M14.862.5c.664.002.664.04.667.688.002.424.002.482.367.539l.195.027c.43.06.838.168 1.236.32.217.085.301.216.233.416-.102.298-.194.598-.304.893-.104.28-.206.32-.515.191a4.476 4.476 0 00-1.959-.336c-.178.009-.353.03-.52.093-.592.225-.689.793-.184 1.143.257.177.547.304.851.413.524.189 1.053.37 1.55.61 1.586.76 2.013 2.49.893 3.671-.404.427-.927.713-1.542.859-.267.063-.388.186-.375.427.01.236-.002.475-.002.711 0 .211-.123.325-.364.33a22.84 22.84 0 01-.882.002c-.26-.005-.38-.132-.383-.35-.002-.173-.002-.348-.005-.52-.005-.382-.018-.398-.442-.457-.542-.075-1.074-.182-1.571-.39-.39-.167-.432-.25-.32-.605.084-.264.168-.527.262-.789.11-.302.204-.34.526-.195.55.248 1.134.386 1.744.452.395.043.78.01 1.144-.13.68-.258.785-.942.212-1.354a2.763 2.763 0 00-.65-.331c-.596-.23-1.22-.402-1.782-.696-.914-.474-1.495-1.126-1.427-2.092.02-.293.087-.556.195-.791H9.851v6.713a.438.438 0 01-.437.438h-.766a.438.438 0 01-.438-.438l-.001-6.713H6.02v6.713a.438.438 0 01-.437.438H4.65a.438.438 0 01-.392-.243L1.64 4.898l.001 5.064a.438.438 0 01-.438.438H.438A.438.438 0 010 9.962V2.037c0-.242.196-.438.438-.438h.933c.166 0 .318.094.392.243l2.615 5.257V2.037c0-.242.197-.438.438-.438h.767c.048 0 .095.008.138.022a.426.426 0 01.137-.022h6.346c.242 0 .438.196.438.438l-.001.222c.238-.141.511-.26.814-.355.477-.15.48-.143.482-.575.002-.147-.003-.293.002-.438.011-.325.074-.382.446-.391z",
                                    fillRule: "evenodd",
                                    fill: "currentColor"
                                })
                            });
                        case "usdt":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 12 14",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M7.4 13.6V9.676l2.305-1.69a.399.399 0 00.164-.322v-.782a.4.4 0 00-.636-.323L7.4 7.895V5.933l2.306-1.69a.399.399 0 00.164-.322v-.78a.401.401 0 00-.637-.322L7.4 4.162V1.924h4.2c.22 0 .4-.18.4-.4V.4c0-.22-.18-.4-.4-.4H.4C.18 0 0 .18 0 .4v1.124c0 .22.18.4.4.4h4.2V6.21L2.306 7.88a.4.4 0 00-.165.324v.782a.401.401 0 00.636.323L4.6 7.981v1.962l-2.297 1.68a.4.4 0 00-.164.323v.782a.4.4 0 00.636.324L4.6 11.724V13.6c0 .22.179.4.4.4h1.998a.4.4 0 00.4-.4z"
                                })
                            });
                        case "usd":
                            return Object(I.jsx)("svg", {
                                className: r,
                                "aria-hidden": "true",
                                focusable: "false",
                                role: "img",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 288 512",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                                })
                            });
                        case "uzs":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 18 10",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M2.614 9.433a3.03 3.03 0 001.067-.186c.332-.123.619-.284.86-.493.24-.21.424-.47.562-.766A2.34 2.34 0 005.309 7c0-.481-.092-.876-.275-1.185a2.634 2.634 0 00-.677-.766 4.237 4.237 0 00-.883-.506 8.9 8.9 0 01-.883-.42 3.01 3.01 0 01-.676-.494c-.184-.185-.275-.42-.275-.716 0-.284.103-.518.298-.691.195-.173.47-.26.825-.26.322 0 .585.062.803.173.218.112.424.272.62.482l.756-1.136A2.443 2.443 0 003.99.814 3.491 3.491 0 002.66.567c-.39 0-.745.062-1.055.186-.31.123-.573.296-.79.506-.219.21-.38.469-.494.765a2.54 2.54 0 00-.172.926c0 .47.092.852.275 1.161.184.309.402.568.665.778.264.21.55.383.872.53.32.149.608.297.871.445.264.148.482.321.665.507.184.185.276.42.276.703l.045-.086c0 .333-.114.58-.332.753-.218.173-.493.26-.826.26a2.34 2.34 0 01-.986-.235 2.232 2.232 0 01-.871-.741L0 8.062c.103.222.24.42.424.593s.402.32.642.432c.241.111.493.197.757.26.264.061.528.086.791.086zm5.16 0c.423 0 .813-.074 1.157-.223.344-.148.642-.345.883-.605.24-.259.424-.568.562-.926a3.18 3.18 0 00.206-1.16c0-.42-.068-.803-.206-1.16a2.866 2.866 0 00-.573-.927 2.573 2.573 0 00-.883-.605 2.916 2.916 0 00-1.158-.222c-.425 0-.815.074-1.159.222a2.593 2.593 0 00-.882.617c-.241.26-.436.568-.574.926a3.206 3.206 0 00-.206 1.161l.023-.025c0 .42.069.803.206 1.161.138.358.321.667.562.926.24.26.539.47.883.617.344.149.734.223 1.158.223zm-.047-1.31c-.401 0-.734-.147-.997-.444-.264-.296-.402-.679-.402-1.148h.023c0-.235.035-.457.103-.654.07-.198.172-.358.299-.494a1.376 1.376 0 01.997-.42 1.316 1.316 0 01.998.432c.126.136.23.309.298.506.069.198.103.408.103.642 0 .482-.138.865-.401 1.149a1.34 1.34 0 01-1.02.432zm2.61-4.929v-2.13a.422.422 0 00-.422-.423h-.473a.423.423 0 00-.423.423v2.13c0 .234.19.423.423.423h.473c.234 0 .423-.19.423-.423zM18 8.841V5.654c0-.382-.046-.703-.126-.963a1.613 1.613 0 00-.344-.63 1.349 1.349 0 00-.516-.345 1.831 1.831 0 00-.654-.111 2.079 2.079 0 00-1.742.877 1.293 1.293 0 00-.517-.643c-.252-.172-.584-.259-.986-.259-.32 0-.63.062-.917.185a1.864 1.864 0 00-.711.519v-.195a.423.423 0 00-.423-.422h-.473a.423.423 0 00-.423.422V8.8c0 .233.19.423.423.423h.473c.234 0 .423-.19.423-.423V5.494c.115-.185.264-.333.447-.432.184-.099.39-.148.63-.148.288 0 .505.086.654.259.15.173.218.407.218.691V8.8c0 .233.19.423.423.423h.473c.234 0 .423-.19.423-.423V5.543c.092-.185.23-.333.413-.457.183-.123.401-.185.642-.185.31 0 .539.087.676.272.138.185.207.444.207.79V8.82c0 .225.177.411.403.422l.461.022c.234.01.432-.17.443-.403v-.02z"
                                })
                            });
                        case "vnd":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 12 18",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M4.227 15.006c1.528 0 2.648-.723 3.359-2.17v1.536a.4.4 0 00.4.4h1.978a.4.4 0 00.4-.4V3.003h.976a.4.4 0 00.4-.4V2.02a.4.4 0 00-.4-.4h-.976V.4a.4.4 0 00-.4-.4H7.986a.4.4 0 00-.4.4v1.219H4.3a.4.4 0 00-.4.4v.584a.4.4 0 00.4.4h3.286v2.77C6.706 4.923 5.73 4.5 4.657 4.5c-1.322 0-2.385.504-3.19 1.51C.663 7.018.26 8.351.26 10.01c0 1.535.357 2.75 1.072 3.649.714.898 1.679 1.347 2.895 1.347zm1.001-2.17c-1.347 0-2.02-1.036-2.02-3.106 0-1.023.205-1.853.617-2.489.411-.636.951-.954 1.618-.954.761 0 1.475.377 2.143 1.132v3.836c-.749 1.054-1.535 1.58-2.358 1.58zm5.136 4.764v-.585a.4.4 0 00-.4-.4H2.737c-.22 0-.4.18-.4.4v.585c0 .22.18.4.4.4h7.227a.4.4 0 00.4-.4z"
                                })
                            });
                        case "caret-up":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: Object(I.jsx)("path", {
                                    d: "M12.8 8.06667C12.4 7.53333 11.6 7.53333 11.2 8.06667L7.2 13.4C6.70557 14.0592 7.17595 15 8 15H16C16.824 15 17.2944 14.0592 16.8 13.4L12.8 8.06667Z",
                                    fill: "#2FA851"
                                })
                            });
                        case "caret-down":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: Object(I.jsx)("path", {
                                    d: "M11.2 14.6C11.6 15.1333 12.4 15.1333 12.8 14.6L16.8 9.26667C17.2944 8.60747 16.8241 7.66667 16 7.66667L8.00001 7.66666C7.17601 7.66666 6.70561 8.60747 7.20001 9.26667L11.2 14.6Z",
                                    fill: "#e22626"
                                })
                            });
                        case "chevron-down":
                            return Object(I.jsx)("svg", {
                                className: r,
                                height: "20",
                                width: "20",
                                viewBox: "0 0 20 20",
                                children: Object(I.jsx)("path", {
                                    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                                })
                            });
                        case "chevron-up":
                            return Object(I.jsx)("svg", {
                                className: r,
                                height: "20",
                                width: "20",
                                viewBox: "0 0 20 20",
                                children: Object(I.jsx)("path", {
                                    d: "M15.5,13.7c-0.4,0.4-1,0.5-1.6,0L10,9.9l-3.9,3.7c-0.5,0.5-1.1,0.4-1.6,0c-0.4-0.4-0.4-1.2,0-1.6c0.4-0.4,4.7-4.5,4.7-4.5 C9.4,7.3,9.7,7.2,10,7.2s0.6,0.1,0.8,0.3c0,0,4.3,4.1,4.7,4.5S15.9,13.2,15.5,13.7z"
                                })
                            });
                        case "chevron-left":
                            return Object(I.jsx)("svg", {
                                className: r,
                                height: "20",
                                width: "20",
                                viewBox: "0 0 20 20",
                                children: Object(I.jsx)("path", {
                                    d: "M13.1,5.1c0.4,0.4,0.5,1,0,1.6l-3.7,3.9l3.7,3.9c0.5,0.5,0.4,1.1,0,1.6c-0.4,0.4-1.2,0.4-1.6,0c-0.4-0.4-4.5-4.7-4.5-4.7 c-0.2-0.2-0.3-0.5-0.3-0.8S6.7,10,6.9,9.8c0,0,4.1-4.3,4.5-4.7S12.6,4.7,13.1,5.1z"
                                })
                            });
                        case "chevron-right":
                            return Object(I.jsx)("svg", {
                                className: r,
                                height: "20",
                                width: "20",
                                viewBox: "0 0 20 20",
                                children: Object(I.jsx)("path", {
                                    d: "M6.9,16.1c-0.4-0.4-0.5-1,0-1.6l3.7-3.9L6.9,6.7c-0.5-0.5-0.4-1.1,0-1.6c0.4-0.4,1.2-0.4,1.6,0c0.4,0.4,4.5,4.7,4.5,4.7 c0.2,0.2,0.3,0.5,0.3,0.8s-0.1,0.6-0.3,0.8c0,0-4.1,4.3-4.5,4.7C8.1,16.5,7.4,16.5,6.9,16.1z"
                                })
                            });
                        case "chevron-vertical":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    d: "M1 10L2.99999 12L5 10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M1 6L2.99999 4L5 6",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "close":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: Object(I.jsx)("path", {
                                    d: "M13.3334 2.66666L2.66675 13.3333M13.3334 13.3333L2.66675 2.66666L13.3334 13.3333Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "close-alt":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "10",
                                height: "10",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: Object(I.jsx)("path", {
                                    d: "M13.3334 2.66666L2.66675 13.3333M13.3334 13.3333L2.66675 2.66666L13.3334 13.3333Z",
                                    stroke: "currentColor",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "connect":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    d: "M6 8H10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M10 4H10.6667C11.7275 4 12.7449 4.42143 13.4951 5.17157C14.2452 5.92172 14.6667 6.93913 14.6667 8C14.6667 9.06087 14.2452 10.0783 13.4951 10.8284C12.7449 11.5786 11.7275 12 10.6667 12H10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M6.00004 12H5.33337C4.27251 12 3.25509 11.5786 2.50495 10.8284C1.7548 10.0783 1.33337 9.06087 1.33337 8C1.33337 6.93913 1.7548 5.92172 2.50495 5.17157C3.25509 4.42143 4.27251 4 5.33337 4H6.00004",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "eye":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    fillRule: "evenodd",
                                    stroke: "currentColor",
                                    clipRule: "evenodd",
                                    d: "M12 18.2228C10.7905 18.2228 9.68435 17.9761 8.6817 17.4828C7.67905 16.9894 6.79576 16.4085 6.03183 15.7401C5.2679 15.0716 4.62334 14.3952 4.09814 13.7109C3.58886 13.0265 3.22281 12.4934 3 12.1114C3.22281 11.7454 3.58886 11.2202 4.09814 10.5358C4.62334 9.85146 5.2679 9.17507 6.03183 8.50663C6.79576 7.8382 7.67905 7.24934 8.6817 6.74005C9.68435 6.24668 10.7905 6 12 6C13.2095 6 14.3157 6.24668 15.3183 6.74005C16.321 7.24934 17.2042 7.8382 17.9682 8.50663C18.7321 9.17507 19.3767 9.85146 19.9019 10.5358C20.4111 11.2202 20.7772 11.7454 21 12.1114C20.7772 12.4934 20.4111 13.0265 19.9019 13.7109C19.3767 14.3952 18.7321 15.0716 17.9682 15.7401C17.2042 16.4085 16.321 16.9894 15.3183 17.4828C14.3157 17.9761 13.2095 18.2228 12 18.2228Z",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "2.5",
                                    fill: "currentColor"
                                })]
                            });
                        case "eye-crossed":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    fillRule: "evenodd",
                                    stroke: "currentColor",
                                    clipRule: "evenodd",
                                    d: "M12 18.2228C10.7905 18.2228 9.68435 17.9761 8.6817 17.4828C7.67905 16.9894 6.79576 16.4085 6.03183 15.7401C5.2679 15.0716 4.62334 14.3952 4.09814 13.7109C3.58886 13.0265 3.22281 12.4934 3 12.1114C3.22281 11.7454 3.58886 11.2202 4.09814 10.5358C4.62334 9.85146 5.2679 9.17507 6.03183 8.50663C6.79576 7.8382 7.67905 7.24934 8.6817 6.74005C9.68435 6.24668 10.7905 6 12 6C13.2095 6 14.3157 6.24668 15.3183 6.74005C16.321 7.24934 17.2042 7.8382 17.9682 8.50663C18.7321 9.17507 19.3767 9.85146 19.9019 10.5358C20.4111 11.2202 20.7772 11.7454 21 12.1114C20.7772 12.4934 20.4111 13.0265 19.9019 13.7109C19.3767 14.3952 18.7321 15.0716 17.9682 15.7401C17.2042 16.4085 16.321 16.9894 15.3183 17.4828C14.3157 17.9761 13.2095 18.2228 12 18.2228Z",
                                    strokeWidth: "2",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M5.97266 6L18.5135 18.5408",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })]
                            });
                        case "qrcode":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "27",
                                height: "24",
                                viewBox: "0 0 27 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [Object(I.jsx)("rect", {
                                    x: "7",
                                    y: "5",
                                    width: "6",
                                    height: "6",
                                    rx: "2",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5"
                                }), Object(I.jsx)("rect", {
                                    x: "7",
                                    y: "13",
                                    width: "6",
                                    height: "6",
                                    rx: "2",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5"
                                }), Object(I.jsx)("rect", {
                                    x: "15",
                                    y: "5",
                                    width: "6",
                                    height: "6",
                                    rx: "2",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5"
                                }), Object(I.jsx)("rect", {
                                    x: "16.5",
                                    y: "14.5",
                                    width: "3",
                                    height: "3",
                                    rx: "1.5",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeWidth: "1.75"
                                }), Object(I.jsx)("path", {
                                    d: "M21 2H22C23.1046 2 24 2.89543 24 4L24 5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M7 2H6C4.89543 2 4 2.89543 4 4V5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M7 22H6C4.89543 22 4 21.1046 4 20V19",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M21 22H22C23.1046 22 24 21.1046 24 20V19",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "wallet":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "25",
                                height: "20",
                                viewBox: "0 0 25 20",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    d: "M23.75 3.25L23.75 15.75C23.75 16.9926 22.7426 18 21.5 18L3.5 18C2.25736 18 1.25 16.9926 1.25 15.75L1.25 3.25C1.25 2.00736 2.25736 1 3.5 1L21.5 1C22.7426 1 23.75 2.00736 23.75 3.25Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M5.625 1V18",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "card":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "25",
                                height: "20",
                                viewBox: "0 0 25 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [Object(I.jsx)("path", {
                                    d: "M23.75 3.25L23.75 15.75C23.75 16.9926 22.7426 18 21.5 18L3.5 18C2.25736 18 1.25 16.9926 1.25 15.75L1.25 3.25C1.25 2.00736 2.25736 1 3.5 1L21.5 1C22.7426 1 23.75 2.00736 23.75 3.25Z",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M2 7L23 7",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "calendar":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    d: "M19 5.21972V16.8979C19 18.0589 18.1941 19 17.2 19L2.8 19C1.80589 19 1 18.0589 1 16.8979V5.21972C1 4.05878 1.80589 3.11765 2.8 3.11765L17.2 3.11765C18.1941 3.11765 19 4.05878 19 5.21972Z",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M5.23535 1L5.23535 6.29412",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M14.7646 1V6.29412",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "shield":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "19",
                                height: "20",
                                viewBox: "0 0 19 20",
                                fill: "none",
                                children: Object(I.jsx)("path", {
                                    d: "M17.5 3.16088V9.83909C17.5 15.4412 10.4941 18.9412 9.5 18.9412C8.50589 18.9412 1.5 15.4412 1.5 9.83909V3.16088C1.5 1.99994 2.30589 1.05881 3.3 1.05881L15.7 1.05881C16.6941 1.05881 17.5 1.99994 17.5 3.16088Z",
                                    stroke: "#A2A9B9",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "github":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 496 512",
                                fill: "currentColor",
                                children: Object(I.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                })
                            });
                        case "apple":
                            return Object(I.jsx)("svg", {
                                className: r,
                                viewBox: "0 0 842 1000",
                                fill: "currentColor",
                                width: "42",
                                height: "51",
                                children: Object(I.jsx)("path", {
                                    d: "M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z"
                                })
                            });
                        case "google-play":
                            return Object(I.jsx)("svg", {
                                className: r,
                                fill: "currentColor",
                                width: "13",
                                height: "14",
                                viewBox: "0 0 13 14",
                                children: Object(I.jsx)("path", {
                                    d: "M0.406001 0.209333L7.19467 7L0.406668 13.7907C0.285961 13.7399 0.182953 13.6546 0.110595 13.5455C0.0382368 13.4364 -0.000240512 13.3083 1.13121e-06 13.1773V0.822667C5.22306e-05 0.691881 0.038571 0.563999 0.110762 0.454942C0.182953 0.345885 0.285627 0.260471 0.406001 0.209333ZM7.666 7.47133L9.20067 9.006L1.90933 13.228L7.666 7.47133ZM9.79867 5.33933L11.67 6.42333C11.771 6.48194 11.8549 6.56605 11.9132 6.66726C11.9715 6.76846 12.0022 6.88321 12.0022 7C12.0022 7.11679 11.9715 7.23154 11.9132 7.33274C11.8549 7.43395 11.771 7.51806 11.67 7.57667L9.798 8.66067L8.13733 7L9.79867 5.33933ZM1.90933 0.772L9.20133 4.99333L7.666 6.52867L1.90933 0.772Z"
                                })
                            });
                        case "favorite":
                            return Object(I.jsx)("svg", {
                                className: r,
                                stroke: "currentColor",
                                fill: "transparent",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                children: Object(I.jsx)("path", {
                                    d: "M7.4445 1.37979C7.63649 0.873402 8.36306 0.873402 8.55565 1.37979L9.79759 4.82014C9.88459 5.04814 10.106 5.19994 10.3532 5.19994H13.4052C13.9692 5.19994 14.2152 5.90193 13.7718 6.24572L11.5999 8.19989C11.5026 8.27468 11.4315 8.37837 11.3968 8.49608C11.3621 8.61379 11.3656 8.73947 11.4067 8.85508L12.1999 12.2168C12.3931 12.7568 11.7679 13.2206 11.2951 12.8882L8.34506 11.0162C8.24403 10.9452 8.12355 10.9071 8.00007 10.9071C7.87659 10.9071 7.75612 10.9452 7.65509 11.0162L4.70502 12.8882C4.23284 13.2206 3.60707 12.7562 3.80026 12.2168L4.59342 8.85508C4.63457 8.73947 4.63804 8.61379 4.60333 8.49608C4.56862 8.37837 4.49752 8.27468 4.40023 8.19989L2.22833 6.24572C1.78435 5.90193 2.03154 5.19994 2.59431 5.19994H5.64638C5.76655 5.20034 5.88401 5.16424 5.98321 5.09642C6.08242 5.0286 6.1587 4.93226 6.20195 4.82014L7.4439 1.37979H7.4445Z",
                                    stroke: "currentColor",
                                    fill: "transparent",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "search":
                            return Object(I.jsx)("svg", {
                                className: r,
                                fill: "transparent",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                children: Object(I.jsx)("path", {
                                    d: "M13.9999 14.0002L11.0093 11.0042L13.9999 14.0002ZM12.6666 7.00016C12.6666 8.50306 12.0696 9.9444 11.0069 11.0071C9.94415 12.0698 8.50281 12.6668 6.99992 12.6668C5.49703 12.6668 4.05569 12.0698 2.99298 11.0071C1.93027 9.9444 1.33325 8.50306 1.33325 7.00016C1.33325 5.49727 1.93027 4.05593 2.99298 2.99322C4.05569 1.93052 5.49703 1.3335 6.99992 1.3335C8.50281 1.3335 9.94415 1.93052 11.0069 2.99322C12.0696 4.05593 12.6666 5.49727 12.6666 7.00016V7.00016Z",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "arrow-up-right":
                            return Object(I.jsx)("svg", {
                                className: r,
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                stroke: "currentColor",
                                fill: "none",
                                children: Object(I.jsx)("path", {
                                    d: "M11.5 4.5l-7 7M11.5 11.5v-7h-7",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        case "arrow-right":
                            return Object(I.jsxs)("svg", {
                                className: r,
                                stroke: "currentColor",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [Object(I.jsx)("path", {
                                    d: "M22 12H2",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), Object(I.jsx)("path", {
                                    d: "M14 20L22 12L14 4",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            });
                        case "arrow-left":
                            return Object(I.jsx)("svg", {
                                className: r,
                                stroke: "currentColor",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: Object(I.jsx)("path", {
                                    d: "M10 18L4 12M4 12L10 6M4 12H20",
                                    stroke: "currentColor",
                                    strokeWidth: "1.75",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            });
                        default:
                            return Object(I.jsx)(I.Fragment, {})
                    }
                }),
                jt = n(803),
                ft = n(801),
                mt = ["title", "titleId"];

            function vt() {
                return vt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, vt.apply(this, arguments)
            }

            function gt(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function xt(e, t) {
                var n = e.title,
                    r = e.titleId,
                    a = gt(e, mt);
                return l.createElement("svg", vt({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, a), n ? l.createElement("title", {
                    id: r
                }, n) : null, et || (et = l.createElement("path", {
                    d: "M12 15C12 17.7614 9.76142 20 7 20C4.23858 20 2 17.7614 2 15",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                })), tt || (tt = l.createElement("path", {
                    d: "M22 15C22 17.7614 19.7614 20 17 20C14.2386 20 12 17.7614 12 15",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                })), nt || (nt = l.createElement("path", {
                    d: "M17 4C18.6358 4 20.0882 4.78555 21.0004 6",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                })), rt || (rt = l.createElement("path", {
                    d: "M6.99988 4C5.36406 4 3.91172 4.78555 2.99951 6",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                })), at || (at = l.createElement("path", {
                    d: "M12 15C12 13 16 9 16 9H8C8 9 12 13 12 15Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinejoin: "round"
                })))
            }
            var Ot = l.forwardRef(xt),
                wt = (n.p, n(388)),
                yt = n.n(wt),
                _t = function() {
                    var e = Object(H.b)(),
                        t = Object(H.c)((function(e) {
                            return e.flex
                        })).pairs.data,
                        n = Object(H.c)((function(e) {
                            return e.dashboard
                        })),
                        r = n.selectedPair,
                        a = n.authorized,
                        s = function(n) {
                            if (t) {
                                var a = t.find((function(e) {
                                    return e ? e.ticker === n.ticker : void 0
                                }));
                                a && a !== r && (e(he(a)), e(ue([])), e(function(e) {
                                    return {
                                        type: q,
                                        payload: e
                                    }
                                }([])))
                            }
                        },
                        i = function(e) {};
                    return Object(l.useEffect)((function() {
                        e({
                            type: U,
                            payload: []
                        }), z.b.getPairs().then((function(t) {
                            console.log(t), e(function(e) {
                                return {
                                    type: V,
                                    payload: e
                                }
                            }(t.tradingPairs.map((function(e) {
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    major: e.ticker.split("/")[0],
                                    minor: e.ticker.split("/")[1],
                                    majorDecimals: parseFloat(e.majorDecimals),
                                    minorDecimals: parseFloat(e.minorDecimals),
                                    open: parseFloat(e.open),
                                    price: parseFloat(e.price),
                                    priceScale: parseFloat(e.priceScale)
                                })
                            }))))
                        }))
                    }), []), Object(l.useEffect)((function() {
                        t && t.length && e(he(t.find((function(e) {
                            return "0:fc8cec9a07ac6dbd93aa618856d582bec1dcce05ba292c83e2dc7e6b08f5fc20" === e.addr
                        })) || t[t.length - 1]))
                    }), [t, e]), Object(l.useMemo)((function() {
                        return {
                            pairs: t,
                            authorized: Boolean(a),
                            selectedPair: r,
                            setSelectedPair: s,
                            toggleFavouritePair: i
                        }
                    }), [t, a, r, i])
                },
                kt = ["showModal", "toggleModal"],
                Ct = F.a.bind(yt.a),
                St = F.a.bind(it.a),
                Nt = function(e) {
                    var t = e.showModal,
                        n = e.toggleModal,
                        r = (Object(y.a)(e, kt), _t()),
                        a = r.pairs,
                        s = r.authorized,
                        i = r.selectedPair,
                        c = r.setSelectedPair,
                        o = r.toggleFavouritePair,
                        u = Object(l.useState)(!1),
                        d = Object(b.a)(u, 2),
                        h = d[0],
                        p = d[1],
                        j = Object(l.useState)(""),
                        f = Object(b.a)(j, 2),
                        v = f[0],
                        g = f[1],
                        x = Object(l.useState)(!1),
                        O = Object(b.a)(x, 2),
                        w = O[0],
                        _ = O[1],
                        k = function(e) {
                            g(e.currentTarget.value)
                        },
                        C = function(e, t) {
                            e.stopPropagation(), _(!1), c(t)
                        };
                    return Object(I.jsxs)(I.Fragment, {
                        children: [Object(I.jsx)("header", {
                            className: Ct("header"),
                            children: Object(I.jsxs)(jt.a, {
                                expand: "sm",
                                expanded: h,
                                className: Ct("navbar"),
                                children: [Object(I.jsx)(jt.a.Brand, {
                                    className: Ct("navbar-brand"),
                                    children: Object(I.jsxs)(m.b, {
                                        to: "/",
                                        onClick: function() {
                                            return p(!1)
                                        },
                                        className: "logo",
                                        children: [Object(I.jsx)(Ot, {}), Object(I.jsx)("span", {
                                            children: "Flash Exchange"
                                        })]
                                    })
                                }), Object(I.jsx)(jt.a.Toggle, {
                                    className: Ct("navbar-toggler", {
                                        collapsed: !h
                                    }),
                                    "aria-controls": "basic-navbar-nav",
                                    onClick: function() {
                                        return p(!h)
                                    }
                                }), Object(I.jsxs)(jt.a.Collapse, {
                                    id: "basic-navbar-nav",
                                    className: Ct("navbar-collapse"),
                                    children: [Object(I.jsx)(L.a, {
                                        className: Ct("navbar-nav", "me-auto"),
                                        children: Object(I.jsxs)(ft.a, {
                                            show: w,
                                            className: Ct("nav-item", "navbar-dropdown"),
                                            children: [Object(I.jsxs)(ft.a.Toggle, {
                                                className: Ct("nav-item", "navbar-dropdown"),
                                                onClick: function(e) {
                                                    e.stopPropagation(), _(!0)
                                                },
                                                children: ["Markets", Object(I.jsx)(bt, {
                                                    icon: "chevron-vertical"
                                                })]
                                            }), Object(I.jsx)(ft.a.Menu, {
                                                children: Object(I.jsxs)(Kt, {
                                                    className: Ct("header-panel"),
                                                    header: Object(I.jsxs)(L.a, {
                                                        variant: "pills",
                                                        defaultActiveKey: "all",
                                                        className: Ct("head-narrow head-narrow-note", "nav-pills nav-pills-narrow"),
                                                        children: [Object(I.jsx)(L.a.Item, {
                                                            children: Object(I.jsx)(L.a.Link, {
                                                                className: Ct("nav-link-pill"),
                                                                children: Object(I.jsx)(bt, {
                                                                    icon: "favorite"
                                                                })
                                                            })
                                                        }), Object(I.jsx)(L.a.Item, {
                                                            children: Object(I.jsx)(L.a.Link, {
                                                                className: Ct("nav-link-pill active"),
                                                                children: "All"
                                                            })
                                                        }), Object(I.jsx)(L.a.Item, {
                                                            children: Object(I.jsx)(L.a.Link, {
                                                                className: Ct("nav-link-pill"),
                                                                children: "Evers"
                                                            })
                                                        })]
                                                    }),
                                                    children: [Object(I.jsx)(ot, {
                                                        name: "filter",
                                                        value: v,
                                                        onChange: k,
                                                        icon: "search",
                                                        action: Object(I.jsx)(Qe, {
                                                            className: St("clear-button", {
                                                                active: v
                                                            }),
                                                            type: "button",
                                                            onClick: function() {
                                                                return g("")
                                                            },
                                                            children: Object(I.jsx)(bt, {
                                                                icon: "close-alt"
                                                            })
                                                        }),
                                                        placeholder: "Filter"
                                                    }), Object(I.jsxs)(S.a, {
                                                        className: Ct("pairs-menu"),
                                                        children: [Object(I.jsx)("thead", {
                                                            children: Object(I.jsxs)("tr", {
                                                                children: [Object(I.jsx)("th", {
                                                                    className: "paragraph paragraph-footnote",
                                                                    children: "Pair"
                                                                }), Object(I.jsx)("th", {
                                                                    className: "paragraph paragraph-footnote right",
                                                                    children: "Price, EVER"
                                                                }), Object(I.jsx)("th", {
                                                                    className: "paragraph paragraph-footnote right",
                                                                    children: "Change"
                                                                })]
                                                            })
                                                        }), Object(I.jsx)("tbody", {
                                                            className: "mono-narrow mono-narrow-note",
                                                            children: a.filter((function(e) {
                                                                return e.ticker.toLocaleLowerCase().includes(v.toLocaleLowerCase())
                                                            })).map((function(e, t) {
                                                                var n = e.ticker.split("/"),
                                                                    r = Object(b.a)(n, 2),
                                                                    a = r[0],
                                                                    s = r[1],
                                                                    c = e.price,
                                                                    l = e.open;
                                                                return i && e.addr === i.addr ? Object(I.jsxs)("tr", {
                                                                    children: [Object(I.jsxs)("td", {
                                                                        children: [Object(I.jsx)("button", {
                                                                            onClick: function() {
                                                                                return o(e)
                                                                            },
                                                                            children: Object(I.jsx)(bt, {
                                                                                icon: "favorite"
                                                                            })
                                                                        }), "\xa0", a, Object(I.jsx)("em", {
                                                                            children: "/"
                                                                        }), s]
                                                                    }), Object(I.jsx)("td", {
                                                                        className: "right",
                                                                        children: c ? c.toLocaleString("en", {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2
                                                                        }) : Object(I.jsx)(Jt, {
                                                                            wide: "half"
                                                                        })
                                                                    }), Object(I.jsx)("td", {
                                                                        className: Ct("right", {
                                                                            green: c - l > 0,
                                                                            red: c - l < 0
                                                                        }),
                                                                        children: c ? Object(I.jsxs)(I.Fragment, {
                                                                            children: [c - l > 0 ? "+" : "", (100 * (c - l) / l).toLocaleString("en", {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2
                                                                            }), "\u2009%"]
                                                                        }) : Object(I.jsx)(Jt, {
                                                                            wide: "triplet"
                                                                        })
                                                                    })]
                                                                }, t) : Object(I.jsxs)("tr", {
                                                                    onClick: function(t) {
                                                                        return C(t, e)
                                                                    },
                                                                    children: [Object(I.jsxs)("td", {
                                                                        children: [Object(I.jsx)("button", {
                                                                            onClick: function() {
                                                                                return o(e)
                                                                            },
                                                                            children: Object(I.jsx)(bt, {
                                                                                icon: "favorite"
                                                                            })
                                                                        }), "\xa0", a, Object(I.jsx)("em", {
                                                                            children: "/"
                                                                        }), s]
                                                                    }), Object(I.jsx)("td", {
                                                                        className: "right",
                                                                        children: c ? c.toLocaleString("en", {
                                                                            minimumFractionDigits: 2,
                                                                            maximumFractionDigits: 2
                                                                        }) : Object(I.jsx)(Jt, {
                                                                            wide: "half"
                                                                        })
                                                                    }), Object(I.jsx)("td", {
                                                                        className: Ct("right", {
                                                                            green: c - l > 0,
                                                                            red: c - l < 0
                                                                        }),
                                                                        children: c ? Object(I.jsxs)(I.Fragment, {
                                                                            children: [c - l > 0 ? "+" : "", (100 * (c - l) / l).toLocaleString("en", {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2
                                                                            }), "\u2009%"]
                                                                        }) : Object(I.jsx)(Jt, {
                                                                            wide: "triplet"
                                                                        })
                                                                    })]
                                                                }, t)
                                                            }))
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), Object(I.jsx)(L.a.Link, {
                                        className: Ct("nav-link", "surf-toggle", {
                                            "nav-link-default": t
                                        }),
                                        onClick: n,
                                        children: t ? Object(I.jsxs)(I.Fragment, {
                                            children: [Object(I.jsx)(bt, {
                                                icon: "close"
                                            }), "Close"]
                                        }) : s ? Object(I.jsxs)(I.Fragment, {
                                            children: [Object(I.jsx)(bt, {
                                                icon: "qrcode"
                                            }), "Surf"]
                                        }) : Object(I.jsxs)(I.Fragment, {
                                            children: [Object(I.jsx)(bt, {
                                                icon: "connect"
                                            }), "Connect Surf"]
                                        })
                                    })]
                                }), Object(I.jsxs)(ft.a, {
                                    show: w,
                                    className: Ct("nav-item", "navbar-dropdown", "d-block d-sm-none"),
                                    children: [Object(I.jsxs)(ft.a.Toggle, {
                                        className: Ct("nav-item", "navbar-dropdown"),
                                        onClick: function(e) {
                                            e.stopPropagation(), _(!0)
                                        },
                                        children: ["Markets", Object(I.jsx)(bt, {
                                            icon: "chevron-vertical"
                                        })]
                                    }), Object(I.jsx)(ft.a.Menu, {
                                        children: Object(I.jsxs)(Kt, {
                                            className: Ct("header-panel"),
                                            header: Object(I.jsxs)(L.a, {
                                                variant: "pills",
                                                defaultActiveKey: "all",
                                                className: Ct("head-narrow head-narrow-note", "nav-pills nav-pills-narrow"),
                                                children: [Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Ct("nav-link-pill"),
                                                        children: Object(I.jsx)(bt, {
                                                            icon: "favorite"
                                                        })
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Ct("nav-link-pill active"),
                                                        children: "All"
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Ct("nav-link-pill"),
                                                        children: "Evers"
                                                    })
                                                })]
                                            }),
                                            children: [Object(I.jsx)(ot, {
                                                name: "filter",
                                                value: v,
                                                onChange: k,
                                                icon: "search",
                                                action: Object(I.jsx)(Qe, {
                                                    className: St("clear-button", {
                                                        active: v
                                                    }),
                                                    type: "button",
                                                    onClick: function() {
                                                        return g("")
                                                    },
                                                    children: Object(I.jsx)(bt, {
                                                        icon: "close-alt"
                                                    })
                                                }),
                                                placeholder: "Filter"
                                            }), Object(I.jsxs)(S.a, {
                                                className: Ct("pairs-menu"),
                                                children: [Object(I.jsx)("thead", {
                                                    children: Object(I.jsxs)("tr", {
                                                        children: [Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote",
                                                            children: "Pair"
                                                        }), Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote right",
                                                            children: "Price, EVER"
                                                        }), Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote right",
                                                            children: "Change"
                                                        })]
                                                    })
                                                }), Object(I.jsx)("tbody", {
                                                    className: "mono-narrow mono-narrow-note",
                                                    children: a.filter((function(e) {
                                                        return e.ticker.toLocaleLowerCase().includes(v.toLocaleLowerCase())
                                                    })).map((function(e, t) {
                                                        var n = e.ticker.split("/"),
                                                            r = Object(b.a)(n, 2),
                                                            a = r[0],
                                                            s = r[1],
                                                            c = e.price,
                                                            l = e.open;
                                                        return i && e.addr === i.addr ? Object(I.jsxs)("tr", {
                                                            children: [Object(I.jsxs)("td", {
                                                                children: [Object(I.jsx)("button", {
                                                                    onClick: function() {
                                                                        return o(e)
                                                                    },
                                                                    children: Object(I.jsx)(bt, {
                                                                        icon: "favorite"
                                                                    })
                                                                }), "\xa0", a, Object(I.jsx)("em", {
                                                                    children: "/"
                                                                }), s]
                                                            }), Object(I.jsx)("td", {
                                                                className: "right",
                                                                children: c ? c.toLocaleString("en", {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                }) : Object(I.jsx)(Jt, {
                                                                    wide: "half"
                                                                })
                                                            }), Object(I.jsx)("td", {
                                                                className: Ct("right", {
                                                                    green: c - l > 0,
                                                                    red: c - l < 0
                                                                }),
                                                                children: c ? Object(I.jsxs)(I.Fragment, {
                                                                    children: [c - l > 0 ? "+" : "", (100 * (c - l) / l).toLocaleString("en", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    }), "\u2009%"]
                                                                }) : Object(I.jsx)(Jt, {
                                                                    wide: "triplet"
                                                                })
                                                            })]
                                                        }, t) : Object(I.jsxs)("tr", {
                                                            onClick: function(t) {
                                                                return C(t, e)
                                                            },
                                                            children: [Object(I.jsxs)("td", {
                                                                children: [Object(I.jsx)("button", {
                                                                    onClick: function() {
                                                                        return o(e)
                                                                    },
                                                                    children: Object(I.jsx)(bt, {
                                                                        icon: "favorite"
                                                                    })
                                                                }), "\xa0", a, Object(I.jsx)("em", {
                                                                    children: "/"
                                                                }), s]
                                                            }), Object(I.jsx)("td", {
                                                                className: "right",
                                                                children: c ? c.toLocaleString("en", {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                }) : Object(I.jsx)(Jt, {
                                                                    wide: "half"
                                                                })
                                                            }), Object(I.jsx)("td", {
                                                                className: Ct("right", {
                                                                    green: c - l > 0,
                                                                    red: c - l < 0
                                                                }),
                                                                children: c ? Object(I.jsxs)(I.Fragment, {
                                                                    children: [c - l > 0 ? "+" : "", (100 * (c - l) / l).toLocaleString("en", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    }), "\u2009%"]
                                                                }) : Object(I.jsx)(Jt, {
                                                                    wide: "triplet"
                                                                })
                                                            })]
                                                        }, t)
                                                    }))
                                                })]
                                            })]
                                        })
                                    })]
                                }), Object(I.jsx)(L.a.Link, {
                                    className: Ct("nav-link", "surf-toggle", "d-block d-sm-none", {
                                        "nav-link-default": t
                                    }),
                                    onClick: n,
                                    children: t ? Object(I.jsxs)(I.Fragment, {
                                        children: [Object(I.jsx)(bt, {
                                            icon: "close"
                                        }), "Close"]
                                    }) : s ? Object(I.jsxs)(I.Fragment, {
                                        children: [Object(I.jsx)(bt, {
                                            icon: "qrcode"
                                        }), "Surf"]
                                    }) : Object(I.jsxs)(I.Fragment, {
                                        children: [Object(I.jsx)(bt, {
                                            icon: "connect"
                                        }), "Connect Surf"]
                                    })
                                })]
                            })
                        }), Object(I.jsx)("div", {
                            onClick: function() {
                                return _(!1)
                            },
                            className: "fade modal-backdrop menu-backdrop".concat(w ? " show" : "")
                        })]
                    })
                },
                At = (n(95), n(806)),
                Lt = n(392),
                Pt = n.n(Lt),
                Bt = ["show", "onHide", "size", "className", "header", "body", "footer"],
                Mt = ["show", "onHide", "size", "className", "header", "body", "footer"],
                Ft = F.a.bind(Pt.a),
                Et = function(e) {
                    var t = e.show,
                        n = e.onHide,
                        r = (e.size, e.className),
                        a = e.header,
                        s = e.body,
                        i = e.footer,
                        c = Object(y.a)(e, Bt);
                    return Object(I.jsxs)(At.a, Object(v.a)(Object(v.a)({
                        show: t,
                        onHide: n,
                        fullscreen: !0,
                        className: r
                    }, c), {}, {
                        children: [a && Object(I.jsx)(At.a.Header, {
                            closeButton: !0,
                            children: Object(I.jsx)(At.a.Title, {
                                children: a
                            })
                        }), Object(I.jsx)(At.a.Body, {
                            children: s
                        }), i && Object(I.jsx)(At.a.Footer, {
                            children: i
                        })]
                    }))
                },
                It = function(e) {
                    var t = e.show,
                        n = e.onHide,
                        r = (e.size, e.className),
                        a = e.header,
                        s = e.body,
                        i = e.footer,
                        c = Object(y.a)(e, Mt);
                    return Object(I.jsx)(Et, Object(v.a)({
                        show: t,
                        onHide: n,
                        fullscreen: !0,
                        className: Ft("modal-overlay", r),
                        header: a,
                        body: s,
                        footer: i
                    }, c))
                },
                Tt = n(393),
                Ht = n.n(Tt),
                zt = F.a.bind(Ht.a),
                Rt = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t,
                        r = e.title,
                        a = e.value,
                        s = e.delta;
                    return Object(I.jsxs)("div", {
                        className: zt("pair-stats", n, {
                            up: s && s.value > 0,
                            down: s && s.value < 0
                        }),
                        children: [Object(I.jsx)("div", {
                            className: zt("pair-stats-header", "paragraph", "paragraph-label"),
                            children: r
                        }), Object(I.jsxs)("div", {
                            className: zt("pair-stats-body", "paragraph", "paragraph-footnote"),
                            children: [a.toLocaleString("en", {
                                minimumFractionDigits: 2
                            }), " \xa0\xa0", s && Object(I.jsxs)("span", {
                                children: [s && s.value > 0 ? "+" : null, s.value.toLocaleString("en", {
                                    minimumFractionDigits: 2
                                }), "\u2009", s.units]
                            })]
                        })]
                    })
                },
                Dt = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return Object(I.jsxs)("div", {
                        className: zt("pair-stats-skeleton", n),
                        children: [Object(I.jsx)("div", {
                            className: zt("pair-stats-header"),
                            children: Object(I.jsx)(Jt, {
                                wide: "half"
                            })
                        }), Object(I.jsx)("div", {
                            className: zt("pair-stats-body"),
                            children: Object(I.jsx)(Jt, {
                                variant: "green" === n ? n : "primary"
                            })
                        })]
                    })
                },
                Vt = n(394),
                Ut = n.n(Vt),
                Wt = F.a.bind(Ut.a),
                Kt = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t,
                        r = (e.type, e.children),
                        a = e.header;
                    return Object(I.jsxs)("div", {
                        className: Wt("panel", n),
                        children: [a && Object(I.jsx)("div", {
                            className: Wt("panel-header", "head-narrow head-narrow-note"),
                            children: a
                        }), Object(I.jsx)("div", {
                            className: Wt("panel-body"),
                            children: r
                        })]
                    })
                },
                qt = n(395),
                Zt = n.n(qt),
                Gt = F.a.bind(Zt.a),
                Jt = function(e) {
                    var t = e.className,
                        n = e.size,
                        r = void 0 === n ? "normal" : n,
                        a = e.variant,
                        s = void 0 === a ? "normal" : a,
                        i = e.wide,
                        c = void 0 === i ? "normal" : i;
                    return Object(I.jsx)("div", {
                        className: Gt(t, "skeleton", "skeleton-" + s, "skeleton-height-" + r, c ? "skeleton-width-" + c : null)
                    })
                },
                Yt = n(396),
                Xt = n.n(Yt),
                Qt = F.a.bind(Xt.a),
                $t = function(e) {
                    var t = e.className;
                    return Object(I.jsx)("svg", {
                        className: Qt("loader", t),
                        children: Object(I.jsx)("circle", {
                            cx: "20",
                            cy: "20",
                            r: "12"
                        })
                    })
                },
                en = (n(397), n(21)),
                tn = n(7),
                nn = n(8),
                rn = n(14),
                an = n(15),
                sn = n(798),
                cn = n(809),
                on = n(398),
                ln = n.n(on),
                un = F.a.bind(ln.a),
                dn = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t,
                        r = e.children,
                        a = e.header,
                        s = e.show,
                        i = e.onClose;
                    return Object(I.jsx)(sn.a, {
                        className: un("toast-container", "p-4"),
                        position: "top-end",
                        children: Object(I.jsxs)(cn.a, {
                            show: s,
                            onClose: i,
                            className: un(n, "toast"),
                            children: [Object(I.jsxs)(cn.a.Header, {
                                className: un("toast-header"),
                                closeButton: !1,
                                children: [a, Object(I.jsx)("button", {
                                    onClick: function() {
                                        return i()
                                    },
                                    children: Object(I.jsx)(bt, {
                                        icon: "close"
                                    })
                                })]
                            }), Object(I.jsx)(cn.a.Body, {
                                className: un("toast-body"),
                                children: r
                            })]
                        })
                    })
                },
                hn = function(e) {
                    var t = Object(H.b)(),
                        n = Object(H.c)((function(e) {
                            return e.flex
                        })),
                        r = n.orderbook,
                        a = r.data,
                        s = r.promiseState,
                        i = n.trades,
                        c = i.data,
                        o = i.promiseState,
                        u = (Object(l.useRef)(void 0), a.map((function(e) {
                            return {
                                price: parseFloat(e.price),
                                priceScale: e.priceScale,
                                minAmount: e.minAmount,
                                buyVolume: parseFloat(e.buyVolume),
                                sellVolume: parseFloat(e.sellVolume)
                            }
                        }))),
                        d = u.filter((function(e) {
                            return e.sellVolume
                        })).length;
                    d < 7 || u.splice(0, d - 7), u.splice(14);
                    var h = u.reduce((function(e, t) {
                            var n = t.price * (t.buyVolume || t.sellVolume);
                            return e > n ? e : n
                        }), 0),
                        p = function(e) {
                            t(function(e) {
                                return {
                                    type: oe,
                                    payload: e
                                }
                            }(e))
                        };
                    return Object(l.useEffect)((function() {
                        return e && ze.unsubscribe(De).then((function() {
                                t({
                                    type: K,
                                    payload: null
                                }), ze.subscribeOrderbook(null === e || void 0 === e ? void 0 : e.addr, De, (function(e, n) {
                                    var r = n.priceScale,
                                        a = n.minAmount,
                                        s = new Map;
                                    e.bids.forEach((function(e) {
                                        var t = s.get(e.price);
                                        t ? t.buyVolume += e.amount : s.set(e.price, {
                                            price: e.price,
                                            buyVolume: e.amount,
                                            sellVolume: 0,
                                            priceScale: r,
                                            minAmount: a
                                        })
                                    })), e.asks.forEach((function(e) {
                                        var t = s.get(e.price);
                                        t ? t.sellVolume += e.amount : s.set(e.price, {
                                            price: e.price,
                                            sellVolume: e.amount,
                                            buyVolume: 0,
                                            priceScale: r,
                                            minAmount: a
                                        })
                                    }));
                                    var i = Array.from(s.values()).sort((function(e, t) {
                                        return t.price - e.price
                                    }));
                                    t(ue(i))
                                }))
                            })),
                            function() {
                                ze.unsubscribe(De)
                            }
                    }), [e, t]), Object(l.useMemo)((function() {
                        return {
                            promiseState: s,
                            tradesPromiseState: o,
                            orderbook: u,
                            trades: c.sort((function(e, t) {
                                return t.time - e.time
                            })).slice(0, 2),
                            orderbookMax: h,
                            selectOrder: p
                        }
                    }), [e, a, c, p])
                },
                pn = function(e) {
                    var t = Object(H.b)(),
                        n = Object(H.c)((function(e) {
                            return e.flex
                        })).trades,
                        r = n.data,
                        a = n.promiseState;
                    return Object(l.useEffect)((function() {
                        return e && ze.unsubscribe(Re).then((function() {
                                t({
                                    type: Z,
                                    payload: null
                                }), ze.subscribeRecentTrades(null === e || void 0 === e ? void 0 : e.addr, Re, (function(e, n) {
                                    var r, a = n.minAmount,
                                        s = n.priceScale;
                                    t((r = e.map((function(e) {
                                        return Object(v.a)(Object(v.a)({}, e), {}, {
                                            minAmount: a,
                                            priceScale: s
                                        })
                                    })), {
                                        type: G,
                                        payload: r
                                    }))
                                }))
                            })),
                            function() {
                                ze.unsubscribe(Re)
                            }
                    }), [e, t]), Object(l.useMemo)((function() {
                        return {
                            trades: r.sort((function(e, t) {
                                return t.time - e.time
                            })),
                            promiseState: a,
                            orderbookMax: void 0,
                            selectOrder: void 0
                        }
                    }), [e, r])
                },
                bn = n(135),
                jn = n.n(bn),
                fn = function(e) {
                    var t, n = 1 / e,
                        r = null === (t = String(23.32)) || void 0 === t ? void 0 : t.match(/\D/),
                        a = r && r.length ? r[0] : "",
                        s = String(n).split(a);
                    return s[1] ? s[1].length : 0
                },
                mn = function(e) {
                    return function(e) {
                        var t = new Date(1e3 * e),
                            n = new Date;
                        return t.getDate() == n.getDate() && t.getMonth() == n.getMonth() && t.getFullYear() == n.getFullYear()
                    }(e) ? jn.a.unix(e).format("HH:mm:ss") : jn.a.unix(e).format("YYYY-MM-DD HH:mm:ss")
                },
                vn = function(e, t) {
                    return (1 * e).toLocaleString("en", {
                        minimumFractionDigits: t,
                        maximumFractionDigits: t
                    })
                },
                gn = F.a.bind(Ge.a),
                xn = function(e) {
                    var t = e.color,
                        n = e.price,
                        r = e.volume,
                        a = e.onClick;
                    return Object(I.jsxs)("tr", {
                        onClick: a,
                        children: [Object(I.jsx)("td", {
                            className: gn(t),
                            children: n
                        }), Object(I.jsx)("td", {
                            className: "right",
                            children: r
                        })]
                    })
                },
                On = function(e) {
                    var t = e.selectedPair,
                        n = hn(t),
                        r = n.orderbook,
                        a = n.orderbookMax,
                        s = n.selectOrder,
                        i = (n.promiseState, n.trades),
                        c = (n.tradesPromiseState, null),
                        o = 0,
                        l = "",
                        u = "";
                    if (r && r.length && i && i.length) {
                        var d = fn(i[0].priceScale);
                        if (c = vn(i[0].price, d), i.length > 1) {
                            var h = parseFloat(i[0].price),
                                p = parseFloat(i[1].price);
                            u = vn(100 * (o = h - p) / p, 2), l = vn(o, d)
                        }
                    }
                    return Object(I.jsx)(Kt, {
                        header: "Orderbook",
                        children: Object(I.jsxs)(S.a, {
                            children: [Object(I.jsx)("thead", {
                                children: Object(I.jsxs)("tr", {
                                    children: [Object(I.jsx)("th", {
                                        className: "paragraph paragraph-footnote",
                                        children: t ? Object(I.jsxs)(I.Fragment, {
                                            children: ["Price, ", t.ticker.split("/")[1]]
                                        }) : Object(I.jsx)(Jt, {
                                            wide: "half"
                                        })
                                    }), Object(I.jsx)("th", {
                                        className: "paragraph paragraph-footnote right",
                                        children: t ? Object(I.jsxs)(I.Fragment, {
                                            children: ["Amount, ", t.ticker.split("/")[0]]
                                        }) : Object(I.jsx)(Jt, {
                                            wide: "half"
                                        })
                                    })]
                                })
                            }), Object(I.jsxs)("tbody", {
                                className: gn("mono-narrow mono-narrow-note", "orderbook"),
                                children: [r && a && r.length ? Object(I.jsx)(I.Fragment, {
                                    children: r.filter((function(e) {
                                        return e.sellVolume
                                    })).map((function(e, t) {
                                        return Object(I.jsx)(xn, {
                                            onClick: function() {
                                                return s(e)
                                            },
                                            color: "red",
                                            price: vn(e.price, fn(e.priceScale)),
                                            volume: vn(e.sellVolume, fn(e.minAmount)),
                                            max: 1
                                        }, t)
                                    }))
                                }) : Object(I.jsx)(I.Fragment, {
                                    children: Array(4).fill(null).map((function(e, t) {
                                        return Object(I.jsxs)("tr", {
                                            children: [Object(I.jsx)("td", {
                                                children: Object(I.jsx)(Jt, {
                                                    variant: "primary"
                                                })
                                            }), Object(I.jsx)("td", {
                                                className: "right",
                                                children: Object(I.jsx)(Jt, {})
                                            })]
                                        }, t)
                                    }))
                                }), r && r.length && i && i.length ? Object(I.jsx)("tr", {
                                    children: Object(I.jsx)("td", {
                                        colSpan: 2,
                                        children: Object(I.jsx)("div", {
                                            className: "balanced-value",
                                            children: i.length > 1 ? Object(I.jsxs)(I.Fragment, {
                                                children: [Object(I.jsxs)("div", {
                                                    className: "value headline headline-head ".concat(o >= 0 ? "green" : "red"),
                                                    children: [c, o >= 0 ? Object(I.jsx)(bt, {
                                                        icon: "caret-up"
                                                    }) : Object(I.jsx)(bt, {
                                                        icon: "caret-down"
                                                    })]
                                                }), Object(I.jsxs)("span", {
                                                    className: "paragraph paragraph-footnote null",
                                                    children: [u, "\u2009%"]
                                                }), Object(I.jsx)("span", {
                                                    className: "paragraph paragraph-footnote null",
                                                    children: l
                                                })]
                                            }) : Object(I.jsx)(I.Fragment, {
                                                children: Object(I.jsx)("div", {
                                                    className: "value headline headline-head green",
                                                    children: c
                                                })
                                            })
                                        })
                                    })
                                }) : Object(I.jsx)("tr", {
                                    children: Object(I.jsx)("td", {
                                        colSpan: 2,
                                        children: Object(I.jsxs)("div", {
                                            className: "balanced-value",
                                            children: [Object(I.jsx)(Jt, {
                                                variant: "green"
                                            }), Object(I.jsx)(Jt, {
                                                wide: "triplet"
                                            }), Object(I.jsx)(Jt, {
                                                wide: "triplet"
                                            })]
                                        })
                                    })
                                }), r && a && r.length ? Object(I.jsx)(I.Fragment, {
                                    children: r.filter((function(e) {
                                        return e.buyVolume
                                    })).map((function(e, t) {
                                        return Object(I.jsx)(xn, {
                                            onClick: function() {
                                                return s(e)
                                            },
                                            color: "green",
                                            price: vn(e.price, fn(e.priceScale)),
                                            volume: vn(e.buyVolume, fn(e.minAmount)),
                                            max: 1
                                        }, t)
                                    }))
                                }) : Object(I.jsx)(I.Fragment, {
                                    children: Array(4).fill(null).map((function(e, t) {
                                        return Object(I.jsxs)("tr", {
                                            children: [Object(I.jsx)("td", {
                                                children: Object(I.jsx)(Jt, {
                                                    variant: "primary"
                                                })
                                            }), Object(I.jsx)("td", {
                                                className: "right",
                                                children: Object(I.jsx)(Jt, {})
                                            })]
                                        }, t)
                                    }))
                                })]
                            })]
                        })
                    })
                },
                wn = n(399),
                yn = n(400),
                _n = n.n(yn),
                kn = n(206),
                Cn = F.a.bind(_n.a),
                Sn = function(e) {
                    var t = e.selectedPair,
                        n = e.selectedOrderBookRow,
                        r = e.authorized,
                        a = e.exchangeMode,
                        s = e.setExchangeMode,
                        i = e.handleShow,
                        c = e.tradeLoading,
                        o = e.trade,
                        u = Object(l.useState)("limit"),
                        d = Object(b.a)(u, 2),
                        h = (d[0], d[1]),
                        p = Object(l.useState)(!1),
                        j = Object(b.a)(p, 2),
                        f = j[0],
                        m = j[1],
                        v = kn.b().shape({
                            price: kn.a().typeError("This one should be a number").required(""),
                            amount: kn.a().typeError("This one should be a number").required("")
                        }),
                        g = Object($e.c)({
                            initialValues: {
                                price: 0,
                                stop: 0,
                                amount: 0,
                                post: !1,
                                ioc: !1
                            },
                            validateOnBlur: !0,
                            validateOnChange: !0,
                            validationSchema: v,
                            onSubmit: function(e, t) {
                                Object(wn.a)(e);
                                t.setSubmitting;
                                o({
                                    sell: "sell" === a,
                                    price: "string" === typeof g.values.price ? parseFloat(g.values.price) : g.values.price,
                                    amount: "string" === typeof g.values.amount ? parseFloat(g.values.amount) : g.values.amount,
                                    ioc: g.values.ioc,
                                    post: g.values.post
                                })
                            }
                        });
                    Object(l.useEffect)((function() {
                        n && (g.setFieldValue("price", parseFloat(n.price)), g.setFieldValue("amount", parseFloat(n.sellVolume || n.buyVolume)), m(!f))
                    }), [n]), Object(l.useEffect)((function() {
                        g.values.post && (g.values.ioc = !1, m(!f))
                    }), [g.values.post]), Object(l.useEffect)((function() {
                        g.values.ioc && (g.values.post = !1, m(!f))
                    }), [g.values.ioc]), Object(l.useEffect)((function() {}), [g.values, n, a]);
                    return Object(I.jsx)(N.a.Container, {
                        defaultActiveKey: "limit",
                        onSelect: function(e) {
                            h(String(e).toLowerCase())
                        },
                        children: Object(I.jsx)(Kt, {
                            header: Object(I.jsxs)(L.a, {
                                variant: "pills",
                                className: Cn("head-narrow head-narrow-note", "nav-pills"),
                                onSelect: function(e) {
                                    h(String(e).toLowerCase())
                                },
                                children: [Object(I.jsx)(L.a.Item, {
                                    children: Object(I.jsx)(L.a.Link, {
                                        className: Cn("nav-link-pill"),
                                        eventKey: "limit",
                                        children: "Limit"
                                    })
                                }), Object(I.jsx)(L.a.Item, {
                                    children: Object(I.jsx)(L.a.Link, {
                                        disabled: !0,
                                        className: Cn("nav-link-pill"),
                                        eventKey: "market",
                                        children: "Market"
                                    })
                                }), Object(I.jsx)(L.a.Item, {
                                    children: Object(I.jsx)(L.a.Link, {
                                        disabled: !0,
                                        className: Cn("nav-link-pill"),
                                        eventKey: "stop",
                                        children: "Stop"
                                    })
                                })]
                            }),
                            children: Object(I.jsx)($e.b, {
                                value: g,
                                children: Object(I.jsxs)("form", {
                                    onSubmit: g.handleSubmit,
                                    children: [Object(I.jsxs)(N.a.Content, {
                                        children: [Object(I.jsxs)(N.a.Pane, {
                                            eventKey: "limit",
                                            children: [Object(I.jsxs)(L.a, {
                                                activeKey: a,
                                                variant: "pills",
                                                className: Cn("tab-switcher"),
                                                onSelect: function(e) {
                                                    s(String(e).toLowerCase())
                                                },
                                                children: [Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("green act act-callout"),
                                                        eventKey: "buy",
                                                        onClick: function() {
                                                            return s("buy")
                                                        },
                                                        children: "Buy"
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("red act act-callout"),
                                                        eventKey: "sell",
                                                        onClick: function() {
                                                            return s("sell")
                                                        },
                                                        children: "Sell"
                                                    })
                                                })]
                                            }), Object(I.jsx)(ot, {
                                                name: "price",
                                                label: "Price",
                                                placeholder: "0",
                                                value: g.values.price,
                                                onChange: g.handleChange,
                                                units: t ? t.minor : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsx)(ot, {
                                                name: "amount",
                                                label: "Amount",
                                                placeholder: "0",
                                                value: g.values.amount,
                                                onChange: g.handleChange,
                                                units: t ? t.major : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsxs)("div", {
                                                className: "checkboxes",
                                                children: [Object(I.jsx)(pt, {
                                                    name: "post",
                                                    label: "POST",
                                                    value: g.values.post,
                                                    onChange: g.handleChange
                                                }), Object(I.jsx)(pt, {
                                                    name: "ioc",
                                                    label: "IOC",
                                                    onChange: g.handleChange,
                                                    value: g.values.ioc
                                                })]
                                            })]
                                        }), Object(I.jsxs)(N.a.Pane, {
                                            eventKey: "market",
                                            children: [Object(I.jsxs)(L.a, {
                                                activeKey: a,
                                                variant: "pills",
                                                className: Cn("tab-switcher"),
                                                onSelect: function(e) {
                                                    s(String(e).toLowerCase())
                                                },
                                                children: [Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("green act act-callout"),
                                                        eventKey: "buy",
                                                        onClick: function() {
                                                            return s("buy")
                                                        },
                                                        children: "Buy"
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("red act act-callout"),
                                                        eventKey: "sell",
                                                        onClick: function() {
                                                            return s("sell")
                                                        },
                                                        children: "Sell"
                                                    })
                                                })]
                                            }), Object(I.jsx)(ot, {
                                                name: "price",
                                                label: "Price",
                                                placeholder: "Market",
                                                disabled: !0,
                                                value: void 0,
                                                onChange: g.handleChange,
                                                units: t ? t.minor : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsx)(ot, {
                                                name: "amount",
                                                label: "Amount",
                                                placeholder: "Amount",
                                                value: g.values.amount,
                                                onChange: g.handleChange,
                                                units: t ? t.major : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsxs)("div", {
                                                className: "checkboxes",
                                                children: [Object(I.jsx)(pt, {
                                                    name: "post",
                                                    label: "POST",
                                                    value: g.values.post,
                                                    onChange: g.handleChange
                                                }), Object(I.jsx)(pt, {
                                                    name: "ioc",
                                                    label: "IOC",
                                                    onChange: g.handleChange,
                                                    value: g.values.ioc
                                                })]
                                            })]
                                        }), Object(I.jsxs)(N.a.Pane, {
                                            eventKey: "stop",
                                            children: [Object(I.jsxs)(L.a, {
                                                activeKey: a,
                                                variant: "pills",
                                                className: Cn("tab-switcher"),
                                                onSelect: function(e) {
                                                    s(String(e).toLowerCase())
                                                },
                                                children: [Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("green act act-callout"),
                                                        eventKey: "buy",
                                                        onClick: function() {
                                                            return s("buy")
                                                        },
                                                        children: "Buy"
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: Cn("red act act-callout"),
                                                        eventKey: "sell",
                                                        onClick: function() {
                                                            return s("sell")
                                                        },
                                                        children: "Sell"
                                                    })
                                                })]
                                            }), Object(I.jsx)(ot, {
                                                name: "stop",
                                                label: "Stop",
                                                placeholder: "Market",
                                                disabled: !0,
                                                value: void 0,
                                                onChange: g.handleChange,
                                                units: t ? t.minor : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsx)(ot, {
                                                name: "price",
                                                label: "Limit",
                                                value: g.values.price,
                                                onChange: g.handleChange,
                                                units: t ? t.minor : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsx)(ot, {
                                                name: "amount",
                                                label: "Amount",
                                                placeholder: "Amount",
                                                value: g.values.amount,
                                                onChange: g.handleChange,
                                                units: t ? t.major : Object(I.jsx)(I.Fragment, {
                                                    children: "\u2014"
                                                })
                                            }), Object(I.jsxs)("div", {
                                                className: "checkboxes",
                                                children: [Object(I.jsx)(pt, {
                                                    name: "post",
                                                    label: "POST",
                                                    value: g.values.post,
                                                    onChange: g.handleChange
                                                }), Object(I.jsx)(pt, {
                                                    name: "ioc",
                                                    label: "IOC",
                                                    onChange: g.handleChange,
                                                    value: g.values.ioc
                                                })]
                                            })]
                                        })]
                                    }), r ? Object(I.jsxs)(Qe, {
                                        variant: "primary",
                                        disabled: !Boolean("string" === typeof g.values.price ? parseFloat(g.values.price) : g.values.price) || !Boolean("string" === typeof g.values.amount ? parseFloat(g.values.amount) : g.values.amount) || c,
                                        className: Cn({
                                            "btn-buy": "buy" === a
                                        }, {
                                            "btn-sell": "sell" === a
                                        }),
                                        onClick: function(e) {
                                            return g.handleSubmit()
                                        },
                                        children: ["buy" === a ? "Buy" : "Sell", " ", t ? (0 !== g.values.amount ? g.values.amount : "") + " " + t.major : "-"]
                                    }) : Object(I.jsxs)(Qe, {
                                        variant: "semitransparent",
                                        className: Cn("connect"),
                                        onClick: i,
                                        children: [Object(I.jsx)(bt, {
                                            icon: "connect"
                                        }), "Connect Surf"]
                                    })]
                                })
                            })
                        })
                    })
                },
                Nn = F.a.bind(B.a),
                An = function(e) {
                    var t, n = e.color,
                        r = e.price,
                        a = e.volume,
                        s = e.time;
                    return Object(I.jsxs)("tr", {
                        children: [Object(I.jsx)("td", {
                            className: Nn(n),
                            children: r
                        }), Object(I.jsx)("td", {
                            className: "right",
                            children: a
                        }), Object(I.jsx)("td", {
                            className: "right faded",
                            children: (t = s, jn.a.unix(t).format("HH:mm:ss"))
                        })]
                    })
                },
                Ln = function(e) {
                    var t = e.selectedPair,
                        n = pn(t),
                        r = n.trades,
                        a = n.promiseState;
                    return Object(I.jsx)(Kt, {
                        header: "Recent trades",
                        children: Object(I.jsx)("div", {
                            className: Nn("scrollable-table-container"),
                            children: Object(I.jsxs)(S.a, {
                                children: [Object(I.jsx)("thead", {
                                    children: Object(I.jsxs)("tr", {
                                        children: [Object(I.jsx)("th", {
                                            className: "paragraph paragraph-footnote",
                                            children: t ? Object(I.jsxs)(I.Fragment, {
                                                children: ["Price, ", t.ticker.split("/")[1]]
                                            }) : Object(I.jsx)(Jt, {
                                                wide: "half"
                                            })
                                        }), Object(I.jsx)("th", {
                                            className: "paragraph paragraph-footnote right",
                                            children: t ? Object(I.jsxs)(I.Fragment, {
                                                children: ["Amount, ", t.ticker.split("/")[0]]
                                            }) : Object(I.jsx)(Jt, {
                                                wide: "half"
                                            })
                                        }), Object(I.jsx)("th", {
                                            className: "paragraph paragraph-footnote right",
                                            children: t ? Object(I.jsx)(I.Fragment, {
                                                children: "Time"
                                            }) : Object(I.jsx)(Jt, {
                                                wide: "triplet"
                                            })
                                        })]
                                    })
                                }), r && r.length && a.isSuccess() ? Object(I.jsx)("tbody", {
                                    className: Nn("mono-narrow mono-narrow-note", "trades"),
                                    children: r.filter((function(e) {
                                        return t = e.time, Date.now() / 1e3 - t < 86400;
                                        var t
                                    })).sort((function(e, t) {
                                        return t.time - e.time
                                    })).slice(0, 50).map((function(e, t) {
                                        return Object(I.jsx)(An, {
                                            color: "buy" === e.side.toLowerCase() ? "green" : "red",
                                            price: vn(e.price, fn(e.priceScale)),
                                            volume: vn(e.volume, fn(e.minAmount)),
                                            time: e.time
                                        }, t)
                                    }))
                                }) : Object(I.jsx)("tbody", {
                                    className: Nn("mono-narrow mono-narrow-note", "trades", "trades-loading"),
                                    children: Array(8).fill(null).map((function(e, t) {
                                        return Object(I.jsxs)("tr", {
                                            children: [Object(I.jsx)("td", {
                                                style: {
                                                    width: "100%"
                                                },
                                                children: Object(I.jsx)(Jt, {
                                                    variant: "primary"
                                                })
                                            }), Object(I.jsx)("td", {
                                                className: "right",
                                                children: Object(I.jsx)(Jt, {
                                                    wide: "half"
                                                })
                                            }), Object(I.jsx)("td", {
                                                className: "right",
                                                children: Object(I.jsx)(Jt, {
                                                    wide: "triplet"
                                                })
                                            })]
                                        }, t)
                                    }))
                                })]
                            })
                        })
                    })
                },
                Pn = n(13),
                Bn = n(163),
                Mn = n.n(Bn);

            function Fn(e, t) {
                var n = Object.assign({}, e);
                for (var r in t) "object" != typeof e[r] || null === e[r] || Array.isArray(e[r]) ? void 0 !== t[r] && (n[r] = t[r]) : n[r] = Fn(e[r], t[r]);
                return n
            }
            var En = {
                    mobile: {
                        disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"],
                        enabled_features: []
                    }
                },
                In = {
                    width: 800,
                    height: 500,
                    interval: "1D",
                    timezone: "Etc/UTC",
                    container: "",
                    library_path: "",
                    locale: "en",
                    widgetbar: {
                        details: !1,
                        watchlist: !1,
                        watchlist_settings: {
                            default_symbols: []
                        }
                    },
                    overrides: {
                        "mainSeriesProperties.showCountdown": !1
                    },
                    studies_overrides: {},
                    trading_customization: {
                        position: {},
                        order: {}
                    },
                    brokerConfig: {
                        configFlags: {}
                    },
                    fullscreen: !1,
                    autosize: !1,
                    disabled_features: [],
                    enabled_features: [],
                    debug: !1,
                    logo: {},
                    time_frames: [{
                        text: "5y",
                        resolution: "1W"
                    }, {
                        text: "1y",
                        resolution: "1W"
                    }, {
                        text: "6m",
                        resolution: "120"
                    }, {
                        text: "3m",
                        resolution: "60"
                    }, {
                        text: "1m",
                        resolution: "30"
                    }, {
                        text: "5d",
                        resolution: "5"
                    }, {
                        text: "1d",
                        resolution: "1"
                    }],
                    client_id: "0",
                    user_id: "0",
                    charts_storage_api_version: "1.0",
                    favorites: {
                        intervals: [],
                        chartTypes: []
                    }
                };
            var Tn = function() {
                function e(t) {
                    if (Object(tn.a)(this, e), this._id = "tradingview_".concat((1048576 * (1 + Math.random()) | 0).toString(16).substring(1)), this._ready = !1, this._readyHandlers = [], this._onWindowResize = this._autoResizeChart.bind(this), !t.datafeed) throw new Error("Datafeed is not defined");
                    if (this._options = Fn(In, t), t.preset) {
                        var n = En[t.preset];
                        n ? (void 0 !== this._options.disabled_features ? this._options.disabled_features = this._options.disabled_features.concat(n.disabled_features) : this._options.disabled_features = n.disabled_features, void 0 !== this._options.enabled_features ? this._options.enabled_features = this._options.enabled_features.concat(n.enabled_features) : this._options.enabled_features = n.enabled_features) : console.warn("Unknown preset: `" + t.preset + "`")
                    }
                    "Dark" === this._options.theme && void 0 === this._options.loading_screen && (this._options.loading_screen = {
                        backgroundColor: "#131722"
                    }), this._create()
                }
                return Object(nn.a)(e, [{
                    key: "onChartReady",
                    value: function(e) {
                        this._ready ? e.call(this) : this._readyHandlers.push(e)
                    }
                }, {
                    key: "headerReady",
                    value: function() {
                        var e = this;
                        return this._innerWindowLoaded.then((function() {
                            return e._innerWindow().headerReady()
                        }))
                    }
                }, {
                    key: "onGrayedObjectClicked",
                    value: function(e) {
                        this._innerAPI().onGrayedObjectClicked(e)
                    }
                }, {
                    key: "onShortcut",
                    value: function(e, t) {
                        this._innerWindow().createShortcutAction(e, t)
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t) {
                        this._innerAPI().subscribe(e, t)
                    }
                }, {
                    key: "unsubscribe",
                    value: function(e, t) {
                        this._innerAPI().unsubscribe(e, t)
                    }
                }, {
                    key: "chart",
                    value: function(e) {
                        return this._innerAPI().chart(e)
                    }
                }, {
                    key: "getLanguage",
                    value: function() {
                        return this._options.locale
                    }
                }, {
                    key: "setSymbol",
                    value: function(e, t, n) {
                        this._innerAPI().changeSymbol(e, t, n)
                    }
                }, {
                    key: "remove",
                    value: function() {
                        window.removeEventListener("resize", this._onWindowResize), this._readyHandlers.splice(0, this._readyHandlers.length), delete window[this._id], this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame)
                    }
                }, {
                    key: "closePopupsAndDialogs",
                    value: function() {
                        this._innerAPI().closePopupsAndDialogs()
                    }
                }, {
                    key: "selectLineTool",
                    value: function(e) {
                        this._innerAPI().selectLineTool(e)
                    }
                }, {
                    key: "selectedLineTool",
                    value: function() {
                        return this._innerAPI().selectedLineTool()
                    }
                }, {
                    key: "save",
                    value: function(e) {
                        this._innerAPI().saveChart(e)
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        this._innerAPI().loadChart({
                            json: e,
                            extendedData: t
                        })
                    }
                }, {
                    key: "getSavedCharts",
                    value: function(e) {
                        this._innerAPI().getSavedCharts(e)
                    }
                }, {
                    key: "loadChartFromServer",
                    value: function(e) {
                        this._innerAPI().loadChartFromServer(e)
                    }
                }, {
                    key: "saveChartToServer",
                    value: function(e, t, n) {
                        this._innerAPI().saveChartToServer(e, t, n)
                    }
                }, {
                    key: "removeChartFromServer",
                    value: function(e, t) {
                        this._innerAPI().removeChartFromServer(e, t)
                    }
                }, {
                    key: "onContextMenu",
                    value: function(e) {
                        this._innerAPI().onContextMenu(e)
                    }
                }, {
                    key: "createButton",
                    value: function(e) {
                        return this._innerWindow().createButton(e)
                    }
                }, {
                    key: "showNoticeDialog",
                    value: function(e) {
                        this._innerAPI().showNoticeDialog(e)
                    }
                }, {
                    key: "showConfirmDialog",
                    value: function(e) {
                        this._innerAPI().showConfirmDialog(e)
                    }
                }, {
                    key: "showLoadChartDialog",
                    value: function() {
                        this._innerAPI().showLoadChartDialog()
                    }
                }, {
                    key: "showSaveAsChartDialog",
                    value: function() {
                        this._innerAPI().showSaveAsChartDialog()
                    }
                }, {
                    key: "symbolInterval",
                    value: function() {
                        return this._innerAPI().getSymbolInterval()
                    }
                }, {
                    key: "mainSeriesPriceFormatter",
                    value: function() {
                        return this._innerAPI().mainSeriesPriceFormatter()
                    }
                }, {
                    key: "getIntervals",
                    value: function() {
                        return this._innerAPI().getIntervals()
                    }
                }, {
                    key: "getStudiesList",
                    value: function() {
                        return this._innerAPI().getStudiesList()
                    }
                }, {
                    key: "addCustomCSSFile",
                    value: function(e) {
                        this._innerWindow().addCustomCSSFile(e)
                    }
                }, {
                    key: "applyOverrides",
                    value: function(e) {
                        this._options = Fn(this._options, {
                            overrides: e
                        }), this._innerWindow().applyOverrides(e)
                    }
                }, {
                    key: "applyStudiesOverrides",
                    value: function(e) {
                        this._innerWindow().applyStudiesOverrides(e)
                    }
                }, {
                    key: "watchList",
                    value: function() {
                        return this._innerAPI().watchlist()
                    }
                }, {
                    key: "activeChart",
                    value: function() {
                        return this._innerAPI().activeChart()
                    }
                }, {
                    key: "chartsCount",
                    value: function() {
                        return this._innerAPI().chartsCount()
                    }
                }, {
                    key: "layout",
                    value: function() {
                        return this._innerAPI().layout()
                    }
                }, {
                    key: "setLayout",
                    value: function(e) {
                        this._innerAPI().setLayout(e)
                    }
                }, {
                    key: "layoutName",
                    value: function() {
                        return this._innerAPI().layoutName()
                    }
                }, {
                    key: "changeTheme",
                    value: function(e, t) {
                        this._innerWindow().changeTheme(e, t)
                    }
                }, {
                    key: "getTheme",
                    value: function() {
                        return this._innerWindow().getTheme()
                    }
                }, {
                    key: "takeScreenshot",
                    value: function() {
                        this._innerAPI().takeScreenshot()
                    }
                }, {
                    key: "lockAllDrawingTools",
                    value: function() {
                        return this._innerAPI().lockAllDrawingTools()
                    }
                }, {
                    key: "hideAllDrawingTools",
                    value: function() {
                        return this._innerAPI().hideAllDrawingTools()
                    }
                }, {
                    key: "drawOnAllCharts",
                    value: function(e) {
                        this._innerAPI().drawOnAllCharts(e)
                    }
                }, {
                    key: "magnetEnabled",
                    value: function() {
                        return this._innerAPI().magnetEnabled()
                    }
                }, {
                    key: "magnetMode",
                    value: function() {
                        return this._innerAPI().magnetMode()
                    }
                }, {
                    key: "undoRedoState",
                    value: function() {
                        return this._innerAPI().undoRedoState()
                    }
                }, {
                    key: "setIntervalLinkingEnabled",
                    value: function(e) {
                        this._innerAPI().setIntervalLinkingEnabled(e)
                    }
                }, {
                    key: "setTimeFrame",
                    value: function(e) {
                        this._innerAPI().setTimeFrame(e)
                    }
                }, {
                    key: "symbolSync",
                    value: function() {
                        return this._innerAPI().symbolSync()
                    }
                }, {
                    key: "intervalSync",
                    value: function() {
                        return this._innerAPI().intervalSync()
                    }
                }, {
                    key: "crosshairSync",
                    value: function() {
                        return this._innerAPI().crosshairSync()
                    }
                }, {
                    key: "timeSync",
                    value: function() {
                        return this._innerAPI().timeSync()
                    }
                }, {
                    key: "getAllFeatures",
                    value: function() {
                        return this._innerWindow().getAllFeatures()
                    }
                }, {
                    key: "clearUndoHistory",
                    value: function() {
                        return this._innerAPI().clearUndoHistory()
                    }
                }, {
                    key: "undo",
                    value: function() {
                        return this._innerAPI().undo()
                    }
                }, {
                    key: "redo",
                    value: function() {
                        return this._innerAPI().redo()
                    }
                }, {
                    key: "startFullscreen",
                    value: function() {
                        this._innerAPI().startFullscreen()
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        this._innerAPI().exitFullscreen()
                    }
                }, {
                    key: "takeClientScreenshot",
                    value: function(e) {
                        return this._innerAPI().takeClientScreenshot(e)
                    }
                }, {
                    key: "_innerAPI",
                    value: function() {
                        return this._innerWindow().tradingViewApi
                    }
                }, {
                    key: "_innerWindow",
                    value: function() {
                        return this._iFrame.contentWindow
                    }
                }, {
                    key: "_autoResizeChart",
                    value: function() {
                        this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px")
                    }
                }, {
                    key: "_create",
                    value: function() {
                        var e = this,
                            t = this._render();
                        this._options.container_id && console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");
                        var n = this._options.container_id || this._options.container,
                            r = "string" == typeof n ? document.getElementById(n) : n;
                        if (null === r) throw new Error("There is no such element - #".concat(this._options.container));
                        r.innerHTML = t, this._iFrame = r.querySelector("#".concat(this._id));
                        var a = this._iFrame;
                        (this._options.autosize || this._options.fullscreen) && (a.style.width = "100%", this._options.fullscreen || (a.style.height = "100%")), window.addEventListener("resize", this._onWindowResize), this._onWindowResize(), this._innerWindowLoaded = new Promise((function(e) {
                            a.addEventListener("load", (function t() {
                                a.removeEventListener("load", t, !1), e()
                            }), !1)
                        })), this._innerWindowLoaded.then((function() {
                            e._innerWindow().widgetReady((function() {
                                e._ready = !0;
                                var n, r = Object(Pn.a)(e._readyHandlers);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var a = n.value;
                                        try {
                                            a.call(e)
                                        } catch (t) {
                                            console.error(t)
                                        }
                                    }
                                } catch (s) {
                                    r.e(s)
                                } finally {
                                    r.f()
                                }
                                e._innerWindow().initializationFinished()
                            }))
                        }))
                    }
                }, {
                    key: "_render",
                    value: function() {
                        var e = window;
                        if (e[this._id] = {
                                datafeed: this._options.datafeed,
                                customFormatters: this._options.custom_formatters || this._options.customFormatters,
                                brokerFactory: this._options.broker_factory || this._options.brokerFactory,
                                overrides: this._options.overrides,
                                studiesOverrides: this._options.studies_overrides,
                                tradingCustomization: this._options.trading_customization,
                                disabledFeatures: this._options.disabled_features,
                                enabledFeatures: this._options.enabled_features,
                                brokerConfig: this._options.broker_config || this._options.brokerConfig,
                                restConfig: this._options.restConfig,
                                favorites: this._options.favorites,
                                logo: this._options.logo,
                                numeric_formatting: this._options.numeric_formatting,
                                rss_news_feed: this._options.rss_news_feed,
                                newsProvider: this._options.news_provider,
                                loadLastChart: this._options.load_last_chart,
                                saveLoadAdapter: this._options.save_load_adapter,
                                loading_screen: this._options.loading_screen,
                                settingsAdapter: this._options.settings_adapter,
                                getCustomIndicators: this._options.custom_indicators_getter,
                                additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
                                headerWidgetButtonsMode: this._options.header_widget_buttons_mode
                            }, this._options.saved_data) e[this._id].chartContent = {
                            json: this._options.saved_data
                        }, this._options.saved_data_meta_info && (e[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
                        else if (!this._options.load_last_chart && !this._options.symbol) throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
                        var t = (this._options.library_path || "") + "".concat(encodeURIComponent(this._options.locale), "-tv-chart.9df149da.html#symbol=") + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
                        return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + t + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
                    }
                }]), e
            }();
            window.TradingView = window.TradingView || {}, window.TradingView.version = function() {
                return "CL v20.033 (internal id 9df149da @ 2021-11-17T10:20:51.511Z)"
            };
            var Hn = {
                    supports_marks: !1,
                    supports_timescale_marks: !1,
                    supports_time: !0,
                    supported_resolutions: ["1", "5", "60", "1440"],
                    exchanges: [{
                        value: "Flex",
                        name: "Flex",
                        desc: "FLash EXchange"
                    }],
                    symbols_types: [{
                        name: "crypto",
                        value: "crypto"
                    }]
                },
                zn = function() {
                    var e = Object(p.a)(f.a.mark((function e(t, n, r, a, s) {
                        var i, c, o, l, u, d, h, p;
                        return f.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = r.from, c = r.countBack, o = r.to, l = r.firstDataRequest, e.next = 3, ze.flexPriceHistory(t.name, n, i, c, o, l);
                                case 3:
                                    if (u = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return s("flexPriceHistory error"), e.abrupt("return");
                                case 7:
                                    if (d = u.prices, h = u.nextTime, d.forEach((function(e) {
                                            e.time = 1e3 * e.time, e.closeTime = e.time + 60 * n * 1e3
                                        })), d.sort((function(e, t) {
                                            return e.time < t.time ? -1 : e.time > t.time ? 1 : 0
                                        })), 0 != d.length) {
                                        e.next = 16;
                                        break
                                    }
                                    return a && a([], {
                                        noData: !0,
                                        nextTime: h
                                    }), e.abrupt("return", []);
                                case 16:
                                    return a && a(d, {
                                        noData: !1
                                    }), p = d[d.length - 1], window.subscriptions || (window.subscriptions = {}), window.subscriptions["".concat(t.name, "-").concat(n)] || (window.subscriptions["".concat(t.name, "-").concat(n)] = {
                                        lastBar: p
                                    }), p.time > window.subscriptions["".concat(t.name, "-").concat(n)].lastBar.time && (window.subscriptions["".concat(t.name, "-").concat(n)].lastBar = p), e.abrupt("return", d);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r, a, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                Rn = function() {
                    var e = Object(p.a)(f.a.mark((function e(t, n) {
                        var r, a;
                        return f.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, zn(t, n, {
                                        countBack: 1,
                                        firstDataRequest: !0
                                    });
                                case 2:
                                    if (!(r = e.sent).length) {
                                        e.next = 6;
                                        break
                                    }
                                    return a = r[r.length - 1], e.abrupt("return", a);
                                case 6:
                                    return e.abrupt("return", null);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Dn = {
                    configurationData: Hn,
                    onReady: function(e) {
                        console.log("[onReady]: Method call"), setTimeout((function() {
                            return e(Hn)
                        }))
                    },
                    searchSymbols: function() {
                        var e = Object(p.a)(f.a.mark((function e(t, n, r, a) {
                            var s, i;
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("[searchSymbols]", {
                                            userInput: t,
                                            exchange: n,
                                            symbolType: r
                                        }), e.next = 3, ze.flexPairs();
                                    case 3:
                                        s = e.sent, i = (i = s.filter((function(e) {
                                            return e.address.toLowerCase().includes(t.toLowerCase()) || e.ticker.toLowerCase().includes(t.toLowerCase()) || ze.getSymbolName(e).toLowerCase().includes(t.toLowerCase()) || ze.getSymbolDescription(e).toLowerCase().includes(t.toLowerCase())
                                        }))).map((function(e) {
                                            return {
                                                symbol: ze.getSymbolName(e),
                                                full_name: ze.getSymbolName(e),
                                                description: ze.getSymbolDescription(e),
                                                exchange: "Flex",
                                                type: "crypto"
                                            }
                                        })), a(i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r, a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    resolveSymbol: function() {
                        var e = Object(p.a)(f.a.mark((function e(t, n, r) {
                            var a;
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return console.log("[resolveSymbol]", {
                                            symbolName: t
                                        }), e.next = 3, ze.flexPairByTicker(t);
                                    case 3:
                                        (a = e.sent) && n({
                                            name: ze.getSymbolName(a),
                                            description: ze.getSymbolDescription(a),
                                            minmov: a.minMove,
                                            pricescale: a.priceScale,
                                            has_intraday: !0,
                                            has_daily: !0,
                                            has_weekly_and_monthly: !0,
                                            exchange: "Flex",
                                            listed_exchange: "Flex",
                                            type: "crypto",
                                            session: "24x7",
                                            timezone: "Etc/UTC"
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getBars: zn,
                    getLastBar: Rn,
                    subscribeBars: function(e, t, n, r, a) {
                        console.log("[subscribeBars]", {
                            symbolInfo: e,
                            interval: t,
                            subscribeUID: r
                        }), ze.subscribeBars(e.name, t, n, r)
                    },
                    unsubscribeBars: function(e) {
                        console.log("[unsubscribeBars]: Method call with subscribeUID:", e), ze.unsubscribe(e)
                    },
                    getServerTime: function() {
                        var e = Object(p.a)(f.a.mark((function e(t) {
                            var n;
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ze.flexTime();
                                    case 2:
                                        (n = e.sent) ? t(n / 1e3): console.error("flexTime error");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Vn = Dn,
                Un = new Set(["Etc/UTC", "Africa/Cairo", "Africa/Johannesburg", "Africa/Lagos", "America/Argentina/Buenos_Aires", "America/Bogota", "America/Caracas", "America/Chicago", "America/El_Salvador", "America/Juneau", "America/Lima", "America/Los_Angeles", "America/Mexico_City", "America/New_York", "America/Phoenix", "America/Santiago", "America/Sao_Paulo", "America/Toronto", "America/Vancouver", "Asia/Almaty", "Asia/Ashkhabad", "Asia/Bahrain", "Asia/Bangkok", "Asia/Chongqing", "Asia/Dubai", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Jakarta", "Asia/Jerusalem", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Kuwait", "Asia/Muscat", "Asia/Qatar", "Asia/Riyadh", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tehran", "Asia/Tokyo", "Atlantic/Reykjavik", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Perth", "Australia/Sydney", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Copenhagen", "Europe/Helsinki", "Europe/Istanbul", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Riga", "Europe/Rome", "Europe/Stockholm", "Europe/Tallinn", "Europe/Vilnius", "Europe/Warsaw", "Europe/Zurich", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Fakaofo", "Pacific/Honolulu", "Pacific/Norfolk", "US/Mountain"]);

            function Wn() {
                var e, t = Mn.a.tz.guess(),
                    n = Mn.a.tz(t).format("z"),
                    r = Mn.a.tz.names(),
                    a = new Map,
                    s = Object(Pn.a)(r);
                try {
                    for (s.s(); !(e = s.n()).done;) {
                        var i = e.value,
                            c = Mn.a.tz(i).format("z");
                        a.has(c) || a.set(c, new Set), a.get(c).add(i)
                    }
                } catch (p) {
                    s.e(p)
                } finally {
                    s.f()
                }
                var o, l = a.get(n),
                    u = "Etc/UTC",
                    d = Object(Pn.a)(l);
                try {
                    for (d.s(); !(o = d.n()).done;) {
                        var h = o.value;
                        if (Un.has(h)) {
                            u = h;
                            break
                        }
                    }
                } catch (p) {
                    d.e(p)
                } finally {
                    d.f()
                }
                return u
            }

            function Kn() {
                var e = new RegExp("[\\?&]lang=([^&#]*)").exec(window.location.search);
                return null === e ? null : decodeURIComponent(e[1].replace(/\+/g, " "))
            }
            var qn = function(e) {
                Object(rn.a)(n, e);
                var t = Object(an.a)(n);

                function n() {
                    var e;
                    return Object(tn.a)(this, n), (e = t.call(this)).tvWidget = null, e.state = {
                        chartReady: !1,
                        waitForChartReady: !1
                    }, e
                }
                return Object(nn.a)(n, [{
                    key: "injectCss",
                    value: function() {
                        if (!this.iframe) {
                            var e = document.getElementsByTagName("iframe");
                            if (e.length) {
                                this.iframe = e[0];
                                var t = document.createElement("style");
                                t.textContent = ".chart-page, .group-3uonVBsm  {\t\tbackground: #20262A !important;}html.theme-dark .dialog-UM6w7sFp {\t\tbackground: #1C2125 !important;}", this.iframe.contentDocument.head.appendChild(t)
                            }
                        }
                    }
                }, {
                    key: "initWidget",
                    value: function() {
                        var e = Object(p.a)(f.a.mark((function e() {
                            var t, n, r = this;
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = {
                                            symbol: ze.getSymbolName(this.props.pair),
                                            datafeed: Vn,
                                            interval: this.props.interval,
                                            container: this.props.containerId,
                                            library_path: this.props.libraryPath,
                                            locale: Kn() || "en",
                                            disabled_features: ["use_localstorage_for_settings"],
                                            fullscreen: this.props.fullscreen,
                                            autosize: this.props.autosize,
                                            studies_overrides: this.props.studiesOverrides,
                                            theme: "Dark",
                                            overrides: {
                                                timezone: Wn(),
                                                "paneProperties.background": "#20262A",
                                                "paneProperties.backgroundType": "solid",
                                                "mainSeriesProperties.candleStyle.upColor": "#2FA851",
                                                "mainSeriesProperties.candleStyle.downColor": "#CA1414",
                                                "mainSeriesProperties.candleStyle.drawBorder": !1,
                                                "mainSeriesProperties.candleStyle.wickUpColor": "#2FA851",
                                                "mainSeriesProperties.candleStyle.wickDownColor": "#CA1414",
                                                "mainSeriesProperties.hollowCandleStyle.upColor": "#2FA851",
                                                "mainSeriesProperties.hollowCandleStyle.downColor": "#CA1414",
                                                "mainSeriesProperties.hollowCandleStyle.drawBorder": !1,
                                                "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#2FA851",
                                                "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#CA1414",
                                                "mainSeriesProperties.haStyle.upColor": "#2FA851",
                                                "mainSeriesProperties.haStyle.downColor": "#CA1414",
                                                "mainSeriesProperties.haStyle.drawBorder": !1,
                                                "mainSeriesProperties.haStyle.wickUpColor": "#2FA851",
                                                "mainSeriesProperties.haStyle.wickDownColor": "#CA1414",
                                                "mainSeriesProperties.barStyle.upColor": "#2FA851",
                                                "mainSeriesProperties.barStyle.downColor": "#CA1414"
                                            },
                                            enabled_features: ["hide_left_toolbar_by_default"],
                                            toolbar_bg: "#20262A"
                                        }, n = new Tn(t), this.tvWidget = n, n.onChartReady((function() {
                                            r.injectCss(), r.state.waitForChartReady && (r.tvWidget.setSymbol(ze.getSymbolName(r.props.pair), r.props.interval, (function() {})), r.setState({
                                                waitForChartReady: !1
                                            })), r.setState({
                                                chartReady: !0
                                            })
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.tvWidget && this.state.chartReady || this.initWidget()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        null !== this.tvWidget && (this.tvWidget.remove(), this.tvWidget = null)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.pair && e.pair.address !== this.props.pair.address && (this.state.chartReady ? this.tvWidget.setSymbol(ze.getSymbolName(this.props.pair), this.props.interval, (function() {})) : this.setState({
                            waitForChartReady: !0
                        }))
                    }
                }, {
                    key: "renderLoading",
                    value: function() {
                        return Object(I.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#20262A",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                color: "#FDFDFD"
                            },
                            children: "Loading..."
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(I.jsxs)("div", {
                            style: {
                                position: "relative"
                            },
                            children: [Object(I.jsx)("div", {
                                id: this.props.containerId,
                                style: {
                                    height: this.props.height || window.innerHeight - 42
                                }
                            }), !this.state.chartReady && this.renderLoading()]
                        })
                    }
                }]), n
            }(l.PureComponent);
            qn.defaultProps = {
                pair: {
                    ticker: "",
                    address: ""
                },
                interval: "5",
                containerId: "tv_chart_container",
                libraryPath: "/charting_library/",
                fullscreen: !1,
                autosize: !0,
                studiesOverrides: {}
            };
            var Zn = n(413),
                Gn = function(e, t) {
                    return e.price - t.price
                },
                Jn = "#20262a",
                Yn = "orderbook_graph_subscription",
                Xn = function(e) {
                    Object(rn.a)(n, e);
                    var t = Object(an.a)(n);

                    function n() {
                        var e;
                        return Object(tn.a)(this, n), (e = t.call(this)).processNewOrderbook = function(t) {
                            t.bids.sort(Gn), t.asks.sort(Gn);
                            var n = e.calculateOptimalZoom(t);
                            e.setState({
                                data: t,
                                zoom: n
                            }, (function() {
                                return e.initWidget()
                            }))
                        }, e.depthChart = null, e.state = {
                            chartReady: !1,
                            waitForChartReady: !1,
                            data: null,
                            zoom: 50,
                            lastBar: null,
                            scaleWidth: 0
                        }, e
                    }
                    return Object(nn.a)(n, [{
                        key: "calculateOptimalZoom",
                        value: function(e) {
                            for (var t = this.state.zoom, n = 1; n <= 100; ++n) {
                                t = n;
                                var r = this.getLabels(e, n),
                                    a = this.getValues(r, "bid", e),
                                    s = this.getValues(r, "ask", e);
                                if (a.concat(s).filter((function(e) {
                                        return !!e
                                    })).length >= 800) break
                            }
                            return t
                        }
                    }, {
                        key: "pullFlexData",
                        value: function() {
                            var e = Object(p.a)(f.a.mark((function e() {
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ze.unsubscribe(Yn);
                                        case 2:
                                            ze.subscribeOrderbook(this.props.pair.address, Yn, this.processNewOrderbook);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBestBid",
                        value: function(e) {
                            return e.bids.length ? e.bids[e.bids.length - 1].price : null
                        }
                    }, {
                        key: "getBestAsk",
                        value: function(e) {
                            return e.asks.length ? e.asks[0].price : null
                        }
                    }, {
                        key: "getMiddlePoint",
                        value: function(e) {
                            if (e) {
                                var t = this.getBestBid(e),
                                    n = this.getBestAsk(e);
                                return t && n ? (t + n) / 2 : t || n || void 0
                            }
                        }
                    }, {
                        key: "getLabels",
                        value: function(e, t) {
                            if (!e) return [];
                            var n = this.getMiddlePoint(e);
                            if (!n) return [];
                            for (var r = n - n * (t /= 100), a = n + n * t, s = [], i = 2 * t / 1e3, c = 0; n - n * c >= r; c += i) s.push(n - n * c);
                            for (var o = i; n + n * o <= a; o += i) s.push(n + n * o);
                            return s.sort((function(e, t) {
                                return e - t
                            })), s
                        }
                    }, {
                        key: "getValues",
                        value: function(e, t, n) {
                            var r = this;
                            if ("middle" === t) return e.map((function(e) {
                                if (e === r.getMiddlePoint(n)) return 100
                            }));
                            var a = "bid" == t ? n.bids : n.asks;
                            return e.map((function(e) {
                                var n = a.filter((function(n) {
                                    return "bid" == t ? n.price >= e : n.price <= e
                                }));
                                if (n.length) return n.map((function(e) {
                                    return e.amount
                                })).reduce((function(e, t) {
                                    return e + t
                                }))
                            }))
                        }
                    }, {
                        key: "initWidget",
                        value: function() {
                            var e = Object(p.a)(f.a.mark((function e() {
                                var t, n = this;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.depthChart) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.depthChart.data.labels = this.getLabels(this.state.data, this.state.zoom).map((function(e) {
                                                return e.toFixed(2)
                                            })), this.depthChart.data.datasets[0].data = this.getValues(this.getLabels(this.state.data, this.state.zoom), "bid", this.state.data), this.depthChart.data.datasets[1].data = this.getValues(this.getLabels(this.state.data, this.state.zoom), "ask", this.state.data), this.depthChart.options.scales.y2.position.x = this.getMiddlePoint(this.state.data) ? this.getMiddlePoint(this.state.data).toFixed(2) : null, this.depthChart.update(), e.abrupt("return");
                                        case 7:
                                            t = document.getElementById("myChart"), this.depthChart = new Zn.a(t, {
                                                type: "line",
                                                data: {
                                                    labels: this.getLabels(this.state.data, this.state.zoom).map((function(e) {
                                                        return e.toFixed(2)
                                                    })),
                                                    datasets: [{
                                                        label: "Bids",
                                                        data: this.getValues(this.getLabels(this.state.data, this.state.zoom), "bid", this.state.data),
                                                        backgroundColor: "rgba(31, 96, 28, 0.7)",
                                                        borderColor: "rgba(31, 96, 28, 1)",
                                                        stepped: !0,
                                                        fill: !0,
                                                        pointRadius: 0
                                                    }, {
                                                        label: "Asks",
                                                        data: this.getValues(this.getLabels(this.state.data, this.state.zoom), "ask", this.state.data),
                                                        backgroundColor: "rgba(88, 25, 34, 0.7)",
                                                        borderColor: "rgba(88, 25, 34, 1)",
                                                        stepped: !0,
                                                        fill: !0,
                                                        pointRadius: 0
                                                    }]
                                                },
                                                options: {
                                                    responsive: !0,
                                                    maintainAspectRatio: !1,
                                                    interaction: {
                                                        intersect: !1,
                                                        axis: "x"
                                                    },
                                                    plugins: {
                                                        tooltip: {
                                                            callbacks: {
                                                                footer: function(e) {
                                                                    var t = 0,
                                                                        r = n.getMiddlePoint(n.state.data);
                                                                    if (r) {
                                                                        e.forEach((function(e) {
                                                                            t = 1 * e.label
                                                                        }));
                                                                        var a = (t - r) / r * 100;
                                                                        return "".concat(a > 0 ? "+" : "").concat(a.toFixed(0), "%")
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        legend: {
                                                            display: !1
                                                        }
                                                    },
                                                    scales: {
                                                        x: {
                                                            ticks: {
                                                                autoSkip: !0,
                                                                maxTicksLimit: 20,
                                                                maxRotation: 0
                                                            }
                                                        },
                                                        y: {
                                                            type: "linear",
                                                            position: "left",
                                                            afterFit: function(e) {
                                                                n.setState({
                                                                    scaleWidth: e.width
                                                                })
                                                            }
                                                        },
                                                        y2: {
                                                            type: "category",
                                                            labels: [""],
                                                            position: {
                                                                x: this.getMiddlePoint(this.state.data) ? this.getMiddlePoint(this.state.data).toFixed(2) : null
                                                            },
                                                            grid: {
                                                                borderColor: "#fff"
                                                            }
                                                        }
                                                    }
                                                },
                                                plugins: [{
                                                    beforeDraw: function(e, t, n) {
                                                        var r = e.ctx;
                                                        r.fillStyle = Jn, r.fillRect(0, 0, e.width, e.height)
                                                    }
                                                }]
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.pullFlexData()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            null !== this.depthChart && (this.depthChart.destroy(), this.depthChart = null), ze.unsubscribe(Yn)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.props.pair && e.pair.address !== this.props.pair.address && this.pullFlexData()
                        }
                    }, {
                        key: "updateZoomIn",
                        value: function() {
                            this.updateZoom(!0)
                        }
                    }, {
                        key: "updateZoomOut",
                        value: function() {
                            this.updateZoom(!1)
                        }
                    }, {
                        key: "updateZoom",
                        value: function(e) {
                            var t = this,
                                n = this.state.zoom;
                            n = e ? n > 1 ? n - 1 : 1 : n < 100 ? n + 5 : 100, this.setState({
                                zoom: n
                            }, (function() {
                                return t.initWidget()
                            }))
                        }
                    }, {
                        key: "renderMP",
                        value: function() {
                            var e = this,
                                t = this.getMiddlePoint(this.state.data);
                            if (!t) return null;
                            var n = {
                                backgroundColor: Jn,
                                borderColor: "#8d8a8a",
                                borderWidth: 0,
                                color: "white",
                                width: 20,
                                height: 23,
                                fontSize: 18,
                                borderRadius: 4,
                                cursor: "pointer",
                                padding: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                caretColor: "transparent"
                            };
                            return Object(I.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: Object(I.jsxs)("div", {
                                    style: {
                                        marginLeft: this.state.scaleWidth,
                                        backgroundColor: Jn,
                                        padding: 16
                                    },
                                    children: [Object(I.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        },
                                        children: [Object(I.jsx)("div", {
                                            onClick: function() {
                                                return e.updateZoomOut()
                                            },
                                            style: n,
                                            children: "-"
                                        }, "depth-button-zoom-out"), Object(I.jsx)("div", {
                                            style: {
                                                marginLeft: 8,
                                                marginRight: 8,
                                                textAlign: "center",
                                                fontSize: 18
                                            },
                                            children: "".concat(t.toFixed(2))
                                        }), Object(I.jsx)("div", {
                                            onClick: function() {
                                                return e.updateZoomIn()
                                            },
                                            style: n,
                                            children: "+"
                                        }, "depth-button-zoom-in"), !1]
                                    }), Object(I.jsx)("div", {
                                        style: {
                                            fontSize: 10,
                                            backgroundColor: Jn,
                                            textAlign: "center"
                                        },
                                        children: "Mid Market Price"
                                    })]
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(I.jsxs)("div", {
                                style: {
                                    backgroundColor: Jn,
                                    color: "#fff",
                                    width: "100%",
                                    height: this.props.height,
                                    position: "relative"
                                },
                                children: [Object(I.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        height: this.props.height
                                    },
                                    children: Object(I.jsx)("canvas", {
                                        id: "myChart",
                                        height: "400",
                                        width: "400"
                                    })
                                }), Object(I.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 8,
                                        width: "100%"
                                    },
                                    children: this.renderMP()
                                })]
                            })
                        }
                    }]), n
                }(l.PureComponent);
            Xn.defaultProps = {
                pair: {
                    ticker: "",
                    address: ""
                },
                height: 400
            };
            var Qn = "#20262a",
                $n = function(e) {
                    Object(rn.a)(n, e);
                    var t = Object(an.a)(n);

                    function n(e) {
                        var r;
                        return Object(tn.a)(this, n), (r = t.call(this, e)).state = {
                            depth: !1,
                            endPointSet: !1
                        }, r
                    }
                    return Object(nn.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.endpoint && ze.setEndpoint(this.props.endpoint), this.setState({
                                endPointSet: !0
                            })
                        }
                    }, {
                        key: "renderSwitcher",
                        value: function() {
                            var e = this,
                                t = {
                                    fontSize: 15,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    paddingLeft: 12,
                                    paddingRight: 12,
                                    lineHeight: "16px",
                                    letterSpacing: -.13
                                },
                                n = Object(v.a)(Object(v.a)({}, t), {}, {
                                    color: "#676B6E",
                                    fontWeight: 500,
                                    cursor: "pointer"
                                }),
                                r = Object(v.a)(Object(v.a)({}, t), {}, {
                                    color: "#FDFDFD",
                                    fontWeight: 500
                                });
                            return Object(I.jsx)("div", {
                                style: {
                                    height: 36
                                },
                                children: Object(I.jsxs)("div", {
                                    style: Object(v.a)({}, {
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 0
                                    }),
                                    children: [Object(I.jsx)("div", {
                                        onClick: function() {
                                            return e.setState({
                                                depth: !1
                                            })
                                        },
                                        style: this.state.depth ? Object(v.a)(Object(v.a)({}, n), {}, {
                                            padding: "4px 12px 4px 0"
                                        }) : Object(v.a)(Object(v.a)({}, r), {}, {
                                            padding: "4px 12px 4px 0"
                                        }),
                                        children: "Trading View"
                                    }), Object(I.jsx)("div", {
                                        onClick: function() {
                                            return e.setState({
                                                depth: !0
                                            })
                                        },
                                        style: this.state.depth ? r : n,
                                        children: "Depth"
                                    })]
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.endPointSet ? Object(I.jsxs)("div", {
                                style: {
                                    backgroundColor: Qn,
                                    position: "relative"
                                },
                                children: [this.renderSwitcher(), Object(I.jsx)(qn, {
                                    pair: this.props.pair,
                                    height: this.props.height - 36
                                }), this.state.depth && Object(I.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 36,
                                        left: 0,
                                        width: "100%",
                                        height: this.props.height - 36
                                    },
                                    children: Object(I.jsx)(Xn, {
                                        pair: this.props.pair,
                                        height: this.props.height - 36
                                    })
                                })]
                            }) : Object(I.jsx)("div", {
                                style: {
                                    backgroundColor: Qn
                                }
                            })
                        }
                    }]), n
                }(l.PureComponent);
            $n.defaultProps = {
                pair: {
                    ticker: "",
                    address: ""
                },
                height: 400
            };
            var er = n(412),
                tr = n(404),
                nr = n.n(tr),
                rr = n(54),
                ar = n.n(rr),
                sr = function(e) {
                    var t = e.children,
                        n = e.content,
                        r = e.className,
                        a = Object(l.useRef)(null),
                        s = Object(l.useState)(!1),
                        i = Object(b.a)(s, 2),
                        c = i[0],
                        o = i[1],
                        d = Object(l.useState)({
                            x: 0,
                            y: 0
                        }),
                        h = Object(b.a)(d, 2),
                        p = h[0],
                        j = h[1],
                        f = ar.a.throttle((function(e) {
                            !0 !== c && (o(!0), j({
                                x: e.pageX,
                                y: e.nativeEvent ? e.nativeEvent.layerY : e.pageY
                            })), a.current && a.current.getAttribute("style") && er.a.to(a.current, {
                                duration: .25,
                                css: {
                                    left: e.pageX,
                                    top: e.nativeEvent ? e.nativeEvent.layerY : e.pageY
                                }
                            })
                        }), 50);
                    Object(l.useEffect)((function() {
                        a.current && a.current.setAttribute("style", "left: ".concat(p.x, "px; top: ").concat(p.y, "px;"))
                    }), [a.current, p]);
                    var m = F.a.bind(nr.a);
                    return Object(I.jsxs)(I.Fragment, {
                        children: [Object(I.jsx)("div", {
                            ref: a,
                            className: m("tooltip", r, {
                                active: c && n
                            }),
                            children: n
                        }), u.a.cloneElement(t, {
                            onMouseEnter: function(e) {
                                o(!0), j({
                                    x: e.pageX,
                                    y: e.nativeEvent ? e.nativeEvent.layerY : e.pageY
                                })
                            },
                            onMouseMove: f,
                            onMouseLeave: function(e) {
                                o(!1), a.current && a.current.setAttribute("style", "")
                            }
                        })]
                    })
                },
                ir = n(49),
                cr = ["showModal", "handleShow", "setModalUrl"],
                or = F.a.bind(B.a),
                lr = function(e) {
                    e.showModal;
                    var t = e.handleShow,
                        n = e.setModalUrl,
                        r = (Object(y.a)(e, cr), Object(l.useState)("limit")),
                        a = Object(b.a)(r, 2),
                        s = (a[0], a[1]),
                        i = qe(),
                        c = i.selectedPair,
                        o = i.pairInfo,
                        u = i.authorized,
                        d = i.selectedOrderBookRow,
                        h = i.userOpenOrders,
                        p = i.userWallets,
                        j = i.userTrades,
                        f = i.setExchangeMode,
                        m = i.exchangeMode,
                        v = i.trade,
                        g = i.tradeStatus,
                        x = i.setTradeStatus,
                        O = i.tradeLoading,
                        w = i.cancelOrder,
                        P = o ? {
                            price: parseFloat(o.price),
                            h24open: parseFloat(o.h24open),
                            h24high: parseFloat(o.h24high),
                            h24low: parseFloat(o.h24low),
                            h24volume: parseFloat(o.h24volume)
                        } : {
                            price: 1,
                            h24open: 1,
                            h24high: 1,
                            h24low: 1,
                            h24volume: 1
                        },
                        B = [{
                            title: "Daily change",
                            value: P.price - P.h24open,
                            delta: {
                                value: 100 * (P.price - P.h24open) / P.h24open,
                                units: "%"
                            }
                        }, {
                            title: "Price",
                            value: P.price
                        }, {
                            title: "High, 24h",
                            value: P.h24high
                        }, {
                            title: "Low, 24h",
                            value: P.h24low
                        }, {
                            title: "Volume",
                            value: P.h24volume
                        }];
                    return Object(I.jsxs)(I.Fragment, {
                        children: [Object(I.jsx)(T, {
                            title: "Flash Exchange",
                            description: "",
                            keywords: ""
                        }), Object(I.jsx)(dn, {
                            header: g && ("0" === g.status ? Object(I.jsx)("span", {
                                className: "green",
                                children: "cancelOrder" === g.additionalInfo ? "Order canceled!" : "Order placed!"
                            }) : Object(I.jsx)("span", {
                                className: "red",
                                children: "Order placement error"
                            })),
                            show: Boolean(g),
                            onClose: function() {
                                return x(void 0)
                            },
                            children: g ? function() {
                                switch (g.status) {
                                    case "0":
                                        return "0" === g.sdkError && "0" === g.exitCode ? Object(I.jsx)(I.Fragment, {
                                            children: "cancelOrder" === g.additionalInfo ? "Your Open Orders will update in seconds" : "It will appear in your Open Orders in seconds"
                                        }) : Object(I.jsxs)(I.Fragment, {
                                            children: ["Unknown error. Error code: ", JSON.stringify(g)]
                                        });
                                    case "2":
                                        return Object(I.jsx)(I.Fragment, {
                                            children: "GraphQL request error"
                                        });
                                    case "3":
                                        return Object(I.jsx)(I.Fragment, {
                                            children: "GET method error"
                                        });
                                    case "5":
                                        return Object(I.jsx)(I.Fragment, {
                                            children: "No sender wallet"
                                        });
                                    case "6":
                                        return Object(I.jsx)(I.Fragment, {
                                            children: "Unknown wrapper type"
                                        });
                                    case "7":
                                        return Object(I.jsx)(I.Fragment, {
                                            children: "No receiver wallet"
                                        });
                                    case "4":
                                        if ("414" !== g.sdkError) return Object(I.jsxs)(I.Fragment, {
                                            children: ["Unknown error. Error code: ", JSON.stringify(g)]
                                        });
                                        switch (g.exitCode) {
                                            case "100":
                                                return Object(I.jsx)(I.Fragment, {
                                                    children: "Wrong signature (relink account)"
                                                });
                                            case "101":
                                                return Object(I.jsx)(I.Fragment, {
                                                    children: "Not enough token balance to proceed"
                                                });
                                            case "114":
                                                return Object(I.jsx)(I.Fragment, {
                                                    children: "Not enough EVERs to process"
                                                });
                                            case "119":
                                                return Object(I.jsx)(I.Fragment, {
                                                    children: "Finish time is out of lend time"
                                                });
                                            default:
                                                return Object(I.jsxs)(I.Fragment, {
                                                    children: ["Unknown error. Error code: ", JSON.stringify(g)]
                                                })
                                        }
                                    default:
                                        return Object(I.jsxs)(I.Fragment, {
                                            children: ["Unknown error. Error code: ", JSON.stringify(g)]
                                        })
                                }
                            }() : null
                        }), Object(I.jsxs)(_.a, {
                            fluid: !0,
                            children: [Object(I.jsx)(k.a, {
                                children: Object(I.jsx)(C.a, {
                                    xs: {
                                        span: 12,
                                        order: 0
                                    },
                                    sm: {
                                        span: 12
                                    },
                                    md: {
                                        span: 12
                                    },
                                    lg: {
                                        span: 12
                                    },
                                    xl: {
                                        span: 12
                                    },
                                    children: Object(I.jsxs)("div", {
                                        className: "market-indicators",
                                        children: [Object(I.jsx)("div", {
                                            className: or("pair headers headers-small", {
                                                loading: !c
                                            }),
                                            children: c ? Object(I.jsxs)(I.Fragment, {
                                                children: [Object(I.jsxs)("div", {
                                                    className: "icons",
                                                    children: [Object(I.jsx)("div", {}), Object(I.jsx)("div", {})]
                                                }), Object(I.jsxs)("div", {
                                                    children: [c.ticker.split("/")[0], Object(I.jsx)("em", {
                                                        children: "/"
                                                    }), c.ticker.split("/")[1]]
                                                })]
                                            }) : Object(I.jsxs)(I.Fragment, {
                                                children: [Object(I.jsxs)("div", {
                                                    className: "icons",
                                                    children: [Object(I.jsx)("div", {}), Object(I.jsx)("div", {})]
                                                }), Object(I.jsxs)("div", {
                                                    className: "skeleton-pair",
                                                    children: [Object(I.jsx)(Jt, {
                                                        size: "large",
                                                        variant: "primary"
                                                    }), Object(I.jsx)(Jt, {
                                                        size: "large",
                                                        variant: "primary"
                                                    })]
                                                })]
                                            })
                                        }), Object(I.jsx)("div", {
                                            className: "indicators",
                                            children: c && B.length && o ? Object(I.jsx)(I.Fragment, {
                                                children: B.map((function(e, t) {
                                                    return Object(I.jsx)(Rt, {
                                                        title: e.title,
                                                        value: e.value,
                                                        delta: e.delta
                                                    }, t)
                                                }))
                                            }) : Object(I.jsxs)(I.Fragment, {
                                                children: [Object(I.jsx)(Dt, {
                                                    className: "green"
                                                }), [0, 1].map((function(e, t) {
                                                    return Object(I.jsx)(Dt, {}, t)
                                                }))]
                                            })
                                        })]
                                    })
                                })
                            }), Object(I.jsxs)(k.a, {
                                children: [Object(I.jsxs)(C.a, {
                                    xs: {
                                        span: 12,
                                        order: 2
                                    },
                                    sm: {
                                        span: 6,
                                        order: 2
                                    },
                                    md: {
                                        span: 6,
                                        order: 2
                                    },
                                    lg: {
                                        span: 3,
                                        order: 1
                                    },
                                    xl: {
                                        span: 3
                                    },
                                    className: "column",
                                    children: [Object(I.jsx)(Sn, {
                                        selectedPair: c,
                                        authorized: Boolean(u),
                                        selectedOrderBookRow: d,
                                        setExchangeMode: f,
                                        exchangeMode: m,
                                        handleShow: t,
                                        trade: v,
                                        tradeLoading: O
                                    }), Object(I.jsxs)(Kt, {
                                        header: "Wallets",
                                        children: [Object(I.jsx)("div", {
                                            className: or("scrollable-table-container"),
                                            children: Object(I.jsxs)(S.a, {
                                                children: [Object(I.jsx)("thead", {
                                                    children: Object(I.jsxs)("tr", {
                                                        children: [Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote",
                                                            children: "Asset"
                                                        }), Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote",
                                                            children: "Tokens"
                                                        }), Object(I.jsx)("th", {
                                                            className: "paragraph paragraph-footnote",
                                                            children: Object(I.jsx)(sr, {
                                                                content: "Replenish native EVER balance to cover network fees",
                                                                children: Object(I.jsx)("span", {
                                                                    children: "Native EVER"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), Object(I.jsx)("tbody", {
                                                    className: "mono-narrow mono-narrow-note",
                                                    children: p.map((function(e, r) {
                                                        var a = e.nativeCurrencyBalance < 3;
                                                        return Object(I.jsxs)("tr", {
                                                            children: [Object(I.jsx)("td", {
                                                                valign: "top",
                                                                children: e.ticker
                                                            }), Object(I.jsxs)("td", {
                                                                valign: "top",
                                                                children: [vn(e.availableBalance, e.decimals), Object(I.jsx)("br", {}), Object(I.jsx)("div", {
                                                                    className: or("trade-table-button"),
                                                                    onClick: function() {
                                                                        n("https://uri.ever.surf/debot/".concat(z.a.get("auth").address, "?message=").concat(ir.a.authMessage, "&net=").concat(z.a.get("auth").alias)), t()
                                                                    },
                                                                    children: "Deposit"
                                                                })]
                                                            }), Object(I.jsxs)("td", {
                                                                valign: "top",
                                                                style: a ? {
                                                                    color: "red"
                                                                } : void 0,
                                                                children: [e.nativeCurrencyBalance, Object(I.jsx)("br", {}), Object(I.jsx)("div", {
                                                                    className: or("trade-table-button"),
                                                                    onClick: function() {
                                                                        n("https://uri.ever.surf/transfer/".concat(e.address, "?net=").concat(z.a.get("auth").alias)), t()
                                                                    },
                                                                    children: "Deposit"
                                                                })]
                                                            })]
                                                        }, r)
                                                    }))
                                                })]
                                            })
                                        }), !u && Object(I.jsx)("div", {
                                            className: "not-connected",
                                            children: Object(I.jsxs)(Qe, {
                                                variant: "semitransparent",
                                                className: or("connect"),
                                                onClick: t,
                                                children: [Object(I.jsx)(bt, {
                                                    icon: "connect"
                                                }), "Connect Surf"]
                                            })
                                        })]
                                    })]
                                }), Object(I.jsxs)(C.a, {
                                    xs: {
                                        span: 12,
                                        order: 1
                                    },
                                    sm: {
                                        span: 12,
                                        order: 1
                                    },
                                    md: {
                                        span: 12,
                                        order: 1
                                    },
                                    lg: {
                                        span: 6,
                                        order: 2
                                    },
                                    xl: {
                                        span: 6
                                    },
                                    className: "column",
                                    children: [Object(I.jsx)(Kt, {
                                        className: or("trading-view"),
                                        children: c ? Object(I.jsx)($n, {
                                            pair: {
                                                address: c.addr,
                                                ticker: c.ticker
                                            },
                                            endpoint: z.a.get("api").name,
                                            height: 520
                                        }) : Object(I.jsx)("div", {
                                            className: "loader-wrapper",
                                            children: Object(I.jsx)($t, {})
                                        })
                                    }), Object(I.jsx)(N.a.Container, {
                                        defaultActiveKey: "open-orders",
                                        onSelect: function(e) {
                                            s(String(e).toLowerCase())
                                        },
                                        transition: A.a,
                                        children: Object(I.jsxs)(Kt, {
                                            header: Object(I.jsxs)(L.a, {
                                                variant: "pills",
                                                className: or("head-narrow head-narrow-note", "nav-pills"),
                                                children: [Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsxs)(L.a.Link, {
                                                        className: or("nav-link-pill"),
                                                        eventKey: "open-orders",
                                                        children: ["Open orders", Object(I.jsx)("sup", {
                                                            children: h.length ? h.length : ""
                                                        })]
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: or("nav-link-pill"),
                                                        eventKey: "trade-history",
                                                        children: "Trade history"
                                                    })
                                                }), Object(I.jsx)(L.a.Item, {
                                                    children: Object(I.jsx)(L.a.Link, {
                                                        className: or("nav-link-pill"),
                                                        eventKey: "funds",
                                                        children: "Funds"
                                                    })
                                                })]
                                            }),
                                            children: [Object(I.jsxs)(N.a.Content, {
                                                children: [Object(I.jsx)(N.a.Pane, {
                                                    eventKey: "open-orders",
                                                    children: Object(I.jsx)("div", {
                                                        className: or("scrollable-table-container"),
                                                        children: Object(I.jsxs)(S.a, {
                                                            children: [Object(I.jsx)("thead", {
                                                                children: Object(I.jsxs)("tr", {
                                                                    children: [Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote",
                                                                        children: "Market"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote",
                                                                        children: "Side"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Price"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Amount"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Expire"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote"
                                                                    })]
                                                                })
                                                            }), Object(I.jsx)("tbody", {
                                                                className: or("mono-narrow mono-narrow-note", "trades"),
                                                                children: h.map((function(e, t) {
                                                                    var n = e.ticker.split("/"),
                                                                        r = Object(b.a)(n, 2),
                                                                        a = r[0],
                                                                        s = r[1],
                                                                        i = fn(e.priceScale),
                                                                        c = fn(e.minAmount);
                                                                    return Object(I.jsxs)("tr", {
                                                                        children: [Object(I.jsxs)("td", {
                                                                            children: [a, Object(I.jsx)("em", {
                                                                                children: "/"
                                                                            }), s]
                                                                        }), Object(I.jsx)("td", {
                                                                            className: or({
                                                                                green: "buy" === e.side.toLowerCase()
                                                                            }, {
                                                                                red: "sell" === e.side.toLowerCase()
                                                                            }),
                                                                            children: e.side[0].toUpperCase() + e.side.toLowerCase().substring(1)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.price, i)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.amount, c)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right faded",
                                                                            children: mn(e.finishTime)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: Object(I.jsx)("div", {
                                                                                className: or("trade-table-button"),
                                                                                onClick: function() {
                                                                                    return w(e.pairAddress, "SELL" === e.side, e.priceNum, e.orderId)
                                                                                },
                                                                                children: "Cancel"
                                                                            })
                                                                        })]
                                                                    }, t)
                                                                }))
                                                            })]
                                                        })
                                                    })
                                                }), Object(I.jsx)(N.a.Pane, {
                                                    eventKey: "trade-history",
                                                    children: Object(I.jsx)("div", {
                                                        className: or("scrollable-table-container"),
                                                        children: Object(I.jsxs)(S.a, {
                                                            children: [Object(I.jsx)("thead", {
                                                                children: Object(I.jsxs)("tr", {
                                                                    children: [Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote",
                                                                        children: "Market"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote",
                                                                        children: "Side"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Price"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Amount"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Liquidity"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Fees"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Time"
                                                                    })]
                                                                })
                                                            }), Object(I.jsx)("tbody", {
                                                                className: or("mono-narrow mono-narrow-note", "trades"),
                                                                children: j.sort((function(e, t) {
                                                                    return t.time - e.time
                                                                })).map((function(e, t) {
                                                                    var n = e.ticker.split("/"),
                                                                        r = Object(b.a)(n, 2),
                                                                        a = r[0],
                                                                        s = r[1],
                                                                        i = fn(e.priceScale),
                                                                        c = fn(e.minAmount);
                                                                    return Object(I.jsxs)("tr", {
                                                                        children: [Object(I.jsxs)("td", {
                                                                            children: [a, Object(I.jsx)("em", {
                                                                                children: "/"
                                                                            }), s]
                                                                        }), Object(I.jsx)("td", {
                                                                            className: or({
                                                                                green: "buy" === e.side.toLowerCase()
                                                                            }, {
                                                                                red: "sell" === e.side.toLowerCase()
                                                                            }),
                                                                            children: e.side[0].toUpperCase() + e.side.slice(1).toLowerCase()
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.price, i)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.amount, c)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: e.liquidity
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: e.fees
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right faded",
                                                                            children: mn(e.time)
                                                                        })]
                                                                    }, t)
                                                                }))
                                                            })]
                                                        })
                                                    })
                                                }), Object(I.jsx)(N.a.Pane, {
                                                    eventKey: "funds",
                                                    children: Object(I.jsx)("div", {
                                                        className: or("scrollable-table-container"),
                                                        children: Object(I.jsxs)(S.a, {
                                                            children: [Object(I.jsx)("thead", {
                                                                children: Object(I.jsxs)("tr", {
                                                                    children: [Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote",
                                                                        children: "Asset"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Total"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "In orders"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote right",
                                                                        children: "Available"
                                                                    }), Object(I.jsx)("th", {
                                                                        className: "paragraph paragraph-footnote"
                                                                    })]
                                                                })
                                                            }), Object(I.jsx)("tbody", {
                                                                className: or("mono-narrow mono-narrow-note", "trades"),
                                                                children: c && p.filter((function(e) {
                                                                    return c.ticker.includes(e.ticker)
                                                                })).map((function(e, t) {
                                                                    return Object(I.jsxs)("tr", {
                                                                        children: [Object(I.jsx)("td", {
                                                                            children: e.ticker
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.totalBalance, e.decimals)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right faded",
                                                                            children: vn(e.balanceInOrders, e.decimals)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: vn(e.availableBalance, e.decimals)
                                                                        }), Object(I.jsx)("td", {
                                                                            className: "right",
                                                                            children: Object(I.jsx)("a", {
                                                                                href: "#",
                                                                                className: "disabled",
                                                                                "aria-disabled": "true",
                                                                                children: "Withdraw"
                                                                            })
                                                                        })]
                                                                    }, t)
                                                                }))
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), !u && Object(I.jsx)("div", {
                                                className: "not-connected",
                                                children: Object(I.jsxs)(Qe, {
                                                    variant: "semitransparent",
                                                    className: or("connect"),
                                                    onClick: t,
                                                    children: [Object(I.jsx)(bt, {
                                                        icon: "connect"
                                                    }), "Connect Surf"]
                                                })
                                            })]
                                        })
                                    })]
                                }), Object(I.jsxs)(C.a, {
                                    xs: {
                                        span: 12,
                                        order: 3
                                    },
                                    sm: {
                                        span: 6,
                                        order: 3
                                    },
                                    md: {
                                        span: 6,
                                        order: 2
                                    },
                                    lg: {
                                        span: 3
                                    },
                                    xl: {
                                        span: 3
                                    },
                                    className: "column",
                                    children: [Object(I.jsx)(On, {
                                        selectedPair: c
                                    }), Object(I.jsx)(Ln, {
                                        selectedPair: c
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                ur = n(406),
                dr = n.n(ur),
                hr = n(407),
                pr = n.n(hr),
                br = (n(767), function(e) {
                    var t = e.title,
                        r = (e.path, Object(g.h)().id),
                        a = Object(g.g)(),
                        s = Object(l.useRef)(),
                        i = Object(l.useState)(null),
                        c = Object(b.a)(i, 2),
                        o = c[0],
                        u = c[1];
                    return Object(l.useEffect)((function() {
                        function e() {
                            return (e = Object(p.a)(f.a.mark((function e() {
                                var t, a, s;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n(775)("./".concat(r, ".md"));
                                        case 2:
                                            return t = e.sent, e.next = 5, fetch(t.default);
                                        case 5:
                                            return a = e.sent, e.next = 8, a.text();
                                        case 8:
                                            return s = e.sent, e.next = 11, u(s);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        u(""),
                            function() {
                                e.apply(this, arguments)
                            }()
                    }), [r]), Object(l.useEffect)((function() {
                        a.hash && s && s.current && o && s.current.querySelector(a.hash).scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }), [o, a.hash]), "" === r ? Object(I.jsx)(g.a, {
                        to: {
                            pathname: "/"
                        }
                    }) : null === o ? Object(I.jsx)(I.Fragment, {}) : Object(I.jsx)(_.a, {
                        fluid: "lg",
                        children: Object(I.jsx)(k.a, {
                            children: Object(I.jsxs)(C.a, {
                                lg: {
                                    span: 10,
                                    offset: 1
                                },
                                children: [Object(I.jsx)("h1", {
                                    children: t
                                }), Object(I.jsx)("section", {
                                    className: "content-wrapper",
                                    ref: s,
                                    children: Object(I.jsx)(dr.a, {
                                        rehypePlugins: [pr.a],
                                        children: o
                                    })
                                })]
                            })
                        })
                    })
                }),
                jr = n(408),
                fr = n.n(jr),
                mr = n(409),
                vr = n.n(mr),
                gr = F.a.bind(vr.a),
                xr = function(e) {
                    var t = e.handleEnter,
                        n = e.handleLogout,
                        r = e.mode,
                        a = e.error,
                        s = Object(l.useState)(""),
                        i = Object(b.a)(s, 2),
                        c = i[0],
                        o = i[1],
                        u = Object(l.useState)(""),
                        d = Object(b.a)(u, 2),
                        h = d[0],
                        p = d[1],
                        j = Object(l.useState)(!0),
                        f = Object(b.a)(j, 2),
                        m = f[0],
                        v = f[1];
                    return Object(I.jsxs)("div", {
                        className: gr("enter-form"),
                        children: ["signup" === r ? Object(I.jsxs)(I.Fragment, {
                            children: [Object(I.jsx)("h3", {
                                children: "Your credentials"
                            }), Object(I.jsx)("div", {
                                className: gr("description", "paragraph", "paragraph-footnote"),
                                children: "Entering new username and password \nwill create new account"
                            })]
                        }) : Object(I.jsxs)(I.Fragment, {
                            children: [Object(I.jsx)("h3", {
                                children: "Sign in"
                            }), Object(I.jsx)("div", {
                                className: gr("description", "paragraph", "paragraph-footnote"),
                                children: "Enter username and password to sign in into your account"
                            })]
                        }), Object(I.jsx)(ot, {
                            className: gr("input"),
                            name: "username",
                            value: h,
                            type: "text",
                            onChange: function(e) {
                                p(e.currentTarget.value)
                            },
                            onKeyPress: function(e) {
                                "Enter" === e.key && t({
                                    username: h,
                                    password: c
                                })
                            },
                            placeholder: "Username"
                        }), Object(I.jsx)(ot, {
                            className: gr("input"),
                            name: "password",
                            value: c,
                            type: m ? "password" : "text",
                            onChange: function(e) {
                                o(e.currentTarget.value)
                            },
                            onKeyPress: function(e) {
                                "Enter" === e.key && t({
                                    username: h,
                                    password: c
                                })
                            },
                            action: Object(I.jsx)(Qe, {
                                className: gr("show-button"),
                                variant: "transparent",
                                type: "button",
                                onClick: function() {
                                    return v(!m)
                                },
                                children: m ? Object(I.jsx)(bt, {
                                    icon: "eye-crossed"
                                }) : Object(I.jsx)(bt, {
                                    icon: "eye"
                                })
                            }),
                            placeholder: "Password"
                        }), Object(I.jsxs)(Qe, {
                            variant: "primary",
                            glowing: !0,
                            size: "lg",
                            disabled: !1,
                            className: gr("btn-enter"),
                            onClick: function() {
                                t({
                                    username: h,
                                    password: c
                                })
                            },
                            children: [Object(I.jsx)("span", {
                                children: "Enter"
                            }), Object(I.jsx)(bt, {
                                icon: "arrow-right"
                            })]
                        }), a ? Object(I.jsx)("div", {
                            className: gr("paragraph", "paragraph-footnote", "error", "note"),
                            children: a
                        }) : "signin" === r && Object(I.jsx)("a", {
                            href: "/terminate",
                            className: gr("paragraph", "paragraph-footnote", "note"),
                            onClick: function(e) {
                                n()
                            },
                            children: "Delete account and start a new session"
                        })]
                    })
                },
                Or = function(e) {
                    var t = e.showModal,
                        n = e.handleClose,
                        r = e.authenticateComponent,
                        a = e.isEntered,
                        s = e.showQRCode,
                        i = e.url,
                        c = Object(l.useRef)(null),
                        o = new fr.a({
                            width: 350,
                            height: 350,
                            type: "svg",
                            data: i || "https://uri.ever.surf/debot/".concat(z.a.get("auth").address, "?message=").concat(ir.a.authMessage, "&net=").concat(z.a.get("auth").alias),
                            margin: 0,
                            qrOptions: {
                                typeNumber: 0,
                                mode: "Byte",
                                errorCorrectionLevel: "L"
                            },
                            imageOptions: {
                                hideBackgroundDots: !1,
                                imageSize: 0,
                                margin: 0
                            },
                            dotsOptions: {
                                type: "rounded",
                                color: "#ffffff"
                            },
                            backgroundOptions: {
                                color: "transparent"
                            },
                            image: "",
                            cornersSquareOptions: {
                                type: void 0,
                                color: "#ffffff"
                            },
                            cornersDotOptions: {
                                type: void 0,
                                color: "#ffffff"
                            }
                        });
                    return Object(l.useEffect)((function() {
                        c.current && (o.update({
                            data: i || "https://uri.ever.surf/debot/".concat(z.a.get("auth").address, "?message=").concat(ir.a.authMessage, "&net=").concat(z.a.get("auth").alias)
                        }), c.current.innerHTML = "", o.append(c.current), c.current.querySelector("svg").setAttribute("viewBox", "0 0 350 350"))
                    }), [s, t]), Object(I.jsx)(It, {
                        show: t,
                        onHide: n,
                        fullscreen: !0,
                        body: Object(I.jsxs)("div", {
                            className: O()("surf-connect"),
                            children: [Object(I.jsx)("div", {
                                className: O()({
                                    active: !a
                                }),
                                children: r
                            }), Object(I.jsxs)("div", {
                                className: O()("content-wrapper", "content", {
                                    active: a
                                }),
                                children: [Object(I.jsxs)("div", {
                                    className: "svg-wrapper ",
                                    children: [Object(I.jsx)("div", {
                                        ref: c,
                                        className: O()("qrcode")
                                    }), Object(I.jsx)("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: i || "https://uri.ever.surf/debot/".concat(z.a.get("auth").address, "?message=").concat(ir.a.authMessage, "&net=").concat(z.a.get("auth").alias),
                                        children: "Go to web"
                                    })]
                                }), Object(I.jsxs)("div", {
                                    children: [Object(I.jsx)("h5", {
                                        className: "headers headers-medium",
                                        children: "To use Flex \u2014"
                                    }), Object(I.jsxs)("ol", {
                                        children: [Object(I.jsx)("li", {
                                            children: "Open Surf on your phone"
                                        }), Object(I.jsxs)("li", {
                                            children: ["Tap Scan QR ", Object(I.jsx)(bt, {
                                                icon: "qrcode"
                                            })]
                                        }), Object(I.jsx)("li", {
                                            children: "Point your phone at\xa0this\xa0screen to\xa0confirm login"
                                        })]
                                    }), Object(I.jsx)("a", {
                                        href: "",
                                        children: "Need help to get started?"
                                    })]
                                })]
                            })]
                        }),
                        footer: Object(I.jsxs)("div", {
                            className: O()("platforms", "paragraph", "paragraph-note"),
                            children: ["Download Surf:", Object(I.jsxs)("ul", {
                                children: [Object(I.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://itunes.apple.com/us/app/ton-surf/id1481986831?mt=8",
                                    children: Object(I.jsxs)("li", {
                                        className: O()("ios"),
                                        children: [Object(I.jsx)(bt, {
                                            icon: "apple"
                                        }), "App Store"]
                                    })
                                }), Object(I.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://play.google.com/store/apps/details?id=surf.ton",
                                    children: Object(I.jsxs)("li", {
                                        className: O()("android"),
                                        children: [Object(I.jsx)(bt, {
                                            icon: "google-play"
                                        }), "Google Play"]
                                    })
                                }), Object(I.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://github.com/tonlabs/Surf-Releases/releases",
                                    children: Object(I.jsxs)("li", {
                                        className: O()("github"),
                                        children: [Object(I.jsx)(bt, {
                                            icon: "github"
                                        }), "GitHub"]
                                    })
                                })]
                            })]
                        })
                    })
                },
                wr = function() {
                    var e = Object(H.b)(),
                        t = Object(l.useState)(!1),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        a = n[1],
                        s = Object(l.useState)(Boolean(ir.a.authMessage)),
                        i = Object(b.a)(s, 2),
                        c = i[0],
                        o = i[1],
                        u = Object(l.useState)(ir.a.isEntered()),
                        d = Object(b.a)(u, 2),
                        h = d[0],
                        j = d[1],
                        m = Object(l.useState)(!1),
                        x = Object(b.a)(m, 2),
                        y = x[0],
                        _ = x[1],
                        k = Object(l.useState)(""),
                        C = Object(b.a)(k, 2),
                        S = C[0],
                        N = C[1],
                        A = function() {
                            N(""), a(!1)
                        },
                        L = function() {
                            return a(!0)
                        },
                        P = r ? function() {
                            return A()
                        } : function() {
                            return L()
                        },
                        B = Object(g.g)().pathname.split("/").filter(Boolean)[0],
                        M = function() {
                            var t = Object(p.a)(f.a.mark((function t(n) {
                                var r, s;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            r = n.username, s = n.password, ir.a.enterCredentials({
                                                username: r,
                                                password: s
                                            }).then((function(t) {
                                                t ? (ir.a.setEntered(!0), j(!0), ir.a.invokeAuthMessage().then((function(t) {
                                                    t && (o(!0), ir.a.authorize().then((function(t) {
                                                        t ? (e(de(t)), a(!1)) : ir.a.authorizePolling().then((function(t) {
                                                            t && (e(de(t)), a(!1))
                                                        }))
                                                    })))
                                                }))) : (_("These credentials didn't work out"), setTimeout((function() {
                                                    _(!1)
                                                }), 2e3))
                                            })).catch((function(e) {
                                                return console.error(e.message)
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    Object(H.c)((function(e) {
                        return e.dashboard
                    })).authorized;
                    return Object(I.jsx)(I.Fragment, {
                        children: Object(I.jsxs)("div", {
                            className: O()("ws-app", Object(g.g)().pathname.split("/").filter(Boolean)[0], {
                                isMobile: w.isMobile,
                                "index-page": !B
                            }),
                            children: [Object(I.jsx)(Nt, {
                                showModal: r,
                                toggleModal: P
                            }), Object(I.jsx)("main", {
                                children: Object(I.jsxs)(g.d, {
                                    children: [Object(I.jsx)(g.b, {
                                        path: "/legal-notes/:id",
                                        children: Object(I.jsx)(br, {})
                                    }), Object(I.jsx)(g.b, {
                                        path: "/terminate",
                                        children: Object(I.jsx)(g.a, {
                                            to: "/"
                                        })
                                    }), Object(I.jsx)(g.b, {
                                        render: function(e) {
                                            return Object(I.jsx)(lr, Object(v.a)(Object(v.a)({}, e), {}, {
                                                showModal: r,
                                                handleShow: L,
                                                setModalUrl: N
                                            }))
                                        }
                                    }), Object(I.jsx)(g.a, {
                                        to: "/"
                                    })]
                                })
                            }), Object(I.jsx)(Or, {
                                url: S,
                                showModal: r,
                                handleClose: A,
                                authenticateComponent: Object(I.jsx)(xr, {
                                    handleEnter: M,
                                    handleLogout: ir.a.deleteSession,
                                    mode: ir.a.mode,
                                    error: y
                                }),
                                isEntered: h,
                                showQRCode: c
                            })]
                        })
                    })
                },
                yr = (n(776), n(158)),
                _r = n(411),
                kr = n(18);
            var Cr = function(e) {
                Object(rn.a)(n, e);
                var t = Object(an.a)(n);

                function n() {
                    return Object(tn.a)(this, n), t.apply(this, arguments)
                }
                return Object(nn.a)(n, [{
                    key: "isSuccess",
                    value: function() {
                        return this === n.SUCCESS
                    }
                }, {
                    key: "isError",
                    value: function() {
                        return this === n.ERROR
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return this === n.EMPTY
                    }
                }, {
                    key: "isLoading",
                    value: function() {
                        return this === n.LOADING
                    }
                }, {
                    key: "isInit",
                    value: function() {
                        return this === n.INIT
                    }
                }]), n
            }(n(410).Enumify);

            function Sr(e, t, n, r) {
                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "null";
                return Object.assign({}, e, Object(kr.a)({}, t, {
                    data: r,
                    promiseState: n,
                    error: a
                }))
            }

            function Nr(e, t, n) {
                return n ? Sr(e, t, Cr.LOADING, n) : Object.assign({}, e, Object(kr.a)({}, t, Object.assign({}, e[t], {
                    promiseState: Cr.LOADING
                })))
            }

            function Ar(e, t, n) {
                return Sr(e, t, Cr.SUCCESS, n)
            }

            function Lr(e) {
                return {
                    data: e,
                    promiseState: Cr.INIT,
                    error: null
                }
            }
            Cr.INIT = new Cr, Cr.SUCCESS = new Cr, Cr.ERROR = new Cr, Cr.LOADING = new Cr, Cr.EMPTY = new Cr, Cr._ = Cr.closeEnum();
            var Pr = {
                    pairs: Lr([]),
                    pairInfo: Lr(void 0),
                    orderbook: Lr([]),
                    trades: Lr([]),
                    userWallets: Lr([]),
                    userOpenOrders: Lr([]),
                    userTrades: Lr([]),
                    userFunds: Lr([])
                },
                Br = {
                    authorized: void 0,
                    selectedPair: void 0,
                    selectedOrderBookRow: void 0,
                    exchangeMode: "buy"
                },
                Mr = Object(yr.b)({
                    dashboard: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Br,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case R:
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    authorized: r
                                });
                            case D:
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    selectedPair: r
                                });
                            case oe:
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    selectedOrderBookRow: r
                                });
                            case le:
                                return Object(v.a)(Object(v.a)({}, e), {}, {
                                    exchangeMode: r
                                });
                            default:
                                return e
                        }
                    },
                    flex: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pr,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case U:
                                return Nr(e, "pairs", []);
                            case V:
                                return Ar(e, "pairs", r);
                            case K:
                                return Nr(e, "orderbook", void 0);
                            case W:
                                return Ar(e, "orderbook", r);
                            case Y:
                                return Nr(e, "pairInfo", void 0);
                            case J:
                                return Ar(e, "pairInfo", r);
                            case Z:
                                return Nr(e, "trades", void 0);
                            case q:
                                return Ar(e, "trades", r);
                            case G:
                                var a = Object(en.a)(e.trades.data),
                                    s = r;
                                return s && s.length && s.forEach((function(e) {
                                    var t = a.findIndex((function(t) {
                                        return t.id === e.id
                                    })); - 1 === t ? a.push(e) : a[t] = e
                                })), Ar(e, "trades", a);
                            case Q:
                                return Nr(e, "userWallets", void 0);
                            case X:
                                return Ar(e, "userWallets", r);
                            case $:
                                var i = Object(en.a)(e.userWallets.data),
                                    c = r;
                                return c && c.length && c.forEach((function(e) {
                                    var t = i.findIndex((function(t) {
                                        return t.address && t.address === e.address || !t.address && t.ticker === e.ticker
                                    })); - 1 !== t && i.splice(t, 1), i.push(e)
                                })), i.sort((function(e, t) {
                                    return e.ticker.localeCompare(t.ticker)
                                })), Ar(e, "userWallets", i);
                            case te:
                                return Nr(e, "userTrades", void 0);
                            case ee:
                                return Ar(e, "userTrades", r);
                            case ne:
                                var o = Object(en.a)(e.userTrades.data),
                                    l = r;
                                return l && l.length && l.forEach((function(e) {
                                    o.find((function(t) {
                                        return t.id === e.id
                                    })) || o.push(e)
                                })), Ar(e, "userTrades", o);
                            case ae:
                                return Nr(e, "userFunds", void 0);
                            case re:
                                return Ar(e, "userFunds", r);
                            case ie:
                                return Nr(e, "userOpenOrders", void 0);
                            case se:
                            case ce:
                                return Ar(e, "userOpenOrders", r);
                            default:
                                return e
                        }
                    }
                }),
                Fr = Object(yr.c)(Mr, Object(yr.a)(_r.a)),
                Er = function() {
                    var e = Object(l.useState)(!0),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(l.useEffect)((function() {
                        Object(p.a)(f.a.mark((function e() {
                            return f.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r(!1);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), []), n ? null : Object(I.jsx)(E.b, {
                        children: Object(I.jsx)(H.a, {
                            store: Fr,
                            children: Object(I.jsx)(m.a, {
                                children: Object(I.jsx)(wr, {})
                            })
                        })
                    })
                },
                Ir = function(e) {
                    e && e instanceof Function && n.e(5).then(n.bind(null, 813)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            a = t.getFCP,
                            s = t.getLCP,
                            i = t.getTTFB;
                        n(e), r(e), a(e), s(e), i(e)
                    }))
                };
            h.a.render(Object(I.jsx)(u.a.StrictMode, {
                children: Object(I.jsx)(Er, {})
            }), document.getElementById("root")), Ir()
        },
        82: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return o
                }));
                var r = n(18),
                    a = n(3),
                    s = n(21),
                    i = n(7),
                    c = n(8),
                    o = function() {
                        function t() {
                            Object(i.a)(this, t)
                        }
                        return Object(c.a)(t, null, [{
                            key: "truncAddress",
                            value: function(e) {
                                var t = e.split(":");
                                return "".concat(t[0], ":").concat(t[1].substr(0, 4))
                            }
                        }, {
                            key: "base64ToBytesArray",
                            value: function(t) {
                                return e.from(t, "base64")
                            }
                        }, {
                            key: "bufferToHex",
                            value: function(e) {
                                return e.toString("hex")
                            }
                        }, {
                            key: "base64ToBuffer",
                            value: function(t) {
                                return e.from(t, "base64")
                            }
                        }, {
                            key: "hexToBuffer",
                            value: function(t) {
                                return e.from(t, "hex")
                            }
                        }, {
                            key: "hexToBase64",
                            value: function(e) {
                                return t.hexToBuffer(e).toString("base64")
                            }
                        }, {
                            key: "hexToArray",
                            value: function(e) {
                                return new Uint8Array(t.hexToBuffer(e).buffer)
                            }
                        }, {
                            key: "base64ToString",
                            value: function(e) {
                                return t.base64ToBuffer(e).toString()
                            }
                        }, {
                            key: "hexToString",
                            value: function(e) {
                                return t.hexToBuffer(e).toString()
                            }
                        }, {
                            key: "base64ToHex",
                            value: function(n) {
                                return t.bufferToHex(e.from(n, "base64"))
                            }
                        }, {
                            key: "arrayToHex",
                            value: function(n) {
                                return t.bufferToHex(e.from(n))
                            }
                        }, {
                            key: "stringToHex",
                            value: function(n) {
                                return t.bufferToHex(e.from(n))
                            }
                        }, {
                            key: "getKBSize",
                            value: function(e) {
                                return this.base64ToBytesArray(e).length / 1024
                            }
                        }, {
                            key: "divideBySubLists",
                            value: function(e) {
                                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
                                return n
                            }
                        }, {
                            key: "bufferToBase64",
                            value: function(e) {
                                return e.toString("base64")
                            }
                        }, {
                            key: "stringToBase64",
                            value: function(t) {
                                return this.bufferToBase64(e.from(t))
                            }
                        }, {
                            key: "objectValues",
                            value: function(e) {
                                return Object.keys(e || {}).map((function(t) {
                                    return e[t]
                                }))
                            }
                        }, {
                            key: "parseArray",
                            value: function(e) {
                                var t = this;
                                return e.reduce((function(e, n) {
                                    return [].concat(Object(s.a)(e), Object(s.a)(Array.isArray(n) ? n : t.objectValues(n) || []))
                                }), [])
                            }
                        }, {
                            key: "groupById",
                            value: function(e, t) {
                                return e.reduce((function(e, n) {
                                    return Object(a.a)(Object(a.a)({}, e), {}, Object(r.a)({}, n[t], n))
                                }), {})
                            }
                        }, {
                            key: "callIfNotDuplicate",
                            value: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                                t[e] || (t[e] = !0, n(t))
                            }
                        }, {
                            key: "removeDuplicates",
                            value: function(e, t) {
                                var n = {};
                                return e.forEach((function(e) {
                                    var r = t ? e[t] : e;
                                    n[r] || (n[r] = e)
                                })), this.objectValues(n)
                            }
                        }]), t
                    }()
            }).call(this, n(35).Buffer)
        },
        95: function(e, t, n) {
            e.exports = {
                footer: "Footer_footer__miWNG",
                container: "Footer_container__12VmU",
                copyright: "Footer_copyright__sR80m",
                nav: "Footer_nav__3OxV3",
                "nav-item": "Footer_nav-item__39AVX",
                dod: "Footer_dod__O_mTk"
            }
        }
    },
    [
        [777, 2, 3]
    ]
]);
//# sourceMappingURL=main.efeaa85a.chunk.js.map