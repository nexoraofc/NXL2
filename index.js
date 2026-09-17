<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Nexus Secure License (NXSL) v1.0 — an extremely restrictive, network-copyleft software license by Nexora Inc. Full legal terms, definitions, restrictions, and compliance guide.">
<title>Nexora | NXSL v2.0 Documentation</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style>
:root {
    --bg: #050505;
    --bg-soft: #0a0a0a;
    --bg-panel: #0d0d0d;
    --border: #1a1a1a;
    --border-strong: #2a2a2a;
    --text: #d6d6d6;
    --text-dim: #9a9a9a;
    --accent: #00f2ff;
    --accent-dim: rgba(0, 242, 255, 0.12);
    --danger: #ff4444;
    --danger-dim: rgba(255, 68, 68, 0.06);
    --warn: #ffb020;
    --warn-dim: rgba(255, 176, 32, 0.06);
    --mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}

* { box-sizing: border-box; }

html {
    scroll-behavior: smooth;
    scroll-padding-top: 24px;
}

body {
    margin: 0;
    font-family: var(--mono);
    background: var(--bg);
    color: var(--text);
    font-size: 14px;
    line-height: 1.85;
}

::selection {
    background: var(--accent);
    color: #000;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 2px;
}

/* ============ HEADER ============ */
.topbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 52px;
    background: rgba(5, 5, 5, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 100;
}

.topbar .brand {
    color: var(--accent);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.topbar .brand span { color: var(--text-dim); font-weight: 400; }

.btn {
    background: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 7px 14px;
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: background 0.25s, color 0.25s;
}

.btn:hover {
    background: var(--accent);
    color: #000;
}

/* ============ LAYOUT ============ */
.layout {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 52px;
}

/* ============ SIDEBAR / TOC ============ */
.sidebar {
    width: 250px;
    flex-shrink: 0;
    position: sticky;
    top: 52px;
    height: calc(100vh - 52px);
    overflow-y: auto;
    border-right: 1px solid var(--border);
    padding: 28px 0;
}

.sidebar .toc-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-dim);
    padding: 0 24px 12px;
}

.toc a {
    display: block;
    padding: 8px 24px;
    color: var(--text-dim);
    font-size: 12px;
    border-left: 2px solid transparent;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.toc a:hover {
    color: var(--text);
    text-decoration: none;
    background: rgba(255,255,255,0.02);
}

.toc a.active {
    color: var(--accent);
    border-left-color: var(--accent);
    background: var(--accent-dim);
}

/* ============ CONTENT ============ */
.content {
    flex: 1;
    min-width: 0;
    max-width: 860px;
    padding: 40px 48px 120px;
}

.badge-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 28px;
}

.badge {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 5px 12px;
    border-radius: 3px;
    border: 1px solid;
}

.badge.copyleft { color: var(--accent); border-color: var(--accent); background: var(--accent-dim); }
.badge.restrictive { color: var(--danger); border-color: var(--danger); background: var(--danger-dim); }
.badge.network { color: var(--warn); border-color: var(--warn); background: var(--warn-dim); }

h1 {
    font-size: 26px;
    margin: 0 0 14px;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 2px;
    border-left: 4px solid var(--accent);
    padding-left: 16px;
    line-height: 1.4;
}

.doc-meta {
    color: var(--text-dim);
    font-size: 12px;
    margin-bottom: 44px;
    padding-left: 20px;
}

.doc-meta b { color: var(--text); font-weight: 700; }

section.doc-section {
    margin-bottom: 48px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--border);
    scroll-margin-top: 76px;
}

h2 {
    color: var(--accent);
    font-weight: 700;
    margin: 0 0 18px;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;
    align-items: baseline;
    gap: 10px;
}

h2::before {
    content: ">";
    opacity: 0.55;
    font-weight: 400;
}

h2 .sec-num { opacity: 0.55; font-weight: 400; }

h3 {
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 26px 0 10px;
}

p { margin: 0 0 14px; }

.clause {
    margin-bottom: 20px;
    padding: 16px 20px;
    background: var(--bg-panel);
    border: 1px solid var(--border);
    border-left: 3px solid var(--border-strong);
    border-radius: 6px;
}

.clause.critical {
    border-left-color: var(--danger);
    background: var(--danger-dim);
}

.clause strong.clause-id {
    color: #fff;
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
}

.clause strong.clause-id .tag {
    color: var(--danger);
    font-size: 10px;
    letter-spacing: 1px;
    margin-left: 8px;
}

code {
    background: #161616;
    border: 1px solid var(--border-strong);
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 12.5px;
    color: var(--accent);
}

ul.legal-list {
    margin: 10px 0 14px;
    padding-left: 34px;
}

ul.legal-list li { margin-bottom: 8px; }
ul.legal-list li::marker { color: var(--accent); }

/* ============ CALLOUTS ============ */
.callout {
    padding: 22px 24px;
    border-radius: 8px;
    margin: 24px 0;
    border: 1px solid;
}

.callout-title {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.callout.danger {
    background: var(--danger-dim);
    border-color: var(--danger);
}

.callout.danger .callout-title { color: var(--danger); }

.callout.warn {
    background: var(--warn-dim);
    border-color: var(--warn);
}

.callout.warn .callout-title { color: var(--warn); }

.callout.info {
    background: var(--accent-dim);
    border-color: var(--accent);
}

.callout.info .callout-title { color: var(--accent); }

/* ============ FAQ ============ */
details.faq-item {
    border: 1px solid var(--border);
    border-radius: 6px;
    margin-bottom: 12px;
    background: var(--bg-panel);
    overflow: hidden;
}

details.faq-item summary {
    cursor: pointer;
    padding: 14px 18px;
    color: #fff;
    font-size: 13px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background 0.2s;
}

details.faq-item summary::before {
    content: "+";
    color: var(--accent);
    font-weight: 700;
}

details.faq-item summary:hover { background: rgba(255,255,255,0.02); }
details.faq-item[open] summary::before { content: "–"; }

details.faq-item .faq-body {
    padding: 0 18px 16px 40px;
    color: var(--text-dim);
    font-size: 13px;
}

details.faq-item .faq-body b { color: var(--danger); }

/* ============ CODE BLOCK ============ */
.code-wrap {
    position: relative;
    margin: 18px 0 10px;
}

.copy-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #161616;
    color: var(--accent);
    border: 1px solid var(--border-strong);
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.25s;
}

.copy-btn:hover {
    background: var(--accent);
    color: #000;
    border-color: var(--accent);
}

.copy-btn.copied {
    background: #1db954;
    border-color: #1db954;
    color: #000;
}

pre {
    background: var(--bg-soft);
    padding: 22px;
    border-radius: 8px;
    font-size: 12.5px;
    color: var(--text-dim);
    border: 1px solid var(--border-strong);
    overflow-x: auto;
    margin: 0;
    line-height: 1.7;
}

/* ============ FOOTER ============ */
footer.doc-footer {
    border-top: 1px solid var(--border);
    padding-top: 24px;
    color: var(--text-dim);
    font-size: 11.5px;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 960px) {
    .sidebar { display: none; }
    .content { padding: 32px 22px 90px; }
}
</style>
</head>

<body>

<header class="topbar">
    <div class="brand">NEXORA <span>// LEGAL</span></div>
    <button class="btn" id="backBtn" type="button">&#x2B05; [BACK_TO_HUB]</button>
</header>

<div class="layout">

    <!-- ============ TOC ============ -->
    <nav class="sidebar" aria-label="Table of contents">
        <div class="toc-label">// INDEX</div>
        <div class="toc" id="toc">
            <a href="#sec-01">01. Definitions</a>
            <a href="#sec-02">02. Grant of Rights</a>
            <a href="#sec-03">03. Attribution</a>
            <a href="#sec-04">04. Network Clause</a>
            <a href="#sec-05">05. Copyleft</a>
            <a href="#sec-06">06. Prohibited Uses</a>
            <a href="#sec-07">07. Commercial Use</a>
            <a href="#sec-08">08. Patents &amp; Trademarks</a>
            <a href="#sec-09">09. Audit Rights</a>
            <a href="#sec-10">10. Termination</a>
            <a href="#sec-11">11. No Warranty</a>
            <a href="#sec-12">12. Limitation of Liability</a>
            <a href="#sec-13">13. Indemnification</a>
            <a href="#sec-14">14. Governing Law</a>
            <a href="#sec-15">15. Compliance Guide</a>
            <a href="#sec-16">16. FAQ</a>
        </div>
    </nav>

    <!-- ============ CONTENT ============ -->
    <main class="content">

        <div class="badge-row">
            <span class="badge copyleft">Strong Copyleft</span>
            <span class="badge network">Network Clause</span>
            <span class="badge restrictive">Extremely Restrictive</span>
        </div>

        <h1>NEXUS SECURE LICENSE (NXSL) v1.0</h1>

        <div class="doc-meta">
            Version: <b>1.0</b> &nbsp;|&nbsp; Effective date: <b>Upon first distribution</b> &nbsp;|&nbsp; Issuer: <b>Nexora Inc.</b> &nbsp;|&nbsp; Status: <b>Active &amp; Enforceable</b>
        </div>

        <div class="callout danger">
            <div class="callout-title">&#9888; READ BEFORE USE</div>
            <p>
                NXSL is an <strong>extremely restrictive, strong-copyleft license</strong>. It is deliberately designed to grant the minimum rights legally necessary to use the software, while reserving every other right to the Licensor. If you are uncertain whether a given use is permitted, <strong>it is not permitted</strong>. No silence, inaction, delay, or failure to object by the Licensor shall be construed as consent, waiver, or grant of any additional right.
            </p>
        </div>

        <!-- ================= 01 ================= -->
        <section class="doc-section" id="sec-01">
            <h2><span class="sec-num">01.</span> Definitions and Purpose</h2>

            <p>
                This document constitutes the <strong>Nexus Secure License, version 1.0</strong> ("<strong>NXSL</strong>", "<strong>the License</strong>", or "<strong>this Agreement</strong>"), a legally binding instrument governing the use, reproduction, modification, distribution, and network deployment of the software to which it is attached ("<strong>the Software</strong>").
            </p>
            <p>
                Throughout this Agreement, the following definitions shall apply and shall be interpreted as broadly as applicable law permits:
            </p>
            <ul class="legal-list">
                <li><strong>"Licensor"</strong> — Nexora Inc. and each original author, contributor, and rights-holder of the Software, jointly and severally.</li>
                <li><strong>"Licensee"</strong> — any natural person, legal entity, organization, or automated system that obtains, accesses, downloads, clones, forks, installs, executes, compiles, modifies, distributes, or otherwise interacts with the Software in any form.</li>
                <li><strong>"Software"</strong> — the source code, object code, compiled binaries, configuration files, documentation, data structures, schemas, and any derivative portion thereof, in whole or in part.</li>
                <li><strong>"Derivative Work"</strong> — any work that is based upon, derived from, incorporates, links to (statically or dynamically), wraps, ports, transcribes, or is substantially similar to the Software, as determined by the Licensor in its sole and absolute discretion.</li>
                <li><strong>"Distribution"</strong> — any conveyance, transmission, publication, upload, deployment, or making available of the Software or Derivative Works to any third party, including but not limited to publication in public or private repositories, application stores, package registries, containers, images, or network-accessible services.</li>
                <li><strong>"Network Interaction"</strong> — any use of the Software or a Derivative Work that permits users to interact with its functionality remotely through a network, including web services, REST or GraphQL APIs, RPC endpoints, peer-to-peer protocols, decentralized networks, or any equivalent mechanism, without the user receiving a copy of the Software itself.</li>
            </ul>
            <p>
                The purpose of NXSL is to preserve authorship, guarantee perpetual auditability of every deployed instance, prevent proprietary appropriation of the ecosystem, and ensure that all improvements, however small, are returned to the original community under identical terms.
            </p>
        </section>

        <!-- ================= 02 ================= -->
        <section class="doc-section" id="sec-02">
            <h2><span class="sec-num">02.</span> Grant of Rights — Narrow and Conditional</h2>

            <div class="clause">
                <strong class="clause-id">2.1 Limited, Revocable Grant</strong>
                Subject to unconditional, continuous, and verifiable compliance with every provision of this Agreement, the Licensor grants the Licensee a <strong>non-exclusive, non-transferable, non-sublicensable, revocable, and royalty-free</strong> license to: (a) reproduce the Software; (b) prepare modifications, strictly for purposes compatible with this License; and (c) distribute the Software or Derivative Works, exclusively under the terms of NXSL v2.0.
            </div>
            <div class="clause">
                <strong class="clause-id">2.2 All Rights Reserved</strong>
                Any right not expressly and unambiguously granted in Section 2.1 is hereby expressly reserved to the Licensor. Without limitation, no right is granted to: sublicense, sell, rent, lease, loan, commercially exploit, relicense, incorporate into proprietary works, or remove attribution. The enumeration of reserved rights shall not be construed as exhaustive.
            </div>
            <div class="clause">
                <strong class="clause-id">2.3 No Implied Licenses</strong>
                Acceptance of the Software in source or binary form, contribution of code, public discussion, or any other conduct shall not create any implied license, estoppel, or waiver. Only an express, written, signed instrument issued by the Licensor may create additional rights.
            </div>
        </section>

        <!-- ================= 03 ================= -->
        <section class="doc-section" id="sec-03">
            <h2><span class="sec-num">03.</span> Attribution and Notice Obligations</h2>

            <div class="clause">
                <strong class="clause-id">3.1 Mandatory Header Retention</strong>
                The Licensee shall retain, unaltered and in its entirety, all copyright notices, the NXSL identification header, and every attribution comment present in each source file, header file, module, package manifest, and configuration artifact. Removal, alteration, obfuscation, or relocation of any such notice — including but not limited to minification, bundling, transpilation, or build-step transformations that strip or mangle comments — is strictly prohibited and constitutes a material breach of this Agreement.
            </div>
            <div class="clause">
                <strong class="clause-id">3.2 License Copy Obligation</strong>
                A complete, verbatim, and unmodified copy of this License (<code>LICENSE.md</code> or equivalent) must accompany every Distribution of the Software or any Derivative Work, in a manner reasonably accessible to every recipient, including within packaged distributions, container images, and compiled artifacts where technically feasible.
            </div>
            <div class="clause">
                <strong class="clause-id">3.3 Prominent Notice of Modifications</strong>
                Every modified file shall carry a prominent, dated notice stating that changes were made and identifying the modifier, without suggesting endorsement by the Licensor. Failure to document modifications shall be treated as an attempt to obscure provenance and shall constitute grounds for immediate termination under Section 10.
            </div>
        </section>

        <!-- ================= 04 ================= -->
        <section class="doc-section" id="sec-04">
            <h2><span class="sec-num">04.</span> Network Persistence Clause (Network Copyleft)</h2>

            <div class="clause critical">
                <strong class="clause-id">4.1 Remote Network Interaction <span class="tag">[CRITICAL]</span></strong>
                If the Licensee modifies the Software, or combines it — in whole or in part, directly or indirectly — with any other software, and makes the resulting program available for Network Interaction (including, without limitation, as a web service, SaaS offering, API, microservice, smart contract, or node in a decentralized network), the Licensee is irrevocably obligated to make the <strong>complete and corresponding source code</strong> of the modified program publicly available, under the terms of NXSL v2.0, at no charge and through a channel no less accessible than the channel through which the service itself is offered.
            </div>
            <div class="clause">
                <strong class="clause-id">4.2 No Technical Workarounds</strong>
                Merely placing an intermediary layer, proxy, wrapper, plugin, API gateway, container, or network boundary between the user and the Software shall not exempt the Licensee from Section 4.1. Deploying the Software "as a service" to circumvent source-disclosure obligations is expressly recognized as Distribution and is fully subject to this Agreement.
            </div>
            <div class="clause">
                <strong class="clause-id">4.3 Continuation Obligation</strong>
                Source code made available under Section 4.1 must remain publicly accessible for as long as the corresponding Network Interaction is offered, plus no less than three (3) years after the final such interaction.
            </div>
        </section>

        <!-- ================= 05 ================= -->
        <section class="doc-section" id="sec-05">
            <h2><span class="sec-num">05.</span> Viral Nature (Strong Copyleft)</h2>

            <div class="clause">
                <strong class="clause-id">5.1 Whole-Program Licensing</strong>
                Every Derivative Work — including extensions, plugins, modules, bindings, wrappers, translations, ports, and deep integrations — must, as a condition of the grant in Section 2.1, be licensed as a whole under NXSL v2.0. No portion of a Derivative Work may be placed under any other license, whether permissive, weak-copyleft, proprietary, or any combination thereof.
            </div>
            <div class="clause">
                <strong class="clause-id">5.2 Combined Works</strong>
                If the Licensee combines the Software with other code in a single program, compilation unit, process, container, or deployable artifact such that the components cannot be reasonably separated by an end user, the entire combined work shall be licensed under NXSL v2.0. Mere mechanical aggregation on a storage or distribution medium does not trigger this Section, provided the Software remains clearly identifiable and separable.
            </div>
            <div class="clause">
                <strong class="clause-id">5.3 No Proprietary Fragmentation</strong>
                The Licensee shall not create, publish, or maintain any interface, fork, bridge, or compatibility layer whose primary purpose or effect is to enable the Software's functionality to be consumed by, or embedded within, works not licensed under NXSL v2.0.
            </div>
        </section>

        <!-- ================= 06 ================= -->
        <section class="doc-section" id="sec-06">
            <h2><span class="sec-num">06.</span> Prohibited Uses</h2>
            <p>The following uses are expressly and categorically prohibited, without exception, unless the Licensee has obtained prior written authorization under Section 7:</p>

            <div class="clause critical">
                <strong class="clause-id">6.1 Closed-Source Incorporation</strong>
                It is strictly prohibited to incorporate the Software, in whole or in part, into any closed-source, proprietary, or non-NXSL-licensed project, product, service, or artifact, including as a dependency, static or dynamic library, embedded module, microservice, or compiled component.
            </div>
            <div class="clause">
                <strong class="clause-id">6.2 Direct Commercial Exploitation</strong>
                The Software shall not be sold, licensed, rented, leased, offered as a paid service, bundled with commercial offerings, used to provide commercial support, or otherwise exploited for direct commercial advantage.
            </div>
            <div class="clause">
                <strong class="clause-id">6.3 Sublicensing and Relicensing</strong>
                The Licensee shall not grant sublicenses, relicense, or purport to grant any rights in the Software to any third party. Every recipient must receive rights directly from this License.
            </div>
            <div class="clause">
                <strong class="clause-id">6.4 Use in Prohibited Domains</strong>
                The Software shall not be used, directly or indirectly, in or for: surveillance systems; weapons development or military applications; biometric identification or tracking of natural persons; data mining for advertising profiling; blockchain or cryptocurrency instruments facilitating securities offerings or unregistered tokens; or any activity violating applicable law. The Licensor retains sole discretion to designate additional prohibited domains by written notice.
            </div>
            <div class="clause">
                <strong class="clause-id">6.5 Removal of Protections</strong>
                It is prohibited to remove, disable, bypass, or circumvent any license notice, copyleft mechanism, attribution requirement, or technical protection associated with the Software.
            </div>
        </section>

        <!-- ================= 07 ================= -->
        <section class="doc-section" id="sec-07">
            <h2><span class="sec-num">07.</span> Commercial Licensing and Formal Authorization</h2>

            <div class="clause">
                <strong class="clause-id">7.1 Separate Commercial Agreement Required</strong>
                Any use falling outside the narrow scope of Section 2.1 — including any commercial, proprietary, closed-source, or otherwise restricted use — requires a separate, individual, written commercial licensing agreement executed by an authorized representative of Nexora Inc. No standard terms, purchase orders, click-through agreements, or third-party terms shall override this requirement.
            </div>
            <div class="clause">
                <strong class="clause-id">7.2 Silence Is Not Consent</strong>
                No consent, permission, waiver, or exception shall be inferred from the Licensor's silence, inaction, delay, prior course of dealing, or failure to enforce any provision. Authorization must be express, prior, written, and signed. An authorization, if granted, applies only to the specific use described therein and to no other.
            </div>
            <div class="clause">
                <strong class="clause-id">7.3 Contact</strong>
                Commercial licensing inquiries must be directed to the Licensor through the official channels published at the License URL referenced in Section 15. Verbal statements by any person shall have no legal effect.
            </div>
        </section>

        <!-- ================= 08 ================= -->
        <section class="doc-section" id="sec-08">
            <h2><span class="sec-num">08.</span> Patents and Trademarks</h2>

            <div class="clause">
                <strong class="clause-id">8.1 No Patent Grant</strong>
                Nothing in this Agreement shall be construed as granting, expressly or impliedly, any license under any patent, patent application, or other industrial property right of the Licensor. The use of the Software does not confer immunity from, or license to practice, any patented invention.
            </div>
            <div class="clause">
                <strong class="clause-id">8.2 Patent Retaliation</strong>
                If the Licensee initiates any patent infringement claim alleging that the Software, in its unmodified form as distributed by the Licensor, infringes a patent owned or controlled by the Licensee, all rights granted to the Licensee under this Agreement shall terminate automatically and immediately.
            </div>
            <div class="clause">
                <strong class="clause-id">8.3 Trademark Reservation</strong>
                No rights to the names "Nexora", "Nexus Secure License", "NXSL", or any associated logos, marks, or trade dress are granted. The Licensee shall not use such marks to endorse, promote, or describe Derivative Works without prior written permission.
            </div>
        </section>

        <!-- ================= 09 ================= -->
        <section class="doc-section" id="sec-09">
            <h2><span class="sec-num">09.</span> Audit and Compliance Verification</h2>

            <div class="clause">
                <strong class="clause-id">9.1 Self-Monitoring Obligation</strong>
                The Licensee bears the exclusive and continuing burden of ensuring compliance with this Agreement, including monitoring the conduct of its employees, contractors, affiliates, and downstream recipients.
            </div>
            <div class="clause">
                <strong class="clause-id">9.2 Disclosure Upon Reasonable Request</strong>
                Upon reasonable written request by the Licensor, the Licensee shall, within thirty (30) days, provide written confirmation of compliance, including the locations where source code is published, the scope of any Network Interaction, and the identities of recipients to whom the Software has been distributed.
            </div>
            <div class="clause">
                <strong class="clause-id">9.3 No Waiver by Delay</strong>
                The Licensor's failure to request verification, or to detect a breach, at any time shall not constitute acquiescence, waiver, or estoppel, and shall not limit remedies available for any breach, whenever discovered.
            </div>
        </section>

        <!-- ================= 10 ================= -->
        <section class="doc-section" id="sec-10">
            <h2><span class="sec-num">10.</span> Termination</h2>

            <div class="clause critical">
                <strong class="clause-id">10.1 Automatic Termination</strong>
                This Agreement and all rights granted hereunder terminate automatically, immediately, and without notice upon: (a) any breach of Sections 3, 4, 5, or 6; (b) initiation of patent litigation under Section 8.2; or (c) any attempt to sublicense, relicense, or commercially exploit the Software without authorization.
            </div>
            <div class="clause">
                <strong class="clause-id">10.2 Consequences of Termination</strong>
                Upon termination, the Licensee shall immediately cease all use, reproduction, modification, and distribution of the Software and all Derivative Works, and shall destroy or permanently remove all copies in its possession or control, including from public repositories, registries, and deployed services, within fourteen (14) days.
            </div>
            <div class="clause">
                <strong class="clause-id">10.3 Irrevocability for Compliant Recipients</strong>
                Rights granted to recipients who received the Software in full compliance with this Agreement shall not be revoked on account of the Licensee's breach; however, no recipient acquires any right greater than those conferred by NXSL v2.0.
            </div>
        </section>

        <!-- ================= 11 ================= -->
        <section class="doc-section" id="sec-11">
            <h2><span class="sec-num">11.</span> Disclaimer of Warranty</h2>

            <div class="callout danger">
                <div class="callout-title">&#9888; LEGAL NOTICE — DISCLAIMER</div>
                <p>
                    THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, SECURITY, AND UNINTERRUPTED OR ERROR-FREE OPERATION. THE ENTIRE RISK ARISING OUT OF THE USE OR PERFORMANCE OF THE SOFTWARE REMAINS WITH THE LICENSEE. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY THE LICENSOR OR ITS REPRESENTATIVES SHALL CREATE ANY WARRANTY.
                </p>
            </div>
        </section>

        <!-- ================= 12 ================= -->
        <section class="doc-section" id="sec-12">
            <h2><span class="sec-num">12.</span> Limitation of Liability</h2>
            <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL <strong>NEXORA INC.</strong>, THE ORIGINAL DEVELOPERS, CONTRIBUTORS, OR LICENSORS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY — WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE — ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE, THE USE THEREOF, OR THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION APPLIES REGARDLESS OF THE THEORY OF LIABILITY AND SHALL SURVIVE TERMINATION OF THIS AGREEMENT.
            </p>
        </section>

        <!-- ================= 13 ================= -->
        <section class="doc-section" id="sec-13">
            <h2><span class="sec-num">13.</span> Indemnification</h2>
            <p>
                The Licensee agrees to indemnify, defend, and hold harmless Nexora Inc., the original developers, contributors, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) the Licensee's use, modification, or distribution of the Software; (b) any breach of this Agreement by the Licensee or its downstream recipients; or (c) any violation of applicable law by the Licensee in connection with the Software.
            </p>
        </section>

        <!-- ================= 14 ================= -->
        <section class="doc-section" id="sec-14">
            <h2><span class="sec-num">14.</span> Governing Law, Severability, and Entire Agreement</h2>

            <div class="clause">
                <strong class="clause-id">14.1 Governing Law</strong>
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction designated by the Licensor in the official License repository, without regard to conflict-of-law principles.
            </div>
            <div class="clause">
                <strong class="clause-id">14.2 Severability</strong>
                If any provision of this Agreement is held invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.
            </div>
            <div class="clause">
                <strong class="clause-id">14.3 No Waiver</strong>
                No failure or delay by the Licensor in exercising any right shall operate as a waiver of that or any other right.
            </div>
            <div class="clause">
                <strong class="clause-id">14.4 Entire Agreement</strong>
                This Agreement constitutes the entire agreement between the parties concerning the Software and supersedes all prior or contemporaneous communications, proposals, and representations.
            </div>
        </section>

        <!-- ================= 15 ================= -->
        <section class="doc-section" id="sec-15">
            <h2><span class="sec-num">15.</span> Implementation Guide</h2>
            <p>
                For immediate compliance, insert the block below — <strong>unmodified</strong> — at the top of every source file, and include a verbatim copy of this license as <code>LICENSE.md</code> in the root of every distribution:
            </p>

            <div class="code-wrap">
                <button class="copy-btn" id="copyBtn" type="button" aria-label="Copy license header">Copy</button>
                <pre id="licenseBlock"><code>/**
 * Licensed under NEXUS SECURE LICENSE (NXSL) v2.0
 * --------------------------------------------------------
 * 1. Mandatory attribution: retain this header, unaltered.
 * 2. Network-based interaction requires full source disclosure.
 * 3. Strong copyleft: derivative works must be NXSL v2.0.
 * 4. NO WARRANTY: Software provided strictly "AS IS".
 * 5. Commercial / proprietary use requires prior written
 *    authorization from Nexora Inc. Silence is not consent.
 * Full Terms: https://nexoraofc.github.io/NXL2
 */</code></pre>
            </div>
        </section>

        <!-- ================= 16 ================= -->
        <section class="doc-section" id="sec-16">
            <h2><span class="sec-num">16.</span> Frequently Asked Questions</h2>

            <details class="faq-item">
                <summary>Can I use NXSL-licensed code in my SaaS product?</summary>
                <div class="faq-body">Only if you publicly release the <b>complete and corresponding source code</b> of your entire service under NXSL v2.0 (Section 4.1). Hosting it behind an API does <b>not</b> exempt you. If you intend to keep any part closed or commercial, you must obtain a separate written commercial license first.</div>
            </details>

            <details class="faq-item">
                <summary>Can I use it in a closed-source or proprietary project?</summary>
                <div class="faq-body"><b>No.</b> Incorporation into any closed-source project is strictly prohibited (Section 6.1) and terminates your rights automatically (Section 10.1).</div>
            </details>

            <details class="faq-item">
                <summary>Can I sell the software or offer paid support for it?</summary>
                <div class="faq-body"><b>No.</b> Direct commercial exploitation, sale, and paid services based on the Software are prohibited (Section 6.2) without prior written authorization under Section 7.</div>
            </details>

            <details class="faq-item">
                <summary>What happens if I remove the license header during minification/build?</summary>
                <div class="faq-body">Stripping attribution comments through build steps, bundlers, or minifiers is an explicit breach (Section 3.1) that triggers automatic termination (Section 10.1) and exposure to liability.</div>
            </details>

            <details class="faq-item">
                <summary>What if I'm unsure whether my use is permitted?</summary>
                <div class="faq-body">Then <b>it is not permitted</b>. NXSL grants only the minimum rights expressly stated. Seek written authorization from Nexora Inc. before proceeding — silence or inaction is never consent (Section 7.2).</div>
            </details>

            <details class="faq-item">
                <summary>Does contributing code to an NXSL project transfer my copyright?</summary>
                <div class="faq-body">No transfer occurs by default; however, by contributing you agree that your contribution is licensed under NXSL v2.0 and becomes subject to its copyleft provisions. Submitting code implies acceptance of all terms herein.</div>
            </details>
        </section>

        <footer class="doc-footer">
            <p><strong>NEXUS SECURE LICENSE (NXSL) v2.0</strong> — &copy; Nexora Inc. All rights reserved except those expressly granted herein. This document is legal text; in case of ambiguity, the most restrictive reasonable interpretation prevails.</p>
        </footer>

    </main>
</div>

<script>
// --- Back button: prefers history, falls back to hub ---
document.getElementById('backBtn').addEventListener('click', function () {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
});

// --- Copy license header ---
(function () {
    var btn = document.getElementById('copyBtn');
    var block = document.getElementById('licenseBlock');
    btn.addEventListener('click', function () {
        var text = block.innerText;
        var done = function () {
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(function () {
                btn.textContent = 'Copy';
                btn.classList.remove('copied');
            }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
        } else {
            fallback();
        }
        function fallback() {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch (e) {}
            document.body.removeChild(ta);
            done();
        }
    });
})();

// --- Scroll-spy for TOC ---
(function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('#toc a'));
    var sections = links.map(function (a) {
        return document.querySelector(a.getAttribute('href'));
    });

    function spy() {
        var pos = window.scrollY + 90;
        var current = 0;
        for (var i = 0; i < sections.length; i++) {
            if (sections[i] && sections[i].offsetTop <= pos) current = i;
        }
        links.forEach(function (a, i) {
            a.classList.toggle('active', i === current);
        });
    }

    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('load', spy);
    spy();
})();
</script>

</body>
</html>
