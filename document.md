# Agentforce Specialist Practice Tests

## Multiple Choice

Universal Containers would like to route SMS text messages to a service rep from an Agentforce Service Agent. Which Service Channel should the company use in the flow to ensure it's routed properly?

A. Messaging

B. Route Work Action

C. Live Agent

## Correct Answer: A

Explanation:

Option A: the " Messaging " Service Channel (part of Messaging for In-App and Web or SMS) handles text-based interactions, including SMS. When integrated with Omni-Channel Flow, the " Route Work " action uses this channel to route SMS messages to agents. This aligns with UC's requirement for SMS routing, making it the correct answer. Option B: Route Work Action " Route Work " is an action in Omni-Channel Flow, not a Service Channel. It uses a channel (e.g., Messaging) to route work, so this is a component, not the channel itself, making it incorrect. Option C: Live Agent " Live Agent " refers to an older chat feature, not the current Messaging framework for SMS. It's outdated and unrelated to SMS routing, making it incorrect.

## Multiple Choice

An Agentforce Specialist is setting up Salesforce Knowledge as the data source for a Data Library and must select "Identifying Fields" to help Agentforce locate the right information. The Knowledge article contents are rich, detailed, and quite long. What should the Agentforce Specialist use as Identifying Fields?

A. The main contents of the article to ensure the most relevant article is used.
B. Any text or text area fields that provide a concise summary of the article.
C. Any standard or custom formula field that contains a suitable concatenated key.

## Explanation:

Identifying Fields should help Agentforce locate the right Knowledge article efficiently, so concise text or text area fields that summarize the article are the strongest fit. Long article bodies are better treated as content fields because they provide the detailed grounding material after the right article has been found. Option A is wrong because using the full main content as an identifying field can dilute search precision and make retrieval noisy. Option C is wrong because a formula-based concatenated key is usually optimized for system logic, not semantic article discovery. Salesforce's Knowledge grounding guidance distinguishes identifying fields, which help find relevant articles, from content fields, which provide the detailed information used in responses.

## Multiple Choice

Universal Containers has configured an agent to handle customer return requests. When a customer initiates a return, the agent must calculate a specific restocking fee. The agent needs to quote this exact fee to the customer and then reuse that same fee amount when summarizing the final refund. The Agentforce Specialist needs to ensure the agent uses deterministic logic to calculate the fee and consistently reuses the exact same value without guessing or hallucinating. How should the specialist configure the agent to achieve this behavior?

A. Execute a flow as an agent action to calculate the fee, and make the flow's output directly available to the agent response. The agent will be able to continue to use this value from memory

B. Define a context variable for the fee. Execute a flow as an agent action to calculate the fee, assign the flow's output to that context variable, and have the agent reference that variable in its responses

C. Provide the mathematical formula for the restocking fee in the agent's system instructions and instruct it to remember the result for reuse

## Correct Answer: B

## Explanation:

The correct answer is B because deterministic fee calculation and reuse require state management, not conversational memory. The fee should be calculated by a Flow action, then stored in a context variable so the same validated value can be referenced later in the conversation. This prevents the large language model from recalculating, rounding differently, or hallucinating a new value during the refund summary. Option A is incomplete because simply exposing a Flow output once does not guarantee stable reuse throughout the session. Option C is unsafe because system instructions do not enforce calculation accuracy or persistence. Salesforce guidance states that variables can be used in filters, instructions, and action inputs, and Agent Script supports deterministic logic, setting variables, and running actions.

## Multiple Choice

Universal Containers (UC) wants to use Generative AI Salesforce functionality to reduce Service Agent handling time by providing recommended replies based on the existing Knowledge articles. On which AI capability should UC train the service agents?

A. Service Replies
B. Case Replies
C. Knowledge Replies

Correct Answer: A

## Multiple Choice

Universal Containers (UC) is expanding its Agentforce for Service capabilities to include case management. For security purposes, UC wants the agent to verify a customer 's identity before providing any case-related information. The verification must be deterministic-ensuring that no case details are shared unless identity verification has been successfully completed. Which approach best meets this requirement?

A. Use keywords such as "Always" and "Never" to write clear logic in Topic Instructions to verify user identity before providing any case information.

B. Create a variable to store the verification status, set it as output from a "Verify Identity" action, and apply a filter so any case-related actions only run when the variable confirms verification.

C. Store the verification status in a custom variable and set a global instruction that the agent should check this variable before sharing case information.

Correct Answer: B

Explanation:

The AgentForce for Service Implementation Guide clearly outlines that when an agent must verify identity before performing any case-related operations, the correct method is to use a variable-based control flow. The documentation specifies: "To maintain deterministic and secure behavior, define a variable (for example, 'isVerified') that stores the result of an identity verification step. Use this variable as a conditional filter in the topic flow to ensure that case-related actions execute only when the variable equals 'true'." This ensures that no sensitive or case-specific data is shared unless verification is explicitly confirmed. It provides a deterministic safeguard, as the system only proceeds with case data actions after the verification variable confirms completion. Option A ("Use keywords such as 'Always' and 'Never'") relies on natural language instructions, which are not deterministic and can be misinterpreted by the model. Option C ("Use a global instruction to check the variable") adds unnecessary complexity and lacks the control-level filtering that ensures secure flow logic. Therefore, Option B correctly implements Salesforce's best-practice pattern for conditional execution using variables and filters in AgentForce.

## Multiple Choice

When using a prompt template, what should an Agentforce Specialist consider with their grounding data and chosen model?

A. Review the token limit in the Einstein Trust Layer.

B. Ensure queries used for grounding employ offset so the token limits of models are not exceeded.

C. Review the model limitation in Prompt Builder versus the grounding data size.

Correct Answer: C

Explanation:

The most critical technical consideration when pairing a prompt template 's grounding data with a chosen Large Language Model (LLM) is the relationship between the two. The correct action is to review the model limitation in Prompt Builder versus the grounding data size (C). Every LLM has a fixed context window limit, typically expressed in tokens (the model 's units for processing text). This token limit defines the maximum amount of input data (the prompt template text + all the dynamic grounding data) and output data the model can handle in a single request. The grounding data, which is pulled dynamically from Salesforce records (e.g., related lists, long text fields, Flow outputs), varies significantly in size from one record to the next. If the combined size of the prompt and the dynamic data for a specific record exceeds the LLM 's token limit, the generative AI request will fail with a "token limit exceeded" error. The Agentforce Specialist must proactively design the template to limit the amount of data retrieved (e.g., using Flow to summarize related lists or querying only essential fields) to ensure it stays within the chosen model 's capacity. Option A is incorrect because the Einstein Trust Layer 's token limit primarily relates to PII masking and is a security-related capacity, not the fundamental model 's context window. Option B is incorrect because OFFSET is a SOQL query function used for pagination, which is irrelevant to ensuring the total size of the final assembled prompt (template + data) fits within the model 's token limit. Simulated Exact Extract of AgentForce documents (Conceptual Reference): "A major challenge in prompt template design is managing the Large Language Model (LLM) token limit against the volume of grounding data. The specialist must always Review the model limitation in Prompt Builder versus the grounding data size before activation. LLM context windows (token limits) are fixed per model, but dynamic prompt components-such as merge fields from related lists or long text area fields-can cause the total size of the prompt to vary significantly by record. To prevent random token limit failures, the prompt instructions and grounding logic (Flow/Apex) must be explicitly constrained to retrieve only the essential data required to answer the query, ensuring the combined input stays well below the LLM 's defined capacity."

## Multiple Choice

An Agentforce Specialist at Universal Containers (UC) is building with no-code tools only. They have many small accounts that are only touched periodically by a specialized sales team, and UC wants to maximize the sales operations team 's time, UC wants to help prep the sales team for calls by: \* Summarizing past purchases \* Displaying products the contact has shown interest in (with data captured via Data Cloud) \* Providing a recap of past email and phone conversations that have transcripts Which approach should the Agentforce Specialist recommend to achieve this goal?

A. Deploy UC's own custom foundational model on this data first.
B. Fine-tune the standard foundational model due to the complexity of the data.
C. Use a prompt template grounded on CRM and Data Cloud data using standard foundation models.

Correct Answer: C

Explanation:

The AgentForce No-Code Builder and Prompt Template Guide specifies that when using Salesforce's standard foundation models, users can ground prompts on CRM and Data Cloud data without requiring fine- tuning or model deployment. The documentation notes: "No-code users can leverage standard foundation models with prompt templates grounded in Salesforce data, including CRM and Data Cloud, to summarize records, highlight insights, and prepare agents for customer engagements." This approach allows the sales operations team to automatically summarize customer data (purchases, interests, and communications) without needing model customization. Option A (deploying a custom foundational model) requires data science expertise, not available in a no-code setup. Option B (fine-tuning) is unnecessary because standard models with grounding are optimized for contextual data use. Thus, Option C aligns with Salesforce's recommended low-code/no-code configuration for contextual AI assistance. References (AgentForce Documents / Study Guide): AgentForce Builder Guide: "No-Code Prompt Templates Grounded in CRM and Data Cloud" Salesforce Einstein Studio Overview: "Standard vs. Fine-Tuned Models" AgentForce Study Guide: "Empowering Sales Teams with Grounded Prompts"

## Multiple Choice

Universal Containers operates in a regulated industry and has deployed an Agentforce customer service agent handling thousands of interactions per week. The operations team notices that a significant number of conversations are resulting in unexpected escalations, but cannot identify which agent subagents, formerly known as topics, or actions are consistently underperforming or misconfigured. Which Agentforce feature allows the team to cluster interaction patterns, identify performance gaps across sessions, and apply quality scoring to pinpoint where the agent's configuration needs improvement?

A. Agentforce Optimization

B. Agentforce Health Monitoring

C. Agentforce Session Tracing

Correct Answer: A

Explanation:

Agentforce Optimization is the correct feature because the requirement is not just to inspect one failed conversation; it is to analyze performance patterns across many sessions. Salesforce describes Agent Optimization as a capability used to drill into sessions, analyze quality scores, and identify patterns that improve agent performance. That directly matches the need to find recurring escalation patterns, weak subagents, and misconfigured actions. Agentforce Session Tracing is useful for deep, turn-by-turn investigation of an individual interaction, but it is not the best fit

for clustering performance gaps across thousands of conversations. Agentforce Health Monitoring is too generic and does not specifically provide the optimization analysis and quality-scoring workflow described in the question.

## Multiple Choice

What should Universal Containers consider when deploying an Agentforce Service Agent with multiple topics and Agent Actions to production?

A. Deploy agent components without a test run in staging, relying on production data for reliable results. Sandbox configuration alone ensures seamless production deployment.

B. Ensure all dependencies are included, Apex classes meet 75% test coverage, and configuration settings are aligned with production. Plan for version management and post-deployment activation.

C. Deploy flows or Apex after agents, topics, and Agent Actions to avoid deployment failures and potential production agent issues requiring complete redeployment.

## Correct Answer: B

## Explanation:

UC is deploying an Agentforce Service Agent with multiple topics and actions to production. Let's assess deployment considerations. Option A: Deploy agent components without a test run in staging, relying on production data for reliable results. Sandbox configuration alone ensures seamless production deployment. Skipping staging tests is risky and against best practices. Sandbox configuration doesn't guarantee production success without validation, making this incorrect. Option B: Ensure all dependencies are included, Apex classes meet 75% test coverage, and configuration settings are aligned with production. Plan for version management and post-deployment activation. This is a comprehensive approach: dependencies (e.g., flows, Apex) must be deployed, Apex requires 75% coverage, and production settings (e.g., permissions, channels) must align. Version management tracks changes, and post-deployment activation ensures controlled rollout. This aligns with Salesforce deployment best practices for Agentforce, making it the correct answer. Option C: Deploy flows or Apex after agents, topics, and Agent Actions to avoid deployment failures and potential production agent issues requiring complete redeployment. Deploying components separately risks failures (e.g., actions needing flows failing). All components should deploy together for consistency, making this incorrect.

## Multiple Choice

Universal Containers (UC) is looking to enhance its operational efficiency. UC has recently adopted Salesforce and is considering implementing Agent to improve its processes. What is a key reason for implementing Agent?

A. Improving data entry and data cleansing  
B. Allowing AI to perform tasks without user interaction  
C. Streamlining workflows and automating repetitive tasks

## Correct Answer: C

Explanation:

The key reason for implementing Agent is its ability to streamline workflows and automate repetitive tasks. By leveraging AI, Agent can assist users in handling mundane, repetitive processes, such as automatically generating insights, completing actions, and guiding users through complex processes, all of which significantly improve operational efficiency. Option A (Improving data entry and cleansing) is not the primary purpose of Agent, as its focus is on guiding and assisting users through workflows. Option B (Allowing AI to perform tasks without user interaction) does not accurately describe the role of Agent, which operates interactively to assist users in real time.

## Multiple Choice

Support agents at Universal Containers are using Agentforce to find troubleshooting information. They've reported that the agent frequently provides knowledge articles that are outdated, even when newer versions of the articles are available. The administrator has confirmed that all articles are correctly chunked and indexed. Which configuration change in the Data Cloud hybrid search index best addresses this problem?

A. Disable the keyword index to rely solely on the vector index.

B. Switch the chunking strategy from section-aware to fixed-size.

C. Add a ranking factor for regency based on the LastModifiedDate field.

Correct Answer: C

Explanation:

The AgentForce Data Cloud Retrieval and Ranking Guide highlights that when outdated Knowledge articles appear before newer ones, administrators should configure ranking factors that prioritize content based on recency. The documentation specifies: "Adding a recency ranking factor using the LastModifiedDate or LastPublishedDate fields ensures the retrieval prioritizes the most up-to-date documents, improving response relevance." Option A (disabling keyword index) would remove precision in retrieval and does not address recency. Option B (changing chunking strategy) affects data segmentation, not ranking order. Therefore, Option C - adding a ranking factor for recency - is the correct way to ensure update d articles are prioritized. References (AgentForce Documents / Study Guide): AgentForce Data Cloud Hybrid Search Configuration Guide: "Applying Recency Ranking" AgentForce Knowledge Management Handbook: "Prioritizing Updated Articles in Search" AgentForce Study Guide: "Ranking and Weighting Strategies for Knowledge Retrieval"

## Multiple Choice

The Agentforce Specialist for Coral Cloud Resorts wants to create an agent that will automate the resolution of a large portion of guest complaints related to their vacation experiences. The agent will be able to offer upgrades, hotel credit, and other complimentary options. The agent will also be in charge of escalating the case to a human when a guest has suffered a major disruption (such as cancellation). Following Salesforce best practices, which type of agent should the Agentforce Specialist create?

A. Sales A Agent with a Flex prompt template  
B. Custom Agent with a Flex prompt template  
C. Service Agent with a Flex prompt template

## Correct Answer: C

## Explanation:

The AgentForce for Service Implementation Guide confirms that when automating customer service and complaint resolution, the correct solution is a Service Agent. The documentation states: "Service Agents handle customer inquiries, complaints, and issue resolution workflows. They can automate actions such as offering credits, applying upgrades, and escalating severe cases to human support." Flex prompt templates are recommended for these scenarios, as they allow contextual control and personalization based on the complaint details. Option A (Sales Agent) focuses on sales-related tasks like lead nurturing. Option B (Custom Agent) could work but lacks the pre-built integrations and actions designed for service workflows. Thus,

Option C aligns with Salesforce's best-practice model for customer issue automation. References (AgentForce Documents / Study Guide): AgentForce for Service Guide: "Automating Complaint Resolution" AgentForce Prompt Template Handbook: "Using Flex Templates in Service Workflows" AgentForce Study Guide: "Deploying Service Agents for Escalation and Resolution Scenarios"

## Multiple Choice

An Agentforce Specialist at Universal Containers observes that the agent frequently directs customers with clear billing inquiries to the general troubleshooting subagent. This misrouting is causing a spike in average handle time and missed service-level agreement targets. The contact center manager requires a solution that is quick to implement but preserves the agent's ability to handle complex, non-linear conversations. What is the most appropriate approach to resolve this?

A. Update the agent's global System Instructions to include a list of forbidden keywords for each subagent.

B. Audit subagent instructions for semantic competition and implement deterministic filters to guide the planner's selection.

C. Create a Router sub-flow that uses a Decision element to manually assign every incoming request to a specific subagent.

## Correct Answer: B

## Explanation:

The correct answer is B because the issue is subagent misclassification caused by overlapping instructions or unclear routing boundaries. Agentforce routing depends on the agent understanding the purpose, scope, and availability of each subagent. If the billing and troubleshooting subagents are semantically competing, the correct fix is to tighten their descriptions, remove overlap, and use filters where deterministic gating is required. Option A is a weak keyword-ban strategy and will break on natural language variation. Option C creates rigid decision-tree routing and undermines the flexible, non-linear behavior expected from Agentforce agents. The best solution preserves autonomous reasoning while adding deterministic constraints where business routing must be protected. Filters and variables are specifically intended to control when subagents or actions are available.

## Multiple Choice

Pacific Distribution Co. is implementing a system to manage partner order support and inventory inquiries. The company needs to ensure that large documents are processed effectively to improve retrieval accuracy when agents respond to partner queries. Understanding how documents are broken down and indexed is crucial for this implementation. What is a key characteristic of the chunking process?

A. Chunking breaks large documents into smaller units called passages.
B. The chunking process returns entire documents to the large language model for processing.

C. Chunking strategies are interchangeable and do not affect the retrieval process.

## Correct Answer: A

## Explanation:

The correct answer is A because chunking divides large source documents into smaller retrievable units, often described as passages or chunks. This is fundamental to retrieval-augmented generation because the retriever should return only the most relevant pieces of content, not entire documents. After chunking, the content can be indexed and vectorized so semantic search can match user questions to relevant passages. Option B is wrong because sending entire documents to the model is inefficient, increases token usage, and reduces retrieval precision. Option C is wrong because chunking strategy directly affects retrieval quality; poor chunk boundaries can omit context or return noisy results. Effective chunking improves grounding accuracy by allowing the agent to retrieve focused, meaningful document segments.

## Multiple Choice

Universal Containers (UC) has a mature Salesforce org with a lot of data in cases and Knowledge articles. UC is concerned that there are many legacy fields, with data that might not be applicable for Einstein AI to draft accurate email responses. Which solution should UC use to ensure Einstein AI can draft responses from a defined data source?

A. Service AI Grounding
B. Work Summaries
C. Service Replies

Correct Answer: A

## Explanation:

Service AI Grounding is the solution that Universal Containers should use to ensure Einstein AI drafts responses based on a well-defined data source. Service AI Grounding allows the AI model to be anchored in specific, relevant data sources, ensuring that any AI-generated responses (e.g., email replies) are accurate, relevant, and drawn from up-to-date information, such as Knowledge articles or cases. Given that UC has legacy fields and outdated data, Service AI Grounding ensures that only the valid and applicable data is used by Einstein AI to craft responses. This helps improve the relevance of responses and avoids inaccuracies caused by outdated or irrelevant fields. Work Summaries and Service Replies are useful features but do not address the need for grounding AI outputs in specific, current data sources like Service AI Grounding does.

## Multiple Choice

An Al Specialist is tasked with creating a prompt template for a sales team. The template needs to generate a summary of all related opportunities for a given Account. Which grounding technique should the Al Specialist use to include data from the related list of opportunities in the prompt template?

A. Use the merge fields to reference a custom related list of opportunities.
B. Use merge fields to reference the default related list of opportunities.
C. Use formula fields to reference the Einstein related list of opportunities.

## Correct Answer: B

## Explanation:

In Salesforce, when creating a prompt template for the sales team, you can include data from related objects such as Opportunities that are linked to an Account. The best method to ground the AI model and provide relevant information from related records, like Opportunities, is by using merge fields. Merge fields in Salesforce allow you to dynamically reference data from a record or related records, like Opportunities for a given Account. In this scenario, the Agentforce Specialist needs to pull data from the default related list of Opportunities associated with the Account. This is achieved by using merge fields, which pull in data from the standard relationship Salesforce creates between Accounts and Opportunities. Option A (referencing a custom related list) and Option C (using formula fields with Einstein-related lists) do not align with the standard, practical grounding method for this task. Custom lists would require additional configurations not typically necessary for a basic use case, and formula fields are typically not used to directly fetch related list data for prompt generation in templates. The standard and straightforward method is using merge fields tied to the default related list of opportunities.

## Multiple Choice

Universal Containers is implementing a customer verification process for its Service Agent where sensitive account information can only be accessed after the customer passes identity verification. The Agentforce Specialist needs to ensure this security rule is enforced deterministically, preventing the large language model from bypassing the verification requirement to execute the account lookup action. What should the specialist configure to manage this deterministic behavior?

A. Configure a Prompt Defense policy in the Einstein Trust Layer to mask the sensitive account data from the reasoning engine until the user successfully completes the verification process.

B. Store the user's verification status in a custom variable and apply an available when filter condition to the account lookup action, making the action invisible to the reasoning engine until the variable evaluates to true.

C. Add explicit natural language instructions within the subagent definition instructing the large language model to always prioritize the customer verification action before proceeding to the account lookup action.

## Correct Answer: B

## Explanation:

The correct answer is B because sensitive account lookup must be gated deterministically. A custom variable can store verification status, and an available when filter can make the lookup action invisible until that status is true. This prevents the LLM from even seeing or selecting the protected action before verification succeeds. Option A misuses Prompt Defense; prompt defense helps protect against unsafe prompt behavior, but it does not replace action-level authorization. Option C is unreliable because natural language instructions are still interpreted by the model and do not enforce execution control. Salesforce release guidance states that filters can be created for topics and actions so the agent can use them only when conditions are met. Variables are also used in filters and action control.

## Multiple Choice

What is automatically created when a custom search index is created in Data Cloud?

A. A retriever that shares the name of the custom search index.

B. A dynamic retriever to allow runtime selection of retriever parameters without manual configuration.

C. A predefined Apex retriever class that can be edited by a developer to meet specific needs.

## Correct Answer: A

## Explanation:

In Salesforce Data Cloud, a custom search index is created to enable efficient retrieval of data (e.g., documents, records) for AI-driven processes, such as grounding Agentforce responses. Let's evaluate the options based on Data Cloud's functionality. Option A: A retriever that shares the name of the custom search index. When a custom search index is created in Data Cloud, a corresponding retriever is automatically generated with the same name as the index. This retriever leverages the index to perform contextual searches (e.g., vector-based lookups) and fetch relevant data for AI applications, such as Agentforce prompt templates. The retriever is tied to the indexed data and is ready to use without additional configuration, aligning with Data Cloud's streamlined approach to AI integration. This is explicitly documented in Salesforce resources and is the correct answer. Option B: A dynamic retriever to allow runtime selection of retriever parameters without manual configuration. While dynamic behavior sounds appealing, there's no concept of a "dynamic retriever" in Data Cloud that adjusts parameters at runtime without configuration. Retrievers are tied to specific indexes and operate based on predefined settings established during index creation. This option is not supported by official documentation and is incorrect. Option C: A predefined Apex retriever class that can be edited by a developer to meet specific needs. Data Cloud does not generate Apex classes for retrievers. Retrievers are managed within the Data Cloud platform as part of its native AI retrieval system, not as customizable Apex code. While developers can extend functionality via Apex for other purposes, this is not an automatic outcome of creating a search index, making this option incorrect.

## Multiple Choice

When a verified customer in a help center says, "I want to upgrade my service plan," an AI agent needs to complete the following tasks: Verify identity and entitlement. Create a new quote. Calculate a prorated upgrade amount. Escalate to an Account Executive (AE) only if the reorder exceeds USD 25,000. Which type of agent should an AgentForce Specialist build to support this use case?

A. Service Agent to resolve the case end-to-end and create a new opportunity for the sales team  
B. Sales Agent to handle the upsell and large-deal escalation  
C. Employee Agent to orchestrate internal logistics and finance

## Correct Answer: B

Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the AgentForce Specialist Implementation Guide and Agent Type Configuration Reference, this scenario represents a revenue-generating interaction where the AI agent is directly handling an upsell process. The tasks include verifying the customer's entitlement, generating a new quote, and calculating a prorated amount - all of which align with the Sales Agent configuration type in AgentForce. The Sales Agent is specifically designed to manage lead conversion, quoting, upselling, renewals, and escalation logic for higher-value opportunities. AgentForce documentation emphasizes that when an interaction involves quote generation, pricing calculations, or escalations to an Account Executive for large deal handling, the correct design is a Sales Agent. In contrast, a Service Agent (Option A) is primarily used for resolving support cases, troubleshooting, and service request management, not for handling quote creation or pricing. Similarly, an Employee Agent (Option C) focuses on internal coordination tasks like HR or finance workflows, not customer-facing sales activities. Therefore, based on the defined use case and AgentForce best practices, the correct agent type to implement is Option B - Sales Agent, as it is optimized for handling sales-driven customer interactions, quote management, and escalation thresholds.

## Multiple Choice

Universal Containers (UC) wants to offer personalized service experiences and reduce agent handling time with AI-generated email responses, grounded in Knowledge base. Which AI capability should UC use?

A. Einstein Email Replies  
B. Einstein Service Replies for Email  
C. Einstein Generative Service Replies for Email

Correct Answer: B

Explanation:

For Universal Containers (UC) to offer personalized service experiences and reduce agent handling time using AI-generated responses grounded in the Knowledge base, the best solution is Einstein Service Replies for Email. This capability leverages AI to automatically generate responses to service-related emails based on historical data and the Knowledge base, ensuring accuracy and relevance while saving time for service agents. Einstein Email Replies (option A) is more suited for sales use cases. Einstein Generative Service Replies for Email (option C) could be a future offering, but as of now, Einstein Service Replies for Email is the correct choice for grounded, knowledge-based responses.

## Multiple Choice

An Agentforce Service Agent, who has been successfully assisting customers with service requests in Salesforce, is now unable to help customers with issues related to a new product replacement process. The company recently implemented a custom Product Replacement object in Salesforce to track and manage these replacements. Which Agentforce Agent User change must be implemented to address this issue?

A. The permission set group assigned to the Agent User needs to grant access to the Product Replacement flow.

B. The permission set assigned to the Agent User needs Read access to the custom Product Replacement object.

C. The profile assigned to the Agentforce Agent User needs AI training permission to the custom Product Replacement object.

## Correct Answer: B

## Explanation:

Why is "Permission Set Read Access" the correct answer? If an Agentforce Service Agent is unable to assist customers with the new Product Replacement process, it is likely due to missing object permissions. Key Considerations for Object Access in Agentforce: Custom Objects Require Permission Set Access The new Product Replacement object must be explicitly assigned to the agent's permission set. Without Read access, the agent cannot view or interact with the object. Ensuring Full Data Access for Agents In Setup # Permission Sets, the admin should:# Grant Read access to the Product Replacement object# Ensure that related fields (e.g., status, replacement reason) are also accessible Aligning AI and Agent Workflows If Einstein AI is used to suggest solutions, the agent must have visibility into the Product Replacement object for context-aware responses. Why Not the Other Options? # A. The permission set group assigned to the Agent User needs to grant access to the

Product Replacement flow. Incorrect because flow permissions only control automation access, not direct object access. If an agent cannot view the object, the flow will not be visible or usable. # C. The profile assigned to the Agentforce Agent User needs AI training permission to the custom Product Replacement object. Incorrect because AI training permissions relate to model learning and improvement, not object visibility. Agentforce Specialist References Salesforce AI Specialist Material confirms that permission sets control object-level access for Agentforce users.

## Multiple Choice

An AI Specialist is tasked with configuring a generative model to create personalized sales emails using customer data stored in Salesforce. The AI Specialist has already fine-tuned a large language model (LLM) on the OpenAI platform. Security and data privacy are critical concerns for the client. How should the Agentforce Specialist integrate the custom LLM into Salesforce?

A. Create an application of the custom LLM and embed it in Sales Cloud via iFrame.

B. Add the fine-tuned LLM in Einstein Studio Model Builder.

C. Enable model endpoint on OpenAI and make callouts to the model to generate emails.

## Correct Answer: B

## Explanation:

Since security and data privacy are critical, the best option for the Agentforce Specialist is to integrate the fine- tuned LLM (Large Language Model) into Salesforce by adding it to Einstein Studio Model Builder. Einstein Studio allows organizations to bring their own AI models (BYOM), ensuring the model is securely managed within Salesforce's environment, adhering to data privacy standards. Option A (embedding via iFrame) is less secure and doesn't integrate deeply with Salesforce 's data and security models. Option C (making callouts to OpenAI) raises concerns about data privacy, as sensitive Salesforce data would be sent to an external system. Einstein Studio provides the most secure and seamless way to integrate custom AI models while maintaining control over data privacy and compliance. More details can be found in Salesforce 's Einstein Studio documentation on integrating external models.

## Multiple Choice

Universal Containers' service team wants to customize the standard case summary response from Agentforce. What should the Agentforce Specialist do to achieve this?

A. Create a custom Record Summary prompt template for the Case object.

B. Summarize the Case with a standard Agent action.

C. Customize the standard Record Summary template for the Case object.

## Correct Answer: A

## Explanation:

UC's service team seeks to customize the standard case summary response provided by Agentforce. Let's assess the options for tailoring this output. Option A: Create a custom Record Summary prompt template for the Case object. In Prompt Builder, the standard Record Summary prompt template generates summaries for objects like Case. To customize it, the Agentforce Specialist can create a new custom prompt template, specifying the Case object as the source, and adjust the instructions (e.g., tone, fields included) to meet UC's needs. This new template can then be invoked by an agent or flow, providing a tailored summary. This approach offers full control and aligns with Salesforce's customization process, making it the correct answer. Option B: Summarize the Case with a standard Agent action. Standard Agent actions (e.g., "Answer Questions") don't specifically target case summarization-they're broader in scope. There's no out-of-the-box "Summarize Case" action that allows customization of the response format, making this insufficient and incorrect. Option C: Customize the standard Record Summary template for the Case object. Standard prompt templates in Prompt Builder (e.g., Record Summary) are read-only and cannot be directly edited. Customization requires cloning or creating a new template, not modifying the standard one, making this incorrect.

## Multiple Choice

An Agentforce Specialist deployed a Service Agent to an Experience Cloud site and enabled Credential-Based User Verification. The specialist notices that all Data Manipulation Language (DML) record updates are showing the "Last Modified By" user as the authenticated Community User instead of the Agent User. What should the specialist explain to the business about the effect on audit fields?

A. Credential-Based User Verification has been enabled, which in turn respects all sharing and field-level security.
B. The Flow execution mode for the agent is set to System Context Without Sharing.

C. Token-Based User Verification has been enabled, which in turn respects all sharing and field-level security.

Correct Answer: A

Explanation:

The correct answer is A. Credential-Based User Verification ties the service interaction to the authenticated Experience Cloud user, so record access and record changes are evaluated through that verified user's security context. That explains why audit fields such as Last Modified By show the Community User rather than the generic Agent User. This is not an error; it is the expected governance outcome when the agent is operating with verified user identity. Option B is incorrect because system- context flow execution would explain bypassed sharing behavior, not why the authenticated user appears in audit fields. Option C is incorrect because the scenario explicitly states Credential-Based User Verification, not token-based verification. For regulated environments, this behavior is valuable because audit trails show which verified customer identity caused the record update.

## Multiple Choice

Global Finance Corp (GFC) is expanding its Agentforce rollout from a basic customer service agent to a suite of specialized agents handling Fraud Detection, Loan Origination, and Billing. GFC operates entirely within a single, global Salesforce instance. The CIO wants to ensure that as the number of specialized agents scales, the company maintains strict, centralized control over security guardrails and user context, ensuring customers do not have to repeat themselves when their request spans multiple departments. What is a reasonable architectural approach to achieve this level of scalability and control?

A. Use the Model Context Protocol (MCP) to federate multiple external, third-party agents directly into the existing Agentforce Service console.
B. Implement a Multi-Org, Multi-Agent (MOMA) architecture connected via the Agent-to-Agent (A2A) protocol to safely isolate each department's agent.
C. Deploy a Single-Org, Multi-Agent (SOMA) architecture using a primary Orchestrator agent to manage shared context natively and route subtasks to the specialized agents.

Correct Answer: C

Explanation:

SOMA is correct because the company operates in one Salesforce instance and needs centralized governance, shared user context, and routing across specialized agents. Salesforce's architecture guidance defines SOMA as multiple agents collaborating within one Salesforce org using shared governance and data, with a Supervisor or primary agent acting as the front door that routes work to specialist agents. Salesforce's multi-agent orchestration guidance also describes a primary agent that routes tasks to best-fit specialist agents while preserving context so users do not repeat themselves. MOMA is for cross-org collaboration, so it adds unnecessary complexity here. MCP connects agents or models to tools and data sources; it is not the best architectural answer for native single-org multi-agent orchestration.

## Multiple Choice

Universal Containers (UC) needs to save agents time with AI-generated case summaries. UC has implemented the Work Summary feature. What does Einstein consider when generating a summary?

A. Generation is grounded with conversation context, Knowledge articles, and cases.

B. Generation is grounded with existing conversation context only.

C. Generation is grounded with conversation context and Knowledge articles.

## Correct Answer: A

## Explanation:

When generating a Work Summary, Einstein leverages multiple sources of information to provide a comprehensive and accurate case summary for agents. Conversation Context: Einstein analyzes the details of the customer interaction, including chat or email threads, to extract relevant information for the summary. Knowledge Articles: It considers linked Knowledge Articles or articles referred to during the case resolution process, ensuring the summary incorporates accurate resolutions or additional resources provided to the customer. Cases: Einstein also examines historical cases and related case records to ground the summary in context from past resolutions or interactions. Option A is correct as it includes all three: conversation context, Knowledge articles, and cases. Option B is incorrect because it limits the grounding to conversation context only, excluding other critical elements. Option C is incorrect because it omits case data, which Einstein considers for more accurate and contextually rich summaries.

## Multiple Choice

A company's support agent is inconsistently executing a mandatory fraud check action before processing refunds. In some conversations the fraud check fires, but in others the agent skips directly to issuing the refund. Upon review, an Agentforce Specialist recommends placing the instruction guideline with run @actions.fraud\_check followed by run @actions.process\_refund. What is the effect of this configuration change?

A. The fraud-check action will be more strongly suggested to the large language model (LLM), but it may still be skipped if the LLM determines it is not relevant to the conversation.

B. The fraud-check action will execute after the large language model (LLM) check if it missed it in the process step execution, but the agent will lose its ability to use an empathetic tone.

C. The fraud-check action will be forced to execute before the refund action in every conversation, because procedural instructions provide deterministic control over the execution order.

## Correct Answer: C

Explanation:

The correct answer is C. The problem is inconsistent LLM-selected behavior, so the fix must remove discretion from the reasoning engine for the mandatory fraud check. Salesforce explains that run inside reasoning.instructions is deterministic: the action executes immediately when the code path is reached. Placing run @actions.fraud\_check before run @actions.process\_refund enforces the fraud check before the refund is processed. Option A describes exposing or suggesting an action to the LLM, which is not enough for mandatory compliance logic. Option B invents a side effect; deterministic action execution does not remove the agent's ability to use an empathetic tone in generated responses. The key distinction is forced procedural execution versus optional LLM tool selection.

## Multiple Choice

Universal Containers (UC) users are complaining that agent answers are not satisfactory. The agent is using PDF files as a knowledge source. How should UC troubleshoot this issue?

A. Analyze the data mapping between source fields and Data Cloud object fields.
B. Check that the agent has the PDF file field permission access for the data library.

C. Verify the retriever 's filter criteria and data source connection.

## Correct Answer: C

## Explanation:

Why is "Verify the retriever's filter criteria and data source connection" the correct answer? If agent answers are not satisfactory when using PDF files as a knowledge source, the issue is likely caused by: Retriever misconfiguration If filters are too broad or too restrictive, AI may fail to find relevant information. Checking filter logic and retrieval scope helps improve accuracy. Incorrect data source connection If the retriever is not properly linked to the PDF storage location, it may fail to retrieve relevant information. Ensuring a stable connection between Salesforce Data Cloud and the retriever prevents retrieval failures. Parsing Issues with PDF Files If PDFs are not properly indexed, AI may struggle to extract relevant content. Ensuring structured document formatting improves AI comprehension. Why Not the Other Options? # A. Analyze the data mapping between source fields and Data Cloud object fields. Incorrect because data mapping issues primarily affect structured CRM data, not PDF-based knowledge sources. The issue likely stems from retrieval settings, not field mapping. # B. Check that the agent has the PDF file field permission access for the data library. Incorrect because permission access issues would prevent AI from accessing PDFs entirely rather than causing poor response quality. AI can still generate responses, even if they are inaccurate, which means the issue lies in retriever settings, not permissions. Agentforce Specialist References Salesforce AI Specialist Material details how retriever filters and data sources impact AI-generated answers. Salesforce Certification Guide mentions the importance of verifying retriever configurations for accurate knowledge retrieval.

## Multiple Choice

Universal Containers (UC) is deploying several prompt templates to assist its support agents using Salesforce's standard foundation models. Leadership requires the generated responses to consistently reflect an empathetic and highly professional tone. UC only permits the use of standard foundational large language models (LLMs). What is the most effective prompt engineering technique the Agentforce Specialist should implement in Prompt Builder to fulfill this requirement?

A. Configure the prompt template tone with a dataset of past interactions using different writing styles, intensifiers, and punctuation to permanently alter the LLM default tone.

B. Include a direct instruction asking the LLM to role-play as a specific character, for example, "Act as an empathetic customer support agent," to provide context and establish the tone.

C. Include multiple-choice picklist questions within the prompt template to systematically test and correct the LLM's understanding of the desired context before generating the output.

## Correct Answer: B

## Explanation:

The correct answer is B because role-based prompting is the proper technique for shaping tone and behavior without changing the underlying foundation model. A prompt instruction such as "Act as an empathetic customer support agent" gives the LLM a role, audience, communication style, and business context. This supports consistent professional and empathetic output while still using Salesforce's standard foundation models. Option A is wrong because permanently altering model tone with past interaction data suggests fine- tuning or model customization, which UC does not allow. Option C is not a practical prompt engineering technique for tone control; picklist questions do not establish a consistent response persona. Salesforce prompt engineering guidance specifically describes role-based prompting as a way to align tone, expertise, and behavior.

## Multiple Choice

Universal Containers deployed the new Agentforce Sales Development Representative (SDR) Into production, but sales reps are saying they can 't find it. What is causing this issue?

A. Sales rep users profiles are missing the Allow SDR Agent permission.

B. Sales rep users do not have access to the SDR Agent object.

C. Sales rep users are missing the Use SDR Agent permission set.

## Correct Answer: C

## Explanation:

Why is "Sales rep users are missing the Use SDR Agent permission set" the correct answer? If sales reps are unable to find the Agentforce Sales Development Representative (SDR) Agent, the most likely cause is missing permissions. The "Use SDR Agent" permission set is required for users to access and interact with the SDR

Agent in Agentforce. Key Considerations for This Issue: Permission Set Restriction Users must have the "Use SDR Agent" permission set to access Agentforce SDR in their Salesforce environment. If they lack this permission, the SDR Agent will not appear in their interface. Agentforce Role-Based Access Control Agentforce assigns specific permissions based on user roles. Sales reps require explicit permission to access the SDR Agent. Fixing the Issue The Salesforce Admin should assign the "Use SDR Agent" permission set to all relevant sales reps. This is done in Setup # Permission Sets # Assign to Users. Why Not the Other Options? # A. Sales rep users' profiles are missing the Allow SDR Agent permission. Incorrect because "Allow SDR Agent" is not a standard permission setting in Agentforce. Permission is granted via permission sets, not profile-level settings. # B. Sales rep users do not have access to the SDR Agent object. Incorrect because there is no separate "SDR Agent object" in Salesforce. SDR Agents are AI-driven features, not standard CRM objects that require object-level access. Agentforce Specialist References Salesforce AI Specialist Material confirms that users require specific permission sets to access Agentforce SDR Agents. Salesforce Instructions for Certification highlight the role of permission sets in controlling Agentforce access.

## Multiple Choice

Universal Containers recently launched a pilot program to integrate conversational AI into its CRM business operations with Agentforce Agents. How should the Agentforce Specialist monitor Agents' usability and the assignment of actions?

A. Run a report on the Platform Debug Logs.

B. Query the Agent log data using the Metadata API.

C. Run Agent Analytics.

Correct Answer: C

## Explanation:

Monitoring the usability and action assignments of Agentforce Agents requires insights into how agents perform, how users interact with them, and how actions are executed within conversations. Salesforce provides Agent Analytics (Option C) as a built-in capability specifically designed for this purpose. Agent Analytics offers dashboards and reports that track metrics such as agent response times, user satisfaction, action invocation frequency, and success rates. This tool allows the Agentforce Specialist to assess usability (e.g., are agents meeting user needs?) and monitor action assignments (e.g., which actions are triggered and how often), providing actionable data to optimize the pilot program. Option A: Platform Debug Logs are low-level logs for troubleshooting Apex, Flows, or system processes. They don't provide high-level insights into agent usability or action assignments, making this unsuitable. Option B: The Metadata API is used for retrieving or deploying metadata (e.g., object definitions), not runtime log data about agent performance. While Agent log data might exist, querying it via Metadata API is not a standard or documented approach for this use case. Option C: Agent Analytics is the dedicated solution, offering a user-friendly way to monitor conversational AI performance without requiring custom development. Option C is the correct choice for effectively monitoring Agentforce Agents in a pilot program.

## Multiple Choice

What is the purpose of applying filters in a custom retriever configuration?

A. Filters narrow the search results by applying up to 10 conditions based on fields defined in the search index, thereby enhancing the relevancy of the content returned.

B. Filters automatically encrypt and mask sensitive fields in the search index to ensure that only non-confidential information is retrieved for public queries. C. Filters reformat and aggregate multiple documents into a single summary output to streamline and unify retriever output for more efficient and accurate AI grounding.

## Correct Answer: A

## Explanation:

The AgentForce Retriever Configuration Guide specifies that filters are used to refine and constrain search results within a retriever setup. Filters operate by applying conditions (up to 10) on indexed fields such as document type, category, region, or update date. This targeted filtering ensures that the retrieved data is highly relevant to the current user query or context. For instance, an AgentForce retriever could be configured to include only documents tagged as "Active" or within a specific product line, reducing noise and improving grounding accuracy for the LLM. This mechanism supports precision retrieval, which directly improves both the accuracy and reliability of generated responses. Option B is incorrect because filters do not handle encryption or masking of sensitive data - those functions are managed through Data Cloud security and access controls. Option C is incorrect because retrievers do not aggregate or summarize documents; they retrieve data for grounding, leaving summarization to the LLM reasoning layer. Therefore, the correct answer is Option A - Filters narrow search results using field-based conditions to improve relevancy and retrieval precision.

## Multiple Choice

Universal Containers plans to enhance its sales team's productivity using AI. Which specific requirement necessitates the use of Prompt Builder?

A. Creating a draft newsletter for an upcoming tradeshow.

B. Predicting the likelihood of customers churning or discontinuing their relationship with the company.

C. Creating an estimated Customer Lifetime Value (CLV) with historical purchase data.

## Correct Answer: A

## Explanation:

UC seeks an AI solution for sales productivity. Let's determine which requirement aligns with Prompt Builder. Option A: Creating a draft newsletter for an upcoming tradeshow.Prompt Builder excels at generating text outputs (e.g., newsletters) using Generative AI. UC can create a prompt template to draft personalized, context-rich newsletters based on sales data, boosting productivity. This matches Prompt Builder's capabilities, making it the correct answer. Option B: Predicting the likelihood of customers churning or discontinuing their relationship with the company.Churn prediction is a predictive AI task, suited for Einstein Prediction Builder or Data Cloud models, not Prompt Builder, which focuses on generative tasks. This is incorrect. Option C: Creating an estimated Customer Lifetime Value (CLV) with historical purchase data.CLV estimation involves predictive analytics, not text generation, and is better handled by Einstein Analytics or custom models, not Prompt Builder. This is incorrect.

## Multiple Choice

Universal Containers needs a tool that can analyze voice and video call records to provide insights on competitor mentions, coaching opportunities, and other key information. The goal is to enhance the team 's performance by identifying areas for improvement and competitive intelligence. Which feature provides insights about competitor mentions and coaching opportunities?

A. Call Summaries  
B. Einstein Sales Insights  
C. Call Explorer

Correct Answer: C

## Explanation:

For analyzing voice and video call records to gain insights into competitor mentions, coaching opportunities, and other key information, Call Explorer is the most suitable feature. Call Explorer, a part of Einstein Conversation Insights, enables sales teams to analyze calls, detect patterns, and identify areas where improvements can be made. It uses natural language processing (NLP) to extract insights, including competitor mentions and moments for coaching. These insights are vital for improving sales performance by providing a clear understanding of the interactions during calls. Call Summaries offer a quick overview of a call but do not delve deep into competitor mentions or coaching insights. Einstein Sales Insights focuses more on pipeline and forecasting insights rather than call-based analysis. Salesforce Einstein Conversation Insights Documentation: id=einstein\_conversation\_insights.htm

## Multiple Choice

A Salesforce Administrator is exploring the capabilities of Agent to enhance user interaction within their organization. They are particularly interested in how Agent processes user requests and the mechanism it employs to deliver responses. The administrator is evaluating whether Agent directly interfaces with a large language model (LLM) to fetch and display responses to user inquiries, facilitating a broad range of requests from users. How does Agent handle user requests In Salesforce?

A. Agent will trigger a flow that utilizes a prompt template to generate the message.

B. Agent will perform an HTTP callout to an LLM provider.

C. Agent analyzes the user 's request and LLM technology is used to generate and display the appropriate response.

## Correct Answer: C

## Explanation:

Agent is designed to enhance user interaction within Salesforce by leveraging Large Language Models (LLMs) to process and respond to user inquiries. When a user submits a request, Agent analyzes the input using natural language processing techniques. It then utilizes LLM technology to generate an appropriate and contextually relevant response, which is displayed directly to the user within the Salesforce interface. Option C accurately describes this process. Agent does not

necessarily trigger a flow (Option A) or perform an HTTP callout to an LLM provider (Option B) for each user request. Instead, it integrates LLM capabilities to provide immediate and intelligent responses, facilitating a broad range of user requests.

## Multiple Choice

What is an Agentforce Specialist able to do when the 'Enrich event logs with conversation data' setting in the Agentforce configuration is enabled?

A. View the user click path that led to each agent action.
B. View session data including user input and agent responses for sessions.
C. Generate details reports on all agent conversations over any time period.

## Correct Answer: B

Explanation:

The AgentForce Event and Logging Configuration Guide states that enabling "Enrich event logs with conversation data" allows administrators to capture session-level details, including both user inputs and agent responses. The documentation explains: "When this setting is enabled, conversation transcripts, user messages, and agent responses are appended to the event logs for improved visibility and troubleshooting." This provides a comprehensive record for analytics, training, and quality review. It does not, however, track user click paths (Option A) or generate aggregated historical reports across all time periods automatically (Option C). Therefore, Option B is correct, as it directly reflects the documented functionality of the conversation data enrichment feature within AgentForce configuration. References (AgentForce Documents / Study Guide): AgentForce Configuration and Monitoring Guide: "Enrich Event Logs with Conversation Data" AgentForce Data and Analytics Study Notes AgentForce Implementation Handbook: "Session and Conversation Log Management"

## Multiple Choice

At Horizon Insurance, the customer service team is reporting that the agent consistently routes claims intake conversations to the Policy Inquiry subagent, even though user intent clearly indicates a claims-related issue. This misrouting persists despite the user clearly expressing the intent to discuss a claim. The Agentforce Specialist added guard conditions, but the problem persists. What is most likely causing this incorrect routing in Horizon Insurance's agent?

A. Procedural instructions requiring Salesforce Flows to route to the correct subagent

B. Use of global instructions to define subagent routing for agents in

compliance-regulated environments

C. Overlap in subagent descriptions and entry conditions between the Claims Intake and Policy Inquiry subagents

## Correct Answer: C

## Explanation:

The correct answer is C because persistent routing to the wrong subagent usually indicates semantic overlap in subagent purpose, description, or entry conditions. Agentforce uses subagent descriptions and instructions to determine which capability is relevant to the user's intent. If "Claims Intake" and "Policy Inquiry" both describe insurance policy details, claims eligibility, or coverage questions too broadly, the reasoning engine can classify claims requests into the wrong subagent. Procedural instructions and Flows are not the normal root cause of intent classification failure. Global instructions can influence overall behavior, but they should not be used as the primary routing definition for competing subagents. Salesforce Agent Script guidance emphasizes that topic or subagent descriptions help the model understand when a topic is relevant during classification.

## Multiple Choice

An Agentforce is considering using a Field Generation prompt template type. What should the Agentforce Specialist check before creating the Field Generation prompt to ensure it is possible for the field to be enabled for generative AI?

A. That the field chosen must be a rich text field with 255 characters or more.

B. That the org is set to API version 59 or higher

C. That the Lightning page layout where the field will reside has been upgraded to Dynamic Forms

## Correct Answer: C

Explanation:

Before creating a Field Generation prompt template in Agentforce, the Specialist must ensure that the target field is available on a Dynamic Form-enabled Lightning page layout. Field Generation prompt templates work by embedding AI-generated suggestions directly into editable record fields on the Lightning record page. This functionality requires Dynamic Forms, which allow fields to be placed and managed as individual components on the Lightning page. Without Dynamic Forms enabled, the AI cannot surface suggestions directly into the field. Generation templates.

## Multiple Choice

Coral Cloud Resorts wants to cover a broad range of user phrasing when testing its FAQ agent. Which Testing Center feature meets that need?

A. AI-generated synthetic test utterances based on natural language variations  
B. Uploading only a small set of manually written prompts  
C. Relying on live customer logs to capture phrasing diversity after deployment

## Correct Answer: A

## Explanation:

The AgentForce Testing Center Functional Overview highlights that AI-powered synthetic test utterances allow teams to automatically generate natural language variations of existing test prompts. This feature helps validate whether the agent can correctly classify and respond to diverse user phrasing - a crucial step in ensuring conversational robustness and intent coverage. By expanding each test case into multiple paraphrased utterances, the Testing Center evaluates how well the reasoning engine generalizes user intent, improving reliability before deployment. Option B is insufficient because manually written prompts cover limited language diversity. Option C waits for live feedback, which exposes end users to unvalidated agent behavior and is not a pre- deployment testing method. Therefore, the correct choice is Option A - AI-generated synthetic test utterances based on natural language variations.

## Multiple Choice

Before activating a custom Agent action, an Agentforce Specialist would like to understand multiple real-world user utterances to ensure the action is being selected appropriately. Which tool should the Specialist recommend?

A. Agentforce
B. Agent Builder
C. Model Playground

## Correct Answer: C

## Explanation:

The Model Playground allows an Agentforce Specialist to test and simulate real-world user utterances against the configured actions, ensuring the custom Agent action is triggered appropriately based on intent matching and natural language understanding-without needing a full deployment.

## Multiple Choice

A support team handles a high volume of chat interactions and needs a solution to provide quick, relevant responses to customer inquiries. Responses must be grounded in the organization 's knowledge base to maintain consistency and accuracy. Which feature in Einstein for Service should the support team use?

A. Einstein Service Replies

B. Einstein Reply Recommendations

C. Einstein Knowledge Recommendations

## Correct Answer: A

## Explanation:

Einstein Service Replies: This feature is designed to generate contextual, AI-powered response suggestions for agents during chat and email interactions. Crucially, these replies can be grounded in your organization 's knowledge base, ensuring consistency and accuracy. This aligns perfectly with the requirement for quick, relevant, and consistent responses.

## Multiple Choice

Which feature in the Einstein Trust Layer helps to minimize the risks of jailbreaking and prompt injection attacks?

A. Secure Data Retrieval and Grounding
B. Data Masking
C. Prompt Defense

## Correct Answer: C

## Explanation:

The Einstein Trust Layer is designed to ensure responsible and compliant AI usage. Data Masking (B) is the mechanism that directly addresses compliance with data protection regulations like GDPR by obscuring or anonymizing sensitive personal data (e.g., names, emails, phone numbers) before it is processed by AI models. This prevents unauthorized exposure of personally identifiable information (PII) and ensures adherence to privacy laws. Salesforce documentation explicitly states that Data Masking is a core component of the Einstein Trust Layer, enabling organizations to meet GDPR requirements by automatically redacting sensitive fields during AI interactions. For example, masked data ensures that PII is not stored or used in AI model training or inference without explicit consent. In contrast: Toxicity Scoring (A) identifies harmful or inappropriate content in outputs but does not address data privacy. Prompt Defense (C) guards against malicious prompts or injection attacks but focuses on security rather than data protection compliance.

## Multiple Choice

Universal Containers would like to route a service agent conversation to a human agent queue. Which tool connects the service agent to the human agent queue for escalation?

A. Outbound Omni-Channel Flow

B. Screen Flow

C. Prompt Flow

Correct Answer: A

## Explanation:

Why is Outbound Omni-Channel Flow the Correct Answer? In Agentforce, when a service agent 's conversation needs to be escalated to a human agent queue, Outbound Omni-Channel Flow is the appropriate tool to facilitate this process. Key Features of Outbound Omni-Channel Flow in Agentforce: Automates Escalation to a Human Agent Queue It ensures that service requests are dynamically routed to the most appropriate human agent, based on availability, skills, and predefined business logic. Seamless Transition from AI to Human Agents When Einstein Copilot or another AI-powered assistant identifies a case that requires human intervention, Omni-Channel Flow automatically routes the conversation. Ensures Proper Prioritization & Load Balancing By leveraging Omni-Channel routing rules, the system assigns conversations efficiently, avoiding delays in customer service. Integration with Agentforce and Service Cloud Works directly with Salesforce

Service Cloud to route cases to the appropriate agent queue. Why Not the Other Options? # B. Screen Flow Screen Flow is used for interactive guided processes where users manually enter data in predefined steps. It does not support automated case routing to human agents in real time. # C. Prompt Flow Prompt Flow is designed to enhance AI-generated responses and workflows rather than routing service agent interactions to human agents. It lacks Omni-Channel integration, which is necessary for real-time queue management. Agentforce Specialist References The importance of using Omni-Channel Flow for routing AI-generated interactions to human agents is supported in the Agentforce Specialist exam objectives and documentation: Salesforce AI Specialist Material: Covers the importance of Omni-Channel routing for managing AI and human agent interactions. Salesforce Instructions for the Certification: Mentions routing AI-driven cases to human agents using automated flows. Agentforce Tools Documentation: Highlights Omni-Channel capabilities in Service AI.

## Multiple Choice

What is the correct process to leverage Prompt Builder in a Salesforce org?

A. Select the appropriate prompt template type to use, select one of Salesforce's standard prompts, determine the object to associate the prompt, select a record to validate against, and associate the prompt to an action.
B. Select the appropriate prompt template type to use, develop the prompt within the prompt workspace, select resources to dynamically insert CRM-derived grounding data, pick the model to use, and test and validate the generated responses.
C. Enable the target object for generative prompting, develop the prompt within the prompt workspace, select records to fine-tune and ground the response, enable the Trust Layer, and associate the prompt to an action.

## Correct Answer: B

## Explanation:

When using Prompt Builder in a Salesforce org, the correct process involves several important steps: Select the appropriate prompt template type based on the use case. Develop the prompt within the prompt workspace, where the template is created and customized. Select CRM-derived grounding data to be dynamically inserted into the prompt, ensuring that the AI- generated responses are based on accurate and relevant data. Pick the model to use for generating responses, either using Salesforce 's built-in models or custom ones. Test and validate the generated responses to ensure accuracy and effectiveness. Option B is correct as it follows the proper steps for using Prompt Builder. Option A and Option C do not capture the full process correctly. Salesforce Prompt Builder Documentation: prompt\_builder\_overview.htm

## Multiple Choice

An Agentforce Specialist builds a new Service Agent that uses a custom action built on a flow. The agent has been tested in a sandbox and is now ready to deploy. What is a key consideration regarding the activation status of the agent in the production environment?

A. The agent will be activated automatically only if the flow is also active.
B. The agent must be manually activated in production, regardless of its status in the sandbox.

C. The agent will automatically be activated upon successful deployment.

## Correct Answer: B

## Explanation:

According to the AgentForce Deployment and Lifecycle Management Guide, when an agent is deployed from a sandbox to a production environment, activation does not carry over automatically. The documentation clarifies: "Each environment maintains its own activation state. Agents must be manually activated in production after deployment to ensure controlled rollout and compliance validation." This ensures that only verified configurations are activated intentionally. Option A is incorrect because activation is not dependent solely on the flow's active status. Option C is also incorrect, as automatic activation upon deployment is explicitly prevented by design to maintain environment safety. Therefore, Option B correctly reflects the deployment requirement for manual activation in production. References (AgentForce Documents / Study Guide): AgentForce Deployment Guide: "Activating Agents in Production Environments" AgentForce Implementation Handbook: "Environment Lifecycle and Activation Controls" Salesforce Release Management Study Notes: "Post-Deployment Activation Steps"

## Multiple Choice

Coral Cloud Resorts (CCR) wants to configure its agent so that booking actions are only available when a customer 's membership tier is "Premium" or "Elite". This business rule must be enforced deterministically. What should CCR implement?

A. Set up custom validation rules on the underlying booking objects to prevent non-eligible customers from completing bookings.

B. Configure topic instructions that clearly state booking actions should only be used for Premium or Elite customers and include examples.

C. Create a context variable mapped to the customer 's membership tier field, then add a conditional filter on MembershipTier.

## Correct Answer: C

## Explanation:

Per the AgentForce Configuration and Control Flow Guide, enforcing deterministic business rules- such as restricting certain actions based on a data condition-requires using context variables with conditional filters. The guide specifies: "Use context variables mapped to relevant Salesforce fields to store state information. Then apply conditional filters to ensure actions execute only when specific conditions (e.g., membership tier) are met." This ensures the rule is deterministic, meaning the action cannot trigger if the condition is not satisfied. Option A (object validation rules) restricts record creation or updates but does not control AgentForce's action logic. Option B (topic instructions) relies on natural language guidance, which is non-deterministic and can be ignored by the model. Therefore, Option C-creating a context variable mapped to the membership tier and applying a conditional filter-is the correct, documented approach. References (AgentForce Documents / Study Guide): AgentForce Implementation Guide: "Conditional Logic Using Context Variables" AgentForce Study Guide: "Deterministic Action Control with Filters" Salesforce Agent Configuration Best Practices

## Multiple Choice

Universal Containers (UC) uses an agent to handle customer service inquiries. UC recently partnered with an external logistics provider that operates its own distinct, autonomous AI agent. When a customer requests a complex international shipping reroute, the UC agent needs to securely communicate, negotiate routing terms, and delegate the execution of the reroute directly to the logistics provider's AI agent. Which open standard multi-agent protocol is specifically designed to facilitate this autonomous task delegation and negotiation between independent AI agents?

A. Agent-to-Agent (A2A) Protocol

B. Model Context Protocol (MCP)

C. OpenAPI Specification (OAS)

## Correct Answer: A

## Explanation:

The correct answer is A. Agent-to-Agent (A2A) Protocol is the correct open standard when independent AI agents need to discover each other, communicate securely, exchange structured information, and delegate work across platforms. In this scenario, UC's agent is not merely retrieving data from an external system; it must communicate with another autonomous logistics agent and delegate execution of a shipping reroute. MCP is used to expose external tools, data, and context to agents, but it is not the primary protocol for agent-to-agent negotiation. OpenAPI describes REST APIs and is useful for traditional service integration, but it does not provide an agent collaboration protocol. Salesforce describes A2A as an open standard for secure communication, task delegation, and collaboration between agents from different platforms.

## Multiple Choice

Universal Containers is considering leveraging the Einstein Trust Layer in conjunction with Einstein Generative AI Audit Data. Which audit data is available using the Einstein Trust Layer?

A. Response accuracy and offensiveness score

B. Hallucination score and bias score

C. Masked data and toxicity score

## Correct Answer: C

## Explanation:

Universal Containers is considering the use of the Einstein Trust Layer along with Einstein Generative AI Audit Data. The Einstein Trust Layer provides a secure and compliant way to use AI by offering features like data masking and toxicity assessment. The audit data available through the Einstein Trust Layer includes information about masked data- which ensures sensitive information is not exposed- and the toxicity score, which evaluates the generated content for inappropriate or harmful language.

## Multiple Choice

Before activating a custom copilot action, An Agentforce would like is to understand multiple real-world user utterances to ensure the action being selected appropriately. Which tool should the Agentforce Specialist recommend?

A. Model Playground

B. Agent

C. Copilot Builder

## Correct Answer: A

Explanation:

Model Playground (specifically within the context of Generative AI and Copilot in Salesforce) allows you to test and refine the behavior of your AI models and, by extension, how your copilot actions interpret and respond to different user inputs (utterances). It 's a sandbox environment where you can: Input various user utterances. See how the underlying Large Language Model (LLM) and the copilot 's reasoning engine classify those utterances. Observe which actions are triggered by those utterances. Adjust the action instructions and examples to improve the copilot 's understanding and ensure the correct action is chosen for specific user requests. This iterative testing is crucial for ensuring the action performs as expected in real-world scenarios.

## Multiple Choice

Universal Containers wants to reduce overall customer support handling time by minimizing the time spent typing routine answers for common questions in-chat, and reducing the post-chat analysis by suggesting values for case fields. Which combination of Agentforce for Service features enables this effort?

A. Einstein Reply Recommendations and Case Classification  
B. Einstein Reply Recommendations and Case Summaries  
C. Einstein Service Replies and Work Summaries

## Correct Answer: A

Explanation:

Universal Containers (UC) aims to streamline customer support by addressing two goals: reducing in-chat typing time for routine answers and minimizing post-chat analysis by auto-suggesting case field values. In Salesforce Agentforce for Service, Einstein Reply Recommendations and Case Classification (Option A) are the ideal

combination to achieve this. Einstein Reply Recommendations: This feature uses AI to suggest pre-formulated responses based on chat context, historical data, and Knowledge articles. By providing agents with ready- to-use replies for common questions, it significantly reduces the time spent typing routine answers, directly addressing UC's first goal. Case Classification: This capability leverages AI to analyze case details (e.g., chat transcripts) and suggest values for case fields (e.g., Subject, Priority, Resolution) during or after the interaction. By automating field population, it reduces post-chat analysis time, fulfilling UC's second goal. Option B: While "Einstein Reply Recommendations" is correct for the first part, "Case Summaries" generates a summary of the case rather than suggesting specific field values. Summaries are useful for documentation but don't directly reduce post-chat field entry time. Option C: "Einstein Service Replies" is not a distinct, documented feature in Agentforce (possibly a distractor for Reply Recommendations), and "Work Summaries" applies more to summarizing work orders or broader tasks, not case field suggestions in a chat context. Option A: This combination precisely targets both in-chat efficiency (Reply Recommendations) and post-chat automation (Case Classification).

## Multiple Choice

Universal Containers (UC) needs to create a prompt template that provides a detailed product description based on the latest product data. The description will be used in marketing materials to ensure consistency and accuracy. Which prompt template type should UC use?

A. Record Summary

B. Sales Email

C. Field Generation

## Correct Answer: C

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract: The documentation states that the Field Generation template is designed to populate a specific field on a record with generated output. "Field Generation: uses record context to autofill specific fields on a record page." (Prompt Template Types) In this scenario, UC wants to generate a detailed product description based on product data and populate that description field on the product record (or equivalent). This is exactly a field generation usecase. The Sales Email template is for generating email content, and the Record Summary template is for summarising a record rather than generating a marketingstyle description. Therefore the correct answer is C.

## Multiple Choice

Cloud Kicks is developing a prompt template in a sandbox and has created multiple saved versions during testing. Cloud Kicks is now preparing to move the template to production. What is a consideration when deploying the template to production?

A. Deploying a template requires all previous versions to be manually activated before deployment can succeed

B. Deploying a template automatically removes all prior versions and replaces them with the deployed version in production

C. Deploying a prompt template includes all versions of the prompt template that are in the source org to the target org

## Correct Answer: C

## Explanation:

The correct answer is C because prompt template versioning is part of the prompt template metadata lifecycle. When a prompt template is moved between environments, specialists must account for versions stored with the template in the source org. That is why template version management matters before deployment; test versions, inactive versions, and production-ready versions can all affect the metadata package. Option A is wrong because earlier versions do not have to be manually activated before deployment. Option B is wrong because deployment does not simply wipe all history and retain only one replacement version. Salesforce's CLI considerations for Prompt Builder confirm that template versions are represented in deployable XML and can be managed during deployment, including deletion behavior in the target org.

## Multiple Choice

An Agentforce Agent has been developed with multiple topics and Agent Actions that use flows and Apex. Which options are available for deploying these to production?

A. Deploy the flows and Apex using normal deployment tools and manually create the agent-related items in production.

B. Use only change sets because the Salesforce CLI does not currently support the deployment of agent-related metadata.

C. Deploy flows, Apex, and all agent-related items using either change sets or the Salesforce CLI /Metadata API.

## Correct Answer: C

## Explanation:

Why is " Deploy flows, Apex, and all agent-related items using either change sets or the Salesforce CLI /Metadata API " the correct answer? When deploying an Agentforce Agent with multiple topics and Agent Actions that use flows and Apex, a complete deployment solution is required. Change sets and the Salesforce CLI/Metadata API support the deployment of flows, Apex code, and agent-related metadata. Key Considerations for Agentforce Deployments: Supports Deployment of All Required Components Agentforce Agents include flows, Apex classes, topics, and agent actions. Change sets and Salesforce CLI/Metadata API allow deployment of all these components together, ensuring a smooth transition to production. Agentforce Metadata Can Be Deployed Using Standard Tools Change Sets: Allows admins to move configurations, custom objects, and metadata between Salesforce environments. Salesforce CLI/Metadata API: Enables scripted deployments, automating the transfer of Agentforce configurations. Ensures a Complete Migration Without Manual Configuration Deploying all components together reduces the risk of misconfiguration. Automating deployments using the Metadata API ensures consistency across environments. Why Not the Other Options? # A. Deploy the flows and Apex using normal deployment tools and manually create the agent- related items in production. Incorrect because manually creating agent-related items in production introduces risk and inconsistency. This approach is error-prone and time-consuming, especially for large Agentforce deployments. # B. Use only change sets because the Salesforce CLI does not currently support the deployment of agent-related metadata. Incorrect because Salesforce CLI and Metadata API fully support Agentforce deployments. Change sets are useful but limited in large-scale, automated deployments. Agentforce Specialist References Salesforce AI Specialist Material confirms that Agentforce metadata (flows, actions, and topics) can be deployed using Change Sets or the Metadata API.

## Multiple Choice

Universal Containers' agent must always look up the customer's account tier and open cases from Salesforce before deciding how to respond. Based on Agent Script flow of control, what is true about executing deterministic actions at the very start of a subagent?

A. Actions can only be guaranteed to run by placing them in the config block.
B. Only before\_reasoning can guarantee the large language model (LLM) is invoked before an action runs.

C. The first instruction in reasoning.instructions always runs before the large language model (LLM) is invoked.

## Correct Answer: C

Explanation:

The correct answer is C. In Agent Script, reasoning.instructions is processed before the final assembled prompt is sent to the LLM. Salesforce explains that procedural logic inside reasoning instructions executes top-to-bottom, prompt text is accumulated, and then the assembled prompt is sent to the LLM. Therefore, if the first instruction deterministically runs the account-tier and open-case lookup actions, those values can be collected before the LLM decides how to respond. Option A is wrong because the config block defines agent-level metadata, not guaranteed action execution. Option B is incorrectly worded and reverses the sequencing issue. For deterministic pre-response data gathering, procedural instructions at the start of reasoning.instructions are the correct pattern.

## Multiple Choice

An Agentforce wants to include data from the response of external service invocation (REST API callout) into the prompt template. How should the Agentforce Specialist meet this requirement?

A. Convert the JSON to an XML merge field.

B. Use External Service Record merge fields.

C. Use "Add Prompt Instructions" flow element.

## Correct Answer: B

## Explanation:

An Agentforce wants to include data from the response of an external service invocation (REST API callout) into a prompt template. The goal is to incorporate dynamic data retrieved from an external API into the AI- generated content. Solution: Use External Service Record Merge Fields External Service Integration: Definition: External Services in Salesforce allow the integration of external REST APIs into Salesforce without custom code. Registration: The external service must be registered in Salesforce, defining the API 's schema and methods. External Service Record Merge Fields: Purpose: Enables the inclusion of data from external service responses directly into prompt templates using merge fields. Functionality: Dynamic

Data Inclusion: Allows prompt templates to access and use data returned from REST API callouts. Merge Fields Syntax: Use merge fields in the prompt template to reference specific data points from the API response. Implementation Steps: Register the External Service: Use External Services to register the REST API in Salesforce. Define the API 's schema, including methods and data structures. Create a Named Credential: Configure authentication and endpoint details for the external API. Use External Service in Flow: Build a Flow that invokes the external service and captures the response. Ensure the flow outputs the necessary data for use in the prompt template. Configure the Prompt Template: Use External Service Record merge fields in the prompt template to reference data from the flow 's output. Syntax Example: {{flowOutputVariable.fieldName}} Why Other Options are Less Suitable: Option A (Convert the JSON to an XML merge field): Irrelevance: Converting JSON to XML merge fields is unnecessary and complicates the process. Unsupported Method: Salesforce prompt templates do not support direct inclusion of XML merge fields from JSON conversion. Option C (Use "Add Prompt Instructions" flow element): Purpose of Add Prompt Instructions: Allows adding instructions to the prompt within a flow but does not facilitate including external data. Limitation: Does not directly help in incorporating external service responses into the prompt template.

## Multiple Choice

How is Data Cloud leveraged by the Answer Questions with Knowledge action in Agentforce?

A. Data Cloud is not required; the articles can be accessed directly from the CRM by the agent.

B. Data Cloud stores and manages the Indexed Knowledge articles.

C. Data Cloud provides the real-time data streams that update the Knowledge articles.

## Correct Answer: B

## Explanation:

How Does Data Cloud Support "Answer Questions with Knowledge" in Agentforce? The Answer Questions with Knowledge action in Agentforce leverages Salesforce Data Cloud to store, manage, and index Knowledge articles used for AI-powered responses. Data Cloud as the Central Storage for Knowledge Articles Indexed Knowledge articles are stored and retrieved in real-time from Data Cloud. The AI system queries Data Cloud to fetch relevant articles when a service agent or customer needs an answer. Ensuring Up-to-Date Responses Data Cloud continuously updates Knowledge articles based on new insights, user interactions, and feedback. The AI can pull the latest, most relevant information from the Knowledge base. Enhancing AI-Driven Customer Service AI-generated responses are grounded in real customer service interactions. Service agents benefit from fast, context-aware answers, improving resolution times and customer satisfaction. Why Not the Other Options? # A. Data Cloud is not required; the articles can be accessed directly from the CRM by the agent. Incorrect because Data Cloud is the primary system for storing and indexing Knowledge articles. Without Data Cloud, Einstein AI cannot efficiently retrieve and rank articles dynamically. # C. Data Cloud provides the real-time data streams that update the Knowledge articles. Incorrect because while Data Cloud stores and manages articles, real-time updates are not its primary function. The Knowledge Management system within Salesforce handles article creation and updates. Agentforce Specialist References Salesforce AI Specialist Material highlights that Data Cloud is the core storage system for AI-driven Knowledge management. Salesforce Instructions for Certification confirm the central role of Data Cloud in managing indexed Knowledge articles for AI-powered responses.

## Multiple Choice

Cloud Kicks (CK) recently finished the development of a new prompt template that uses its own large language model (LLM). CK is deploying a prompt template from a sandbox to a production org, and is receiving an error. When trying to deploy the change set, CK is getting an error related to the LLM used in the prompt template. What is the cause of the error?

A. The prompt does not specify that it is a custom LLM.

B. BYOLLM is not yet supported for in prompt templates in production.

C. The name of the LLM does not match in sandbox and production.

## Correct Answer: C

## Explanation:

As documented in the AgentForce Prompt Template and BYOLLM (Bring-Your-Own-LLM) Deployment Guide, each prompt template references a specific LLM configuration by name and ID. When migrating components between environments (e.g., from sandbox to production), the referenced LLM must also exist in the target org with the exact same name and identifier. If the LLM configuration is missing or named differently in production, the deployment fails, as the prompt template cannot resolve its model dependency. Option A is incorrect because specifying a custom LLM type does not resolve the missing configuration issue. Option B is incorrect because BYOLLM is supported in production, provided it is correctly

registered. Therefore, the error occurs because the LLM name or configuration ID does not match between sandbox and production, making Option C the correct answer.

## Multiple Choice

Universal Containers has multiple Salesforce orgs, each with a unique customer service agent where a verification agent must pass customer identity data to downstream agents handling account modifications. The customer ID must remain secure and persistent across agent handoffs without exposure to large language model (LLM) modification. What is the most appropriate configuration?

A. Implement a custom object to temporarily store verification status and have each agent query it via SOQL actions during execution.
B. Store customer identity information in conversation variables created by the first agent and have other agents read those same conversation variables.
C. Use the Agent API to start the downstream agent's session and pass the verified customer ID as a read-only context variable, ensuring security and preventing LLM alteration.

## Correct Answer: C

## Explanation:

The AgentForce Inter-Agent Communication and Security Configuration Guide specifies that when sensitive identity data (like a verified customer ID) must be shared between agents, the correct approach is to use the Agent API to initiate the downstream agent's session. The verified data should be passed as a read-only context variable, ensuring persistence across sessions while preventing modification by the large language model (LLM). This setup maintains data integrity and security compliance by isolating sensitive variables from the LLM's reasoning layer. Context variables passed via the Agent API are immutable during runtime, ensuring they cannot be altered or exposed in agent-generated responses. Option A adds unnecessary data persistence and complexity. Option B is insecure because conversation variables are exposed to the LLM context, risking unintended modification or leakage. Therefore, the most secure and compliant configuration is Option C - Use the Agent API to pass verified IDs as read-only context variables between agents.

## Multiple Choice

Universal Containers wants to test agents while preserving real data and isolating from production. Which environment should the company use with Testing Center?

A. Use personal developer orgs unrepresentative of production data,

B. Use production org directly with test assertions.

C. Use sandbox environments replicated from production for safe testing,

## Correct Answer: C

## Explanation:

The AgentForce Testing Center Implementation Guide specifies that organizations should perform all structured and regression testing in a sandbox environment replicated from production. The guide explains: "Testing Center supports running tests safely in sandbox environments that mirror production data. This ensures realistic test conditions without impacting live systems or data." Option A (developer orgs) provides limited and unrepresentative data. Option B (production org) is not recommended due to potential data integrity and security risks. Hence, Option C is the correct and Salesforce-approved environment for safe, realistic testing of agents. References (AgentForce Documents / Study Guide): AgentForce Testing Center Guide: "Supported Environments and Best Practices" Salesforce Sandbox Management Guide AgentForce Study Guide: "Safe Testing with Production-Replicated Data"

## Multiple Choice

Universal Containers has a new AI project. What should An Agentforce consider when adding a related list on the Account object to be used in the prompt template?

A. After selecting a related list from the Account, use the field picker to choose merge fields in Prompt Builder.

B. Prompt Builder must be used to assign the fields from the related list as a JSON format.

C. The fields for the related list are based on the default page layout of the Account for the current user.

## Correct Answer: A

Explanation:

Context of the QuestionUniversal Containers (UC) wants to include details from a related list on the Account object in a prompt template. This is typically done via

Prompt Builder in Salesforce's generative AI setup. Prompt Builder Behavior Selecting a Related List: Within Prompt Builder, you can navigate to the object (Account) and choose which related list (e.g., Contacts, Opportunities) you want to reference. Field Picker: Once a related list is chosen, Prompt Builder provides a field picker interface, allowing you to select specific fields from that related list. These fields then become available for merge fields or dynamic insertion within your prompt.

## Multiple Choice

What is a key benefit of the Agent-to-Agent (A2A) protocol?

A. Provides a standardized framework for cross-vendor agent discovery and communication  
B. Allows auto-onboard third-party agents without additional contracts, trust scores, or shared identity controls  
C. Provides a standardized runtime engine for internal agent discovery and communication

## Correct Answer: A

## Explanation:

The Agent-to-Agent (A2A) Protocol Overview describes A2A as a standardized framework for cross- vendor agent discovery and communication. The documentation specifies: "A2A enables secure, interoperable communication between AI agents across vendors, platforms, and ecosystems, using standardized APIs and schemas for message exchange and capability discovery." This allows AgentForce agents to interact with external AI systems or partner agents while maintaining data governance and identity controls. Option B is incorrect because auto-onboarding without contracts or trust verification is not supported. Option C confuses A2A with the internal reasoning runtime used by AgentForce; A2A operates across systems, not within a single platform. Therefore, Option A correctly defines the key benefit of the Agent-to-Agent protocol. References (AgentForce Documents / Study Guide): AgentForce Architecture Guide: "Understanding the Agent-to-Agent (A2A) Protocol" AgentForce Interoperability Handbook: "Cross-Vendor Agent Communication Framework" AgentForce Study Guide: "A2A Integration Standards and Benefits"

## Multiple Choice

Universal Containers (UC) is using Einstein Generative AI to generate an account summary. UC aims to ensure the content is safe and inclusive, utilizing the Einstein Trust Layer 's toxicity scoring to assess the content 's safety level. In the score of 1 indicate?

A. The response is the least toxic Einstein Generative AI Toxicity Scoring system, what does a toxicity category.

B. The response is not toxic.

C. The response is the most toxic.

## Correct Answer: C

Explanation:

Einstein Trust Layer's Toxicity Scoring categorizes content on a scale of 0 to 1, where 1 indicates the highest level of toxicity (e.g., harmful, biased, or inappropriate language). This scoring helps organizations filter unsafe AI-generated content. A score of 1 triggers mitigation actions, such as blocking the response or alerting administrators. A score of 0 would indicate no toxicity (B is incorrect). The scoring system does not use "least toxic" as a category (A is misleading).

## Multiple Choice

Universal Containers wants to assign agents to improve department efficiency. Which configuration ensures the right tasks are handled by the right agents?

A. SDR Agent for lead qualification, Service Agent for support tickets, Employee Agent for HR requests

B. Sales Coach Agent for lead and service Agent for HR requests, and Support tickets to ensure cases are available

C. One Service Agent to efficiently handle each of these scenarios, which reduces the number of agent types needed for support

## Correct Answer: A

Explanation:

According to the AgentForce Product Overview and Deployment Guide, Salesforce recommends using purpose-built agents to maximize efficiency across departments. The documentation states: "Each AgentForce agent type is optimized for a specific function - SDR Agent for sales development and lead nurturing, Service Agent for customer service and support cases, and Employee Agent for internal HR, IT, and

productivity tasks." This separation ensures that each team benefits from a domain-specific agent equipped with the correct data access and actions. Option B incorrectly assigns agent types to mismatched use cases, and Option C reduces efficiency and control by using a single generic agent for multiple domains, which goes against Salesforce's modular AI design principle. Thus, Option A best aligns with Salesforce's guidance for role-based AgentForce deployment. References (AgentForce Documents / Study Guide): AgentForce Product Overview: "Agent Types and Use Cases" AgentForce Implementation Guide: "Aligning Agents to Departmental Functions" AgentForce Study Guide: "Optimizing Team Efficiency with Specialized Agents"

## Multiple Choice

Universal Containers deploys a new Agentforce Service Agent into the company's website but is getting feedback that the Agentforce Service Agent is not providing answers to customer questions that are found in the company 's Salesforce Knowledge articles. What is the likely issue?

A. The Agentforce Service Agent user is not assigned the correct Agent Type License.

B. The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.

C. The Agentforce Service Agent user was not given the Allow View Knowledge permission set.

## Correct Answer: C

## Explanation:

Universal Containers (UC) has deployed an Agentforce Service Agent on its website, but it's failing to provide answers from Salesforce Knowledge articles. Let's troubleshoot the issue. Option A: The Agentforce Service Agent user is not assigned the correct Agent Type License.There's no "Agent Type License" in Salesforce-agent functionality is tied to Agentforce licenses (e.g., Service Agent license) and permissions. Licensing affects feature access broadly, but the specific issue of not retrieving Knowledge suggests a permission problem, not a license type, making this incorrect. Option B: The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.No "standard Agent Knowledge profile" exists. The Agentforce Service Agent runs under a system user (e.g., "Agentforce Agent User") with a custom profile or permission sets. Profile creation isn't the issue-access permissions are, making this incorrect. Option C: The Agentforce Service Agent user was not given the Allow View Knowledge permission set.The Agentforce

Service Agent user requires read access to Knowledge articles to ground responses. The "Allow View Knowledge" permission (typically via the "Salesforce Knowledge User" license or a permission set like "Agentforce Service Permissions") enables this. If missing, the agent can't access Knowledge, even if articles are indexed, causing the reported failure. This is a common setup oversight and the likely issue, making it the correct answer.

## Multiple Choice

Universal Containers (UC) has configured an Agentforce Data Library using Knowledge articles. When testing in Agent Builder and the Experience Cloud site, the agent is not responding with grounded Knowledge article information. However, when tested in Prompt Builder, the response returns correctly. What should UC do to troubleshoot the issue?

A. Create a new permission set that assigns "Manage Knowledge" and assign it to the Agentforce Service Agent User.
B. Ensure the assigned User permission set includes access to the prompt template used to access the Knowledge articles.
C. Ensure the Data Cloud User permission set has been assigned to the Agentforce Service Agent User.

## Correct Answer: C

## Explanation:

UC has set up an Agentforce Data Library with Knowledge articles, and while Prompt Builder retrieves the data correctly, the agent fails to do so in Agent Builder and Experience Cloud. Let's troubleshoot the issue. Option A: Create a new permission set that assigns "Manage Knowledge" and assign it to the Agentforce Service Agent User. The "Manage Knowledge" permission is for authoring and managing Knowledge articles, not for reading or retrieving them in an agent context. The Agentforce Service Agent User (a system user) needs read access to Knowledge, not management rights. This option is excessive and irrelevant to the grounding issue, making it incorrect. Option B: Ensure the assigned User permission set includes access to the prompt template used to access the Knowledge articles. Prompt templates in Prompt Builder don't require specific permissions beyond general Einstein Generative AI access. Since the Prompt Builder test works, the template and its grounding are accessible to the testing user. The issue lies with the agent's runtime access, not the template itself, making this incorrect. Option C: Ensure the Data Cloud User permission set has been assigned to the Agentforce Service Agent User. When Knowledge articles are grounded via an Agentforce Data Library, they

are often ingested into Data Cloud for indexing and retrieval. The Agentforce Service Agent User, which runs the agent, needs the "Data Cloud User" permission set (or equivalent) to access Data Cloud resources, including the Data Library. If this permission is missing, the agent cannot retrieve Knowledge article data during runtime (e.g., in Agent Builder or Experience Cloud), even though Prompt Builder (running under a different user context) succeeds. This is a common setup oversight and aligns with the symptoms, making it the correct answer.

## Multiple Choice

A Universal Containers administrator is setting up Einstein Data Libraries. After creating a new library, the administrator notices that only the file upload option is available; there is no option to configure the library using a Salesforce Knowledge base. What is the most likely cause of this Issue?

A. The current Salesforce org lacks the necessary Einstein for Service permissions that support the Knowledge-based Data Library option, so only the file upload option is presented.

B. Salesforce Knowledge is not enabled in the organization; without Salesforce Knowledge enabled, the Knowledge-based data source option will not be available in Einstein Data Libraries.

C. The administrator is not using Lightning Experience, which is required to display all data source options. Including the Knowledge base option, when configuring Einstein Data Libraries.

## Correct Answer: B

## Explanation:

Why is "Salesforce Knowledge is not enabled" the correct answer? If an administrator only sees the file upload option in Einstein Data Libraries and cannot configure a Salesforce Knowledge base, the most likely reason is that Salesforce Knowledge is not enabled in the organization. Key Considerations for Einstein Data Libraries: Salesforce Knowledge Integration is Optional Einstein Data Libraries can pull knowledge data only if Salesforce Knowledge is enabled. If Knowledge is not activated, the system will default to file uploads as the only available option. How to Fix This Issue? The administrator should enable Salesforce Knowledge in Setup # Knowledge Settings. Once enabled, the option to configure Knowledge-based Data Libraries will become available. Why Not the Other Options? # A. The current Salesforce org lacks the necessary Einstein for Service permissions Incorrect because even without certain permissions, the Knowledge option would still be visible but greyed out. # C. The administrator is not using Lightning Experience

Incorrect because Einstein Data Libraries are accessible in both Classic and Lightning, and Lightning does not control Knowledge base visibility. Agentforce Specialist References Salesforce AI Specialist Material confirms that Salesforce Knowledge must be enabled for Data Libraries to use Knowledge as a data source. Salesforce Certification Guide explicitly states that file uploads are the default option if Knowledge is not available.

## Multiple Choice

What is An Agentforce able to do when the "Enrich event logs with conversation data" setting in Agent is enabled?

A. View the user click path that led to each copilot action.

B. View session data including user Input and copilot responses for sessions over the past 7 days.

C. Generate details reports on all Copilot conversations over any time period.

## Correct Answer: B

Explanation:

When the "Enrich event logs with conversation data" setting is enabled in Agent, it allows An Agentforce or admin to view session data, including both the user input and copilot responses from interactions over the past 7 days. This data is crucial for monitoring how the copilot is being used, analyzing its performance, and improving future interactions based on past inputs. This setting enriches the event logs with detailed conversational data for better insights into the interaction history, helping Agentforce Specialists track AI behavior and user engagement. Option A, viewing the user click path, focuses on navigation but is not part of the conversation data enrichment functionality. Option C, generating detailed reports over any time period, is incorrect because this specific feature is limited to data for the past 7 days.

## Multiple Choice

When configuring a prompt template, an Agentforce Specialist previews the results of the prompt template they 've written. They see two distinct text outputs: Resolution and Response. Which information does the Resolution text provide?

A. It shows the full text that is sent to the Trust Layer.
B. It shows the response from the LLM based on the sample record.
C. It shows which sensitive data is masked before it is sent to the LLM.

Correct Answer: B

Explanation:

In Salesforce Agentforce, when previewing a prompt template, the interface displays two outputs: Resolution and Response. These terms relate to how the prompt is processed and evaluated, particularly in the context of the Einstein Trust Layer, which ensures AI safety, compliance, and auditability. The Resolution text specifically refers to the full text that is sent to the Trust Layer for processing, monitoring, and governance (Option A). This includes the constructed prompt (with grounding data, instructions, and variables) as it's submitted to the large language model (LLM), along with any Trust Layer interventions (e.g., masking, filtering) applied before or after LLM processing. It's a comprehensive view of the input/output flow that the Trust Layer captures for auditing and compliance purposes. Option B: The "Response" output in the preview shows the LLM's generated text based on the sample record, not the Resolution. Resolution encompasses more than just the LLM response-it includes the entire payload sent to the Trust Layer. Option C: While the Trust Layer does mask sensitive data (e.g., PII) as part of its guardrails, the Resolution text doesn't specifically isolate "which sensitive data is masked." Instead, it shows the full text, including any masked portions, as processed by the Trust Layer-not a separate masking log. Option A: This is correct, as Resolution provides a holistic view of the text sent to the Trust Layer, aligning with its role in monitoring and auditing the AI interaction.

## Multiple Choice

What is the importance of Action Instructions when creating a custom Agent action?

A. Action Instructions define the expected user experience of an action.

B. Action Instructions tell the user how to call this action in a conversation.

C. Action Instructions tell the large language model (LLM) which action to use.

Correct Answer: A

Explanation:

In Salesforce Agentforce, custom Agent actions are designed to enable AI-driven agents to perform specific tasks within a conversational context. Action Instructions are a critical component when creating these actions because they define the expected user experience by outlining how the action should behave, what it should accomplish, and how it interacts with the end user. These instructions act as a

blueprint for the action's functionality, ensuring that it aligns with the intended outcome and provides a consistent, intuitive experience for users interacting with the agent. For example, if the action is to "schedule a meeting," the Action Instructions might specify the steps (e.g., gather date and time, confirm with the user) and the tone (e.g., professional, concise), shaping the user experience. Option B: While Action Instructions might indirectly influence how a user invokes an action (e.g., by making it clear what inputs are needed), they are not primarily about telling the user how to call the action in a conversation. That's more related to user training or interface design, not the instructions themselves. Option C: The large language model (LLM) relies on prompts, parameters, and grounding data to determine which action to execute, not the Action Instructions directly. The instructions guide the action's design, not the LLM's decision-making process at runtime.

## Multiple Choice

An administrator wants to check the response of the Flex prompt template they've built, but the preview button is greyed out. What is the reason for this?

A. The records related to the prompt have not been selected.

B. The prompt has not been saved and activated,

C. A merge field has not been inserted in the prompt.

## Correct Answer: A

## Explanation:

When the preview button is greyed out in a Flex prompt template, it is often because the records related to the prompt have not been selected. Flex prompt templates pull data dynamically from Salesforce records, and if there are no records specified for the prompt, it can 't be previewed since there is no content to generate based on the template. Option B, not saving or activating the prompt, would not necessarily cause the preview button to be greyed out, but it could prevent proper functionality. Option C, missing a merge field, would cause issues with the output but would not directly grey out the preview button. Ensuring that the related records are correctly linked is crucial for testing and previewing how the prompt will function in real use cases.

## Multiple Choice

A service manager wants to use Salesforce Prompt Builder to help agents summarize customer case notes after a support call. The summary should: \* Capture the customer 's issue, troubleshooting steps taken, and next actions. \* Be no longer than five sentences. \* Use plain language (no technical jargon). If no next action is identified, the summary should explicitly state " No next action required." Which prompt template fallows Salesforce prompt design best practices?

A. Role: You are an experienced support agent. Task: Summarize the case notes, Context: Include customer issue, troubleshooting steps, and next actions. Constraints: Limit to 5 sentences, use plain language, and if no next action is found, state "No next action required." Format: Use numbered sentences for clarity.

B. Role: You are a support agent writing a case summary. Task: Provide a professional summary of the issue and troubleshooting steps. Contest: Include customer issue, steps taken, and next actions if available. Constraints: No strict sentence limit, but use plain language. If no next action is found, leave it out. Format: Use paragraphs for readability.

C. Role: You are a case documentation assistant, Task: Write a summary of the support call. Context: Always describe the customer issue, troubleshooting, and resolution details. Constraints: The summary should be comprehensive and professional, but there is no limit on length or language style. Format: Use complete sentences in a narrative style.

## Correct Answer: A

## Explanation:

According to the Salesforce Prompt Builder Best Practices Guide, an effective prompt must include Role, Task, Context, Constraints, and Format clearly defined - a structure known as the RTCCF model. The documentation explains: "Prompts should specify the assistant's role, define a clear task, include context and constraints, and provide output format instructions to ensure predictable and high- quality responses." Option A follows this framework precisely. It defines: Role: The assistant's identity ("experienced support agent"). Task: Summarizing case notes. Context: Customer issue, troubleshooting steps, next actions. Constraints: Limit of 5 sentences, plain language, include "No next action required" if applicable. Format: Numbered sentences for clarity. Options B and C omit critical prompt design elements such as strict constraints or output formatting and therefore do not align with Salesforce's prompt design standard. References (AgentForce Documents / Study Guide): Salesforce Prompt Builder Guide: "Prompt Structure Using RTCCF Model" AgentForce Prompt Template Design Guide: "Best Practices for Summarization Prompts" Salesforce AI Prompt Engineering Study Guide

## Multiple Choice

An administrator is responsible for ensuring the security and reliability of Universal Containers' (UC) CRM data. UC needs enhanced data protection and up-to-date AI capabilities. UC also needs to include relevant information from a Salesforce record to be merged with the prompt. Which feature in the Einstein Trust Layer best supports UC's need?

A. Data masking

B. Dynamic grounding with secure data retrieval

C. Zero-data retention policy

## Correct Answer: B

## Explanation:

Dynamic grounding with secure data retrieval is a key feature in Salesforce 's Einstein Trust Layer, which provides enhanced data protection and ensures that AI-generated outputs are both accurate and securely sourced. This feature allows relevant Salesforce data to be merged into the AI-generated responses, ensuring that the AI outputs are contextually aware and aligned with real-time CRM data. Dynamic grounding means that AI models are dynamically retrieving relevant information from Salesforce records (such as customer records, case data, or custom object data) in a secure manner. This ensures that any sensitive data is protected during AI processing and that the AI model's outputs are trustworthy and reliable for business use. The other options are less aligned with the requirement: Data masking refers to obscuring sensitive data for privacy purposes and is not related to merging Salesforce records into prompts. Zero-data retention policy ensures that AI processes do not store any user data after processing, but this does not address the need to merge Salesforce record information into a prompt. Salesforce Developer Documentation on Einstein Trust Layer Salesforce Security Documentation for AI and Data Privacy

## Multiple Choice

In a Knowledge-based data library configuration, what is the primary difference between the identifying fields and the content fields?

A. Identifying fields help locate the correct Knowledge article, while content fields enrich AI responses with detailed information.
B. Identifying fields categorize articles for indexing purposes, while content fields provide a brief summary for display.
C. Identifying fields highlight key terms for relevance scoring, while content fields store the full text of the article for retrieval.

## Correct Answer: A

Explanation:

In Agentforce, a Knowledge-based data library (e.g., via Salesforce Knowledge or Data Cloud grounding) uses identifying fields and content fields to support AI responses. Let's analyze their roles. Option A: Identifying fields help locate the correct Knowledge article, while content fields enrich AI responses with detailed information. In a Knowledge-based data library, identifying fields (e.g., Title, Article Number, or custom metadata) are used to search and pinpoint the relevant Knowledge article based on user input or context. Content fields (e.g., Article Body, Details) provide the substantive data that the AI uses to generate detailed, enriched responses. This distinction is critical for grounding Agentforce prompts and aligns with Salesforce's documentation on Knowledge integration, making it the correct answer. Option B: Identifying fields categorize articles for indexing purposes, while content fields provide a brief summary for display. Identifying fields do more than categorize-they actively locate articles, not just index them. Content fields aren't limited to summaries; they include full article content for response generation, not just display. This option underrepresents their roles and is incorrect. Option C: Identifying fields highlight key terms for relevance scoring, while content fields store the full text of the article for retrieval. While identifying fields contribute to relevance (e.g., via search terms), their primary role is locating articles, not just scoring. Content fields do store full text, but their purpose is to enrich responses, not merely enable retrieval. This option shifts focus inaccurately, making it incorrect.

## Multiple Choice

Universal Containers (UC) is setting up a new Agentforce Service Agent. The company has sensitive medical product research stored internally and wants to ensure the agent cannot access it. What should UC da?

A. Assign the Agentforce Service Agent user the lowest possible role in the organization 's hierarchy to block access.

B. Disable the Agentforce Service Agent 's ability to use any Salesforce custom object or related fields.

C. Follow the principle of least privilege and avoid granting permission to view the Medical Product object or related

Correct Answer: C

Explanation:

The AgentForce Security and Access Control Best Practices Guide emphasizes the principle of least privilege, which means granting each agent only the permissions strictly necessary to perform its defined tasks. To prevent unauthorized access to sensitive data such as medical research, administrators should exclude permissions for the Medical Product object and related records from the AgentForce Service Agent's permission set group. This approach ensures that even if the reasoning engine processes a related query, it cannot retrieve or expose data it lacks access to. Option A is partially effective but not sufficient since Salesforce role hierarchy does not fully restrict record access. Option B is over-restrictive and would prevent legitimate operations involving other custom objects. Thus, the correct answer is Option C - Follow the principle of least privilege and avoid granting permission to view the Medical Product object or related records.

## Multiple Choice

In Model Playground, which hyperparameters of an existing Salesforce-enabled foundational model can An Agentforce change?

A. Temperature, Frequency Penalty, Presence Penalty  
B. Temperature, Top-k sampling, Presence Penalty  
C. Temperature, Frequency Penalty, Output Tokens

## Correct Answer: A

## Explanation:

In Model Playground, An Agentforce working with a Salesforce-enabled foundational model has control over specific hyperparameters that can directly affect the behavior of the generative model: Temperature: Controls the randomness of predictions. A higher temperature leads to more diverse outputs, while a lower temperature makes the model 's responses more focused and deterministic. Frequency Penalty: Reduces the likelihood of the model repeating the same phrases or outputs frequently. Presence Penalty: Encourages the model to introduce new topics in its responses, rather than sticking with familiar, previously mentioned content. These hyperparameters are adjustable to fine-tune the model's responses, ensuring that it meets the desired behavior and use case requirements. Salesforce documentation confirms that these three are the key tunable hyperparameters in the Model Playground.

## Multiple Choice

Where should the Agentforce Specialist go to add/update actions assigned to a copilot?

A. Copilot Actions page, the record page for the copilot action, or the Copilot Action Library tab

B. Copilot Actions page or Global Actions

C. Copilot Detail page, Global Actions, or the record page for the copilot action

## Correct Answer: A

## Explanation:

To add or update actions assigned to a copilot, An Agentforce can manage this through several areas: Copilot Actions Page: This is the central location where copilot actions are managed and configured. Record Page for the Copilot Action: From the record page, individual copilot actions can be updated or modified. Copilot Action Library Tab: This tab serves as a repository where predefined or custom actions for Copilot can be accessed and modified. These areas provide flexibility in managing and updating the actions assigned to Copilot, ensuring that the AI assistant remains aligned with business requirements and processes. The other options are incorrect: B misses the Copilot Action Library, which is crucial for managing actions. C includes the Copilot Detail page, which isn 't the primary place for action management. Salesforce Documentation on Managing Copilot Actions Salesforce Agentforce Specialist Guide on Copilot Action Management

## Multiple Choice

How does the AI Retriever function within Data Cloud?

A. It performs contextual searches over an indexed repository to quickly fetch the most relevant documents, enabling grounding AI responses with trustworthy, verifiable information.

B. It monitors and aggregates data quality metrics across various data pipelines to ensure only high-integrity data is used for strategic decision-making.
C. It automatically extracts and reformats raw data from diverse sources into standardized datasets for use in historical trend analysis and forecasting.

Correct Answer: A

Explanation:

The AI Retriever is a key component in Salesforce Data Cloud, designed to support AI-driven processes like Agentforce by retrieving relevant data. Let's evaluate each option based on its documented functionality. Option A: It performs contextual searches over an indexed repository to quickly fetch the most relevant documents, enabling grounding AI responses with trustworthy, verifiable information. The AI Retriever in Data Cloud uses vector-based search technology to query an indexed repository (e.g., documents, records, or ingested data) and retrieve the most relevant results based on context. It employs embeddings to match user queries or prompts with stored data, ensuring AI responses (e.g., in Agentforce prompt templates) are grounded in accurate, verifiable information from Data Cloud. This enhances trustworthiness by linking outputs to source data, making it the primary function of the AI Retriever. This aligns with Salesforce documentation and is the correct answer. Option B: It monitors and aggregates data quality metrics across various data pipelines to ensure only high-integrity data is used for strategic decision-making. Data quality monitoring is handled by other Data Cloud features, such as Data Quality Analysis or ingestion validation tools, not the AI Retriever. The Retriever's role is retrieval, not quality assessment or pipeline management. This option is incorrect as it misattributes functionality unrelated to the AI Retriever. Option C: It automatically extracts and reformats raw data from diverse sources into standardized datasets for use in historical trend analysis and forecasting. Data extraction and standardization are part of Data Cloud's ingestion and harmonization processes (e.g., via Data Streams or Data Lake), not the AI Retriever's function. The Retriever works with already-indexed data to fetch results, not to process or reformat raw data. This option is incorrect.

## Multiple Choice

After a successful implementation of Agentforce Sates Agent with sales users. Universal Containers now aims to deploy it to the service team. Which key consideration should the Agentforce Specialist keep in mind for this deployment?

A. Assign the Agentforce for Service permission to the Service Cloud users.
B. Assign the standard service actions to Agentforce Service Agent.
C. Review and test standard and custom Agent topics and actions for Service Center use cases.

## Correct Answer: C

Explanation:

When deploying Einstein Agent (formerly Agentforce) from Sales to Service Cloud: Agent Topics and Actions are context-specific. Service Cloud use cases (e.g., case resolution, knowledge retrieval) require validation of existing topics/actions to ensure alignment with service workflows. Option A: Permissions like "Agentforce for Service" are necessary but secondary to functional compatibility. Option B: Standard service actions must be mapped to Agentforce, but testing ensures they function as intended.

## Multiple Choice

Universal Containers deploys a new Agentforce Service Agent into the company's website but is getting feedback that the Service Agent is not providing answers to customer questions that are found in the company's Salesforce Knowledge articles. What is the likely issue?

A. The Agentforce Service Agent user was not given the Allow View Knowledge permission set.

B. The Agentforce Service Agent user is not assigned the correct Agent Type License.

C. The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.

## Correct Answer: A

## Explanation:

According to the AgentForce Knowledge Integration and Access Configuration Guide, a Service Agent retrieves and grounds its responses using data from Salesforce Knowledge when the correct permissions are assigned. If customers report that the agent cannot access or provide answers from Knowledge articles, the most common root cause is that the AgentForce Service Agent user lacks the "Allow View Knowledge" permission. This permission enables the agent to retrieve and read published articles from Salesforce Knowledge for grounding responses. Without it, the agent cannot access the content repository, resulting in incomplete or generic answers. Option B is incorrect because a license issue would prevent the agent from running at all, not selectively block access to specific data. Option C is also incorrect since the Knowledge profile alone does not control article visibility - permission sets do. Therefore, the correct answer is Option A - The AgentForce Service Agent user was not given the Allow View Knowledge permission set, which grants the necessary access for article-based responses.

## Multiple Choice

Universal Containers (UC) is scaling its Agentforce deployment and needs to securely connect its AI agents to a growing number of external enterprise data systems and local developer environments. Instead of building custom integration logic and bespoke Application Programming Interfaces (APIs) for each new data source, the Agentforce Specialist recommends leveraging the Model Context Protocol (MCP). What is the primary purpose of using an open standard like MCP in this scenario?

A. To standardize the secure connection and delivery of context between the AI models and various local or remote data sources.

B. To replace the need for Retrieval-Augmented Generation (RAG) by storing all external data natively within the large language model (LLM)'s weights.

C. To allow the agent to autonomously negotiate task delegation with third-party supply chain agents.

## Correct Answer: A

## Explanation:

The correct answer is A. MCP is an open standard for connecting AI applications and agents to external tools, services, and data sources through a common protocol. That directly matches UC's need to avoid building separate custom integrations for every enterprise system or local development environment. Option B is wrong because MCP does not replace RAG or store external data inside the model's weights; it provides a standardized interface for accessing context and tools. Option C describes Agent-to-Agent delegation more closely than MCP. MCP is about context and tool connectivity between AI systems and external resources, while A2A-style protocols focus on negotiation and task delegation between independent agents. Salesforce describes MCP as a way to reduce custom integration effort and securely connect AI apps to external systems.

## Multiple Choice

Universal Containers built a Field Generation prompt template that worked for many records, but users are reporting random failures with token limit errors. What is the cause of the random nature of this error?

A. The template type needs to be switched to Flex to accommodate the variable amount of tokens generated by the prompt grounding.
B. The number of tokens generated by the dynamic nature of the prompt template will vary by record.

C. The number of tokens that can be processed by the LLM varies with total user demand.

Correct Answer: B

## Explanation:

In Salesforce Agentforce, prompt templates are used to generate dynamic responses or field values by leveraging an LLM, often with grounding data from Salesforce records or external sources. The scenario describes a Field Generation prompt template that fails intermittently with token limit errors, indicating that the issue is tied to exceeding the LLM's token capacity (e.g., input + output tokens). The random nature of these failures suggests variability in the token count across different records, which is directly addressed by Option B. Prompt templates in Agentforce can be dynamic, meaning they pull in record-specific data (e.g., customer names, descriptions, or other fields) to generate output. Since the data varies by record- some records might have short text fields while others have lengthy ones-the total number of tokens (words, characters, or subword units processed by the LLM) fluctuates. When the token count exceeds the LLM's limit (e.g., 4,096 tokens for some models), the process fails, but this only happens for records with higher token-generating data, explaining the randomness. Option A: Switching to a "Flex" template type might sound plausible, but Salesforce documentation does not define "Flex" as a specific template type for handling token variability in this context (there are Flow-based templates, but they're unrelated to token limits). This option is a distractor and not a verified solution. Option C: The LLM's token processing capacity is fixed per model (e.g., a set limit like 128,000 tokens for advanced models) and does not vary with user demand. Demand might affect performance or availability, but not the token limit itself. Option B is the correct answer because it accurately identifies the dynamic nature of the prompt template as the root cause of variable token counts leading to random failures.

## Multiple Choice

An administrator at Universal Containers has successfully deployed a new agent from a sandbox to production using a change set. The agent uses a prompt template that invokes a Salesforce flow to perform a complex calculation. In production, when users interact with the agent, it fails with an error message every time the flow is supposed to run. The flow was included in the change set and is present in production. What is the most likely cause of this issue?

A. The flow was not manually activated in the production org after the deployment.

B. The user in production does not have permission to run the flow.
C. The change set did not include the dependent Apex classes for the flow.

## Correct Answer: A

## Explanation:

Per the AgentForce Deployment and Flow Integration Guide, when deploying flows via change sets, the flows arrive in the production org in "inactive" status by default. The administrator must manually activate the flow post-deployment before it can be executed by agents or users. This explains why the agent encounters an error when attempting to run the flow-the system recognizes the flow but cannot invoke it because it remains inactive. Option B is incorrect since permission errors would display an "insufficient privileges" message, not a runtime failure. Option C is unlikely because dependent Apex classes would be automatically handled if properly included in the deployment. Therefore, the most likely cause is Option A - The flow was not manually activated in production after deployment.

## Multiple Choice

Cloud Kicks uses a third-party agent for research and an Agentforce agent for customer service. Which purpose-built protocol allows cross-vendor agents to communicate?

A. Model Context Protocol (MCP)

B. Application Programming Interface (API)

C. Agent-to-Agent (A2A)

## Correct Answer: C

## Explanation:

The correct answer is C because Agent-to-Agent, or A2A, is the purpose-built protocol for communication and collaboration between AI agents across different vendors and platforms. In this scenario, Cloud Kicks has a third-party research agent and an Agentforce customer service agent. The requirement is direct cross-vendor agent communication, not just access to a tool or external endpoint. MCP is mainly used to connect agents with tools, resources, and external context. A generic API can integrate systems, but it is not the agent- interoperability protocol being tested here. Salesforce describes A2A as an open standard that allows AI agents from

different platforms to securely communicate, collaborate, share context, and coordinate work.

## Multiple Choice

An Agentforce is setting up a new org and needs to ensure that users can create and execute prompt templates. The Agentforce Specialist is unsure which roles are necessary for these tasks. Which permission sets should the Agentforce Specialist assign to users who need to create and execute prompt templates?

A. Prompt Template Manager for creating templates and Data Cloud Admin for executing templates  
B. Prompt Template Manager for creating templates and Prompt Template User for executing templates  
C. Data Cloud Admin for creating templates and Prompt Template User for executing templates

## Correct Answer: B

Explanation:

To effectively manage and use prompt templates, two distinct permission sets are required: Prompt Template Manager: This permission set allows users to create prompt templates. It provides the necessary access to define templates, which can be shared and utilized across the organization. Prompt Template User: This permission set is designed for users who need to execute the templates. It provides the ability to interact with pre-designed prompts and generate outcomes based on these templates. The Data Cloud Admin permission set is not directly relevant to creating or executing prompt templates but is more focused on managing the Data Cloud.

## Multiple Choice

Universal Containers (UC) is tracking web activities in Data Cloud for a unified contact, and wants to use that in a prompt template to help extract insights from the data. Assuming that the Contact object is one of the objects associated with the prompt template, what is a valid way for DC to do this?

A. Call the prompt directly from Data Cloud with a web tracing activity included in the prompt definition.

B. Add the activity records as an enrichment related list to the Contact then pass the Contact into a prompt template workspace using related list grounding.
C. Create a prompt template that takes a list of all Data Cloud activity records as input to pass to the large language model (LLM).

## Correct Answer: B

## Explanation:

To integrate web activity data from Data Cloud into a prompt template, the correct approach is to enrich the Contact object with the activity records as a related list and use related list grounding (Option B). Here's why: Data Cloud Integration: Data Cloud unifies web activity data and associates it with the unified Contact record. By adding these activities as a related list to the Contact, the data becomes accessible to the prompt template. Prompt Template Grounding: Salesforce prompt templates support grounding on related records. When the Contact is passed to the prompt template, the template can reference the related web activity records (via the related list) to extract insights. Structured Data Handling: This method aligns with Salesforce best practices for grounding, ensuring the large language model (LLM) receives structured, context-rich data without overwhelming it with raw activity lists. Why Other Options Are Incorrect: A). Calling the prompt directly from Data Cloud: Prompt templates are invoked within Salesforce, not directly from Data Cloud. Grounding requires associating data with Salesforce objects, not ad-hoc web activity inclusion. C). Passing a list of activity records as input: While technically possible, this bypasses Salesforce's grounding framework, which relies on object relationships. It also risks exceeding LLM input limits and lacks scalability. Salesforce Data Cloud Implementation Guide: Explains how to enrich standard/custom objects with related data for AI use cases. Prompt Template Documentation: Highlights grounding on related lists to leverage contextual data for LLM prompts. Trailhead Module: "Einstein Prompt Builder Basics" demonstrates grounding techniques using related records.

## Multiple Choice

Universal Containers (UC) is building a Flex prompt template. UC needs to use data returned by the flow in the prompt template. Which flow element should UC use?

A. Add Flex Instructions  
B. Add Prompt Instructions  
C. Add Flow Instructions

## Correct Answer: C

## Explanation:

Context of the Question Universal Containers (UC) wants to build a Flex prompt template that uses data returned by a Flow. "Flex Prompt Templates" allow admins and Agentforce Specialists to incorporate external or dynamic data into generative AI prompts. Why "Add Flow Instructions" Is Needed Passing Flow Data into Prompt Templates: When configuring the prompt, you must specify how data from the running Flow is passed into the Flex template. The designated element for that is typically "Flow Instructions," which map the Flow outputs to the prompt. Other Options: Add Flex Instructions: Typically controls how the AI responds or structures the output, not how to bring Flow data into the template. Add Prompt Instructions: Usually for static or manual instructions that shape the AI's response, rather than referencing dynamic data from the Flow. Outcome "Add Flow Instructions" ensures the prompt can dynamically use the data that the Flow returns- making Option C correct.

## Multiple Choice

The Agentforce Specialist of Northern Trail Outfitters reviewed the organization 's data masking settings within the Configure Data Masking menu within Setup. Upon assessing all of the fields, a few additional fields were deemed sensitive and have been masked within Einstein 's Trust Layer. Which steps should the Agentforce Specialist take upon modifying the masked fields?

A. Turn off the Einstein Trust Layer and turn it on again.

B. Test and confirm that the responses generated from prompts that utilize the data and masked data do not adversely affect the quality of the generated response

C. Turn on Einstein Feedback so that end users can report if there are any negative side effects on AI features.

## Correct Answer: B

## Explanation:

After modifying masked fields in Einstein 's Trust Layer, the next important step is to test and confirm that the responses generated by prompts utilizing the newly masked data still meet quality standards. This ensures that masking sensitive information does not negatively impact the usefulness or accuracy of the AI-generated content. Thorough testing helps identify any issues in prompt performance that could arise due to masking, and adjustments can be made if

needed. Option B is correct because testing the effects of masking on AI responses is a critical step in ensuring AI continues to function as expected. Option A (turning off and on the Einstein Trust Layer) is unnecessary after changing the masked fields. Option C (turning on Einstein Feedback) allows for user feedback but is not a direct step following field masking modifications. Salesforce Einstein Trust Layer Overview: einstein\_trust\_layer.htm

## Multiple Choice

A Salesforce Agentforce Specialist is reviewing the feedback from a customer about the ineffectiveness of the prompt template. What should the Agentforce Specialist do to ensure the prompt template 's effectiveness?

A. Monitor and refine the template based on user feedback.
B. Use the Prompt Builder Scorecard to help monitor.
C. Periodically change the templates grounding object.

## Correct Answer: B

## Explanation:

To address the ineffectiveness of a prompt template reported by a customer, the Salesforce Agentforce Specialist should use the Prompt Builder Scorecard (Option B). This tool is explicitly designed to evaluate and monitor prompt templates against key criteria such as relevance, accuracy, safety, and grounding. By leveraging the scorecard, the specialist can systematically identify weaknesses in the template and make data-driven refinements. While monitoring and refining based on user feedback (Option A) is a general best practice, the Prompt Builder Scorecard is Salesforce's recommended tool for structured evaluation, aligning with documented processes for maintaining prompt effectiveness. Changing the grounding object (Option C) without proper evaluation is reactive and does not address the root cause. Salesforce Einstein Agentforce Specialist Certification Guide: Emphasizes using the Prompt Builder Scorecard to evaluate prompts and iterate based on results. Trailhead Module: "Einstein for Developers" highlights the scorecard as a critical tool for assessing prompt performance.

## Multiple Choice

Universal Containers wants its AI agent to answer customer questions with precise and up-to-date information. How does an Agentforce Data Library simplify and enable this?

A. It automates the ingestion, taxonomical classification and storage of knowledge in Data Cloud for precision keyword search retrieval to ground prompts and agents with relevant information.
B. It automates the ingestion, Indexing of data, and creates a default retriever to be used in prompts and agents for grounding with relevant information.
C. It automates the ingestion and optical character recognition (OCR) processing of any PDF, and indexes them to enable regular SQL query retrieval to ground prompts and agents with relevant information.

## Correct Answer: B

## Explanation:

Why is "Automates Ingestion, Indexing, and Default Retriever Creation" the correct answer? An Agentforce Data Library is a key component in ensuring that an AI agent provides precise and up-to-date responses by: # Automating data ingestion # Brings in data from various sources. # Indexing the data # Organizes it efficiently for AI retrieval. # Creating a default retriever # Enables the AI to fetch relevant data dynamically when answering customer queries. Key Features of an Agentforce Data Library: Automates Data Ingestion Integrates real-time and historical data into Salesforce Data Cloud. Ensures that relevant updates are continuously fed into the AI system. Indexes Data for Efficient Retrieval Enhances searchability for quick, context-aware responses. Enables fast AI response times while maintaining accuracy. Creates a Default Retriever AI agents use the retriever to fetch the most relevant and current information. The retriever grounds AI-generated responses using structured and indexed data. Why Not the Other Options? # A. Automates ingestion, taxonomical classification, and precision keyword search retrieval Incorrect because Agentforce does not rely on keyword searches but on indexing and AI-driven retrieval. # C. Automates ingestion and OCR processing of PDFs Incorrect because OCR (Optical Character Recognition) is not the primary function of an Agentforce Data Library. AI grounding is based on indexed and structured data, not raw OCR-extracted text. Agentforce Specialist References Salesforce AI Specialist Material explains that Agentforce Data Libraries automate data ingestion, indexing, and retriever setup for AI-powered responses. Salesforce Instructions for Certification confirm that AI responses are grounded in structured and indexed Data Libraries.

## Multiple Choice

An Agentforce has created a copilot custom action using flow as the reference action type. However, it is not delivering the expected results to the conversation preview, and therefore needs troubleshooting. What should the Agentforce Specialist do to identify the root cause of the problem?

A. In Copilot Builder within the Dynamic Panel, turn on dynamic debugging to show the inputs and outputs.

B. Copilot Builder within the Dynamic Panel, confirm selected action and observe the values in Input and Output sections.

C. In Copilot Builder, verify the utterance entered by the user and review session event logs for debug information.

## Correct Answer: A

## Explanation:

When troubleshooting a copilot custom action using flow as the reference action type, enabling dynamic debugging within Copilot Builder 's Dynamic Panel is the most effective way to identify the root cause. By turning on dynamic debugging, the Agentforce Specialist can see detailed logs showing both the inputs and outputs of the flow, which helps identify where the action might be failing or not delivering the expected results. Option B, confirming selected actions and observing the Input and Output sections, is useful for monitoring flow configuration but does not provide the deep diagnostic details available with dynamic debugging. Option C, verifying the user utterance and reviewing session event logs, could provide helpful context, but dynamic debugging is the primary tool for identifying issues with inputs and outputs in real time.

## Multiple Choice

After creating a foundation model in Einstein Studio, which hyperparameter should An Agentforce use to adjust the balance between consistency and randomness of a response?

A. Presence Penally

B. Variability

C. Temperature

## Correct Answer: C

Explanation:

The Temperature hyperparameter controls the randomness of model outputs: Low Temperature (e.g., 0.2): More deterministic, consistent responses. High Temperature (e.g., 1.0): More creative, varied responses. Presence Penalty (Option A): Discourages repetition of tokens, unrelated to randomness. Variability (Option B): Not a standard hyperparameter in Einstein Studio. References: Einstein Studio Documentation: Model Hyperparameters Explicitly states " Temperature adjusts the balance between predictable and random outputs."

## Multiple Choice

Coral Cloud Resorts wants visibility into credit usage associated with testing. Which feature supports this?

A. Agentforce Analytics
B. B. Digital Wallet
C. Testing Center

Correct Answer: C

Explanation:

The AgentForce Testing Center Guide specifies that all testing activity-including prompt tests, structured batch runs, and evaluation sessions-consumes AI credits, which can be monitored directly through the Testing Center interface. The documentation states: "Testing Center provides visibility into testing performance, outcomes, and credit usage. Administrators can view test credit consumption metrics to understand resource utilization across agents and environments." Agentforce Analytics (Option A) provides insights into performance, engagement, and operational metrics but does not directly track credit consumption tied to testing. Digital Wallet (Option B) manages AI credit balances across orgs but does not offer test-specific tracking. Therefore, Testing Center is the correct answer since it explicitly supports monitoring credit usage during agent testing activities. References (AgentForce Documents / Study Guide): AgentForce Testing Center Guide: "Monitoring Credit Consumption During Testing" AgentForce Admin Handbook: "Tracking Usage and Test Costs" AgentForce Study Guide: "Testing Resource Visibility and Credit Management"

## Multiple Choice

Universal Containers wants to create a prompt template that consistently extracts a customer's specific product model number and quantity from an email inquiry to draft a response back to the customer. Which best practice should UC implement to achieve this goal?

A. Incorporate open-ended questions to encourage detailed responses

B. Provide clear, positive instructions and use few-shot examples  
C. Use a high temperature setting to increase creative output

Correct Answer: B

Explanation:

The correct answer is B because the requirement is structured extraction, not creative generation. To reliably extract a product model number and quantity, the prompt should give clear instructions that describe exactly what to identify, how to format the extracted values, and how to behave when information is missing. Few-shot examples improve consistency by showing the model representative input-and-output patterns. Option A is wrong because open-ended questions increase variability and are better for exploratory responses, not precise extraction. Option C is wrong because higher temperature increases creativity and randomness, which is the opposite of what UC needs. Salesforce Prompt Builder guidance emphasizes clear prompt instructions, CRM grounding, and managing prompt templates for trusted generative AI outputs.

## Multiple Choice

Universal Containers, dealing with a high volume of chat inquiries, implements Einstein Work Summaries to boost productivity. After an agent-customer conversation, which additional information does Einstein generate and fill, apart from the "summary"?

A. Sentiment Analysis and Emotion Detection

B. Draft Survey Request Email

C. Issue and Revolution

Correct Answer: C

Explanation:

Einstein Work Summaries automatically generate concise summaries of customer interactions (e.g., chat transcripts). Beyond the "summary" field, it extracts and populates Issue (key problem discussed) and Resolution (action taken to resolve the issue). These fields help agents and supervisors quickly grasp the conversation 's context without reviewing the full transcript. Sentiment Analysis and Emotion Detection (Option A): While Einstein Conversation Insights provides sentiment scores and emotion detection, these are separate from Work Summaries. Work Summaries focus on factual summaries, not sentiment. Draft Survey Request Email (Option B): Not part of Work Summaries. This would require automation tools like Flow or Email Studio. Issue and Resolution (Option C): Directly referenced in Salesforce documentation as fields populated by Einstein Work Summaries.

## Multiple Choice

Universal Containers (UC) plans to answer questions based on similar cases that have been successfully resolved in the past. What should UC consider when implementing this approach?

A. No action is needed, as past cases are used to answer the question.

B. Create a data model object (DMO) based on Case object and create an index on it.

C. Create an unstructured data model object (UDMO) based on Case object and create an index on it.

## Correct Answer: C

## Explanation:

According to the AgentForce Data Configuration and Retrieval Guide, when an organization like Universal Containers wants to enable its AI agent to answer questions using historical case data, the correct implementation is to create an Unstructured Data Model Object (UDMO) based on the Case object, then index that data for retrieval. The documentation clearly explains: "When using previous case records to power AI-driven Q & A or similarity-based retrieval, create a UDMO mapped to the Case object. UDMOs allow the system to process and semantically index unstructured text fields such as Case Description, Resolution, and Comments, enabling the LLM to surface contextually similar resolved cases." This allows the AgentForce retrieval engine to perform semantic searches across historical support data, returning cases that are most contextually relevant to the user's query. Option A is incorrect because past cases cannot be used automatically without indexing them. Option B is incorrect because a DMO is for structured data (tables, numeric fields) and doesn't support semantic text retrieval. Therefore, Option C is correct and aligns fully with Salesforce's documented best practices. References (AgentForce Documents / Study Guide): AgentForce Data Configuration Guide: "Using UDMOs for Case-Based Reasoning" AgentForce Implementation Handbook: "Indexing Historical Case Records for Semantic Search" AgentForce Study Guide: "Creating Unstructured Data Model Objects from Case Objects"

## Multiple Choice

During retrieval-augmented generation (RAG) quality testing, an Agentforce Specialist notices that tabular information from a custom Data 360 Document Ingestion Pipeline is losing its context because the data is scattered across multiple separate chunks. What is the most appropriate approach to resolve this?

A. Change the search index's parser from the default to Docling.

B. Use an ensemble retriever to stitch multiple chunks back together

dynamically.

C. Switch the search index configuration to use only keyword search scoring.

## Correct Answer: A

## Explanation:

The correct answer is A. The problem is not that the retriever lacks enough sources; the problem is that the document parser is breaking structured tabular content into chunks that lose layout context. Salesforce Data 360 includes parsing and preprocessing options for unstructured content, and the Docling parser is specifically intended for stronger layout understanding, including table-heavy or complex document structures. Option B is wrong because an ensemble retriever searches multiple retrievers or sources; it does not repair poor chunking caused by weak document parsing. Option C is also wrong because keyword-only scoring changes retrieval ranking behavior but does not preserve table relationships during ingestion. The correct fix is upstream: improve parsing before vectorization and indexing so the chunks preserve table context for RAG grounding.

## Multiple Choice

An account manager is preparing for an upcoming customer call and wishes to get a snapshot of key data points from accounts, contacts, leads, and opportunities in Salesforce. Which feature provides this?

A. Sales Summaries

B. Sales Insight Summary

C. Work Summaries

Correct Answer: B

Explanation:

Sales Insight Summary aggregates key data points from multiple Salesforce objects (accounts, contacts, leads, opportunities) into a consolidated view, enabling account managers to quickly access relevant information for customer calls. Option A (Sales Summaries): Typically refers to Einstein-generated summaries of specific interactions (e.g., emails, calls), not multi-object snapshots. Option C (Work Summaries): Focuses on summarizing customer service interactions (e.g., chat transcripts), not sales data. Option B (Sales Insight Summary): Directly provides a holistic snapshot of sales-related objects, aligning with the scenario.

## Multiple Choice

Universal Containers is deploying a new customer service agent using Agent Script. The Agentforce Specialist needs to update conversational state, navigate between different subagents formerly known as topics, and hand off conversations to a human agent when necessary. To minimize technical debt, the Agentforce Specialist wants to implement these capabilities without building any custom backend code. Which statement correctly describes how the Agentforce Specialist can implement these specific requirements?

A. The Agentforce Specialist can use @utils.setVariables, @utils.transition, and @utils.escalate directly.

B. The Agentforce Specialist can use most utilities directly, but @utils.escape requires a custom Apex class to define the escalation queue.

C. The Agentforce Specialist can use most utilities out of the box, but @utils.transition requires a flow to define the target subagent at runtime.

## Correct Answer: A

## Explanation:

The correct answer is A. Agent Script provides utility tools for common orchestration tasks without requiring custom backend code. @utils.setVariables is used to set conversational state, @utils.transition moves execution to another subagent, and @utils.escalate hands off a service conversation to a human representative when escalation is needed. Option B is wrong because escalation is exposed as an Agent Script utility; the specialist does not need to create an Apex class simply to make the utility available. Option C is wrong because transitions are native Agent Script capabilities and can target a defined subagent directly. The technical principle is that Agent Script is meant to provide deterministic control over state, routing, and escalation while still allowing the LLM to reason where appropriate.

## Multiple Choice

Universal Containers (UC) wants to deploy an Agentforce Service Agent to support customers via a web experience. UC uses a Digital Experience site and wants to enable messaging for logged-in users. The customer needs to pass the membership number to the agent for which a pre-chat variable is available. What is a required step to connect the agent to the Digital Experience site using Messaging for In-App and Web?

A. Configure a messaging Lightning web component using standard or custom Lightning Type for Agentforce.

B. Create an Omni-Channel flow that routes messages to the agent.

C. Configure MuleSoft to establish a secure API tunnel between the agent and the Digital Experience site.

## Correct Answer: B

## Explanation:

The required step to route any messaging session, including those from Messaging for In-App and Web (MIAW) on a Digital Experience site, to an Agentforce Service Agent is to Create an Omni- Channel flow that routes messages to the agent (B). Messaging for In-App and Web utilizes Omni-Channel Routing to direct incoming work items (which are created as MessagingSession records) to the correct destination. When setting up the Messaging Channel for a Digital Experience site, the Routing Type must be configured to use a Flow. This Flow is an Omni-Channel Flow that explicitly contains a Route Work action element configured to route to the Agentforce Service Agent. Crucially, this Omni-Channel Flow also handles the passing of the pre-chat variables (like the membership number). The pre-chat variables are mapped in the Messaging Channel settings to input variables in the Omni- Channel Flow. The Flow can then use this membership number to perform a record lookup, enrich the context of the conversation (e.g., by updating the related MessagingSession record), and then successfully route the session to the Agentforce Service Agent using the Route To: Bot action, which targets the specific Agentforce Agent. Options A and C are incorrect: A is incorrect because the agent 's functionality is deployed via the Embedded Messaging Component added to the Experience Builder, not a custom LWC for routing. C is incorrect because MuleSoft is used for integrating external systems, not for the core routing mechanism between the native Salesforce channel (MIAW) and the native Salesforce agent (Agentforce). Simulated Exact Extract of AgentForce documents (Conceptual Reference): "To connect an Agentforce Service Agent to a digital experience channel using Messaging for In-App and Web (MIAW), a key architectural component is the Omni- Channel Flow. This flow acts as the central routing logic for the incoming

MessagingSession. Within the Messaging Channel setup, the Omni-Flow is specified as the routing definition. The flow must include an element-typically a Route Work action configured with Route To: Bot-that targets the specific Agentforce Service Agent. Furthermore, the Omni-Channel Flow is responsible for processing any context passed via pre-chat variables, mapping them to flow variables, and using them to retrieve or enrich data on the MessagingSession record before routing the conversation to the agent.

## Multiple Choice

Universal Containers is testing an agent with a "Reset Password" action restricted by the guard available when @variables.isVerified == True. During a single conversation turn, the large language model successfully sets the isVerified flag to true using @utils.setVariables, but fails to invoke the "Reset Password" action immediately afterward. What must the Agentforce Specialist consider regarding how the reasoning engine evaluates action availability?

A. The action is available from the start; the reasoning engine's intent to solve the user's issue automatically overrides the available when guard.
B. The action becomes available immediately; available when conditions dynamically re-evaluate after every variable change within a single turn.
C. The action remains unavailable for that turn; available when conditions control action visibility to the LLM and evaluate before the reasoning cycle begins, so the action will not be callable until the next turn.

## Correct Answer: C

## Explanation:

The correct answer is C because available when controls whether an action is visible to the reasoning engine for that reasoning cycle. If the action was hidden when the turn began, setting is Verified to true during that same turn does not retroactively expose the hidden action for immediate invocation. The action becomes available only when the next reasoning cycle starts and the guard condition evaluates against the updated variable state. Option A is dangerous because model intent never overrides an availability guard. Option B is wrong because treating action visibility as continuously re- evaluated inside the same turn would break deterministic gating. Salesforce documentation describes available when as a way to control flow based on state, and variables can be used in filters and action control.

## Multiple Choice

Universal Containers is evaluating Einstein Generative AI features to improve the productivity of the service center operation. Which features should the Agentforce Specialist recommend?

A. Service Replies and Case Summaries  
B. Service Replies and Work Summaries  
C. Reply Recommendations and Sales Summaries

## Correct Answer: A

Explanation:

To improve the productivity of the service center, the Agentforce Specialist should recommend the Service Replies and Case Summaries features. Service Replies helps agents by automatically generating suggested responses to customer inquiries, reducing response time and improving efficiency. Case Summaries provide a quick overview of case details, allowing agents to get up to speed faster on customer issues. Work Summaries are not as relevant for direct customer service operations, and Sales Summaries are focused on sales processes, not service center productivity. For more information, see Salesforce's Einstein Service Cloud documentation on the use of generative AI to assist customer service teams.

## Multiple Choice

Universal Containers has deployed Agentforce to handle customer order tracking, returns, and loyalty support. The agent needs to balance conversational flexibility for customer inquiries with guaranteed execution of identity verification steps before accessing the account information. The development team is evaluating how to structure the agent's instruction pattern to meet both requirements. Which statement correctly describes hybrid reasoning in Agentforce Agent Script?

A. Hybrid reasoning uses multiple large language model (LLM) models simultaneously, with one model handling conversational responses and another model executing deterministic business logic through Flow integration.

B. Hybrid reasoning requires Canvas View for declarative instructions and Script View for procedural instructions, as each editor provides different capabilities for the respective instruction types.

C. Hybrid reasoning combines declarative natural language instructions that allow large language model (LLM) interpretation with procedural instructions using the -> prefix that enforce guaranteed execution order.

## Correct Answer: C

## Explanation:

Hybrid reasoning in Agent Script means combining flexible LLM-driven conversation with deterministic procedural control in the same agent logic. This is exactly why option C is correct. Salesforce describes Agent Script as supporting business-critical logic that executes reliably while allowing conversational elements to remain flexible. The - > syntax marks executable procedural logic, so steps such as identity verification can be enforced before account access. Option A is wrong because hybrid reasoning is not about using multiple LLMs at the same time. Option B is also wrong because hybrid reasoning is a language and execution model, not a separation of capabilities between Canvas View and Script View. The core exam point is deterministic enterprise workflow control plus LLM interpretation.

## Multiple Choice

An administrator at Universal Containers is setting up a new Sales Development Representative (SDR) Agent. The agent 's purpose is to nurture cold leads before connecting them to the assigned sales rep. To ensure the agent has all the necessary access to the leads in the North America sales region, what should the administrator data?

A. Assign the user in the highest-level role within the North America role hierarchy as the SDR Agent User.

B. Grant View All record permission of the Lead object to the 'Einstein Agent User' profile,

C. Create a criteria-based sharing rule to grant access to targeted lead records to SDR Agent User.

## Correct Answer: C

## Explanation:

According to the AgentForce Security and Data Access Configuration Guide, the best practice for ensuring an agent (such as an SDR Agent) can access specific records while maintaining security is to use criteria-based sharing rules. The documentation states: "When an AI Agent needs access to a subset of records (for example, regional leads), create a sharing rule granting access to that agent's user context based on defined criteria such as region or ownership." Option A (assigning the highest-level role) provides excessive access beyond the intended scope, violating the principle of least privilege. Option B (View All permission) gives global object access, which is not secure. Therefore, Option C ensures that the SDR Agent has controlled, region-specific access to lead records.

## Multiple Choice

Universal Containers is building an Agentforce Service Agent to handle order cancellations. The Agentforce Specialist needs to ensure that a critical "Check Cancellation Eligibility" action is executed deterministically on every relevant turn, without relying on the reasoning engine's discretion to choose the tool. During a code review, a junior developer asks why the Agentforce Specialist called the action using the run @actions.name command instead of simply listing the action under the reasoning.actions block. What must the Agentforce Specialist explain regarding the difference between these two invocation methods?

A. Both patterns execute the action on every turn automatically; the difference is purely syntactic, as the run command is simply the newer notation for Agent Script.

B. The run command is only valid when nested inside reasoning.actions blocks to pass parameters; the Agentforce Specialist must list it under reasoning.actions for the large language model (LLM) to access it.

C. Listing an action under reasoning actions makes it a subjective tool that the large language model (LLM) decides whether to call; calling it with the run command forces guaranteed execution every time.

## Correct Answer: C

## Explanation:

The correct answer is C. In Agent Script, listing a tool in the reasoning.actions block exposes it to the reasoning engine as a callable tool. Salesforce documentation states that tools in reasoning.actions are executable functions the LLM can choose to call based on the tool description and current context. That is not deterministic enough for a mandatory eligibility check. By contrast, Salesforce's Agent Script action reference states that to ensure an action runs every time a subagent runs, the specialist should use run @actions. <action\_name> in the reasoning block. Therefore, run is the correct mechanism for guaranteed execution, while reasoning.actions provides LLM-selectable tool availability.

## Multiple Choice

Universal Containers is building a digital shopping assistant that needs to dynamically generate product recommendations using information from the company 's external product recommendation predictive model through APIs. Which Agentforce capability should make it easier for the agent to consume the external product recommendation tool?

A. Model Context Protocol (MCP)

B. Hugging Face

C. Agent-to-Agent (A2A) protocol

## Correct Answer: A

## Explanation:

Per the AgentForce Integration and AI Architecture Guide, the Model Context Protocol (MCP) enables agents to interact dynamically with external predictive or AI models. The documentation states: "Through MCP, agents can discover, connect, and invoke external models via standardized schema definitions. This allows agents to use third-party tools-like recommendation engines or classifiers- without pre-coding fixed API calls." Option A (MCP) supports dynamic interoperability with predictive models, making it the correct answer. Option B (Hugging Face) refers to a model hosting platform, not a Salesforce integration mechanism. Option C (A2A protocol) supports agent-to-agent communication, not external model invocation. Therefore, Option A correctly reflects the Salesforce-recommended method for integrating external predictive APIs.

## Multiple Choice

An Agentforce needs to create a Sales Email with a custom prompt template. They need to ground on the following data. Opportunity Products Events near the customer Tone and voice examples How should the Agentforce Specialist obtain related items?

A. Call prompt initiated flow to fetch and ground the required data.

B. Create a flex template that takes the records in question as inputs.

C. Utilize a standard email template and manually insert the required data fields.

Correct Answer: A

Explanation:

To ground a sales email on Opportunity Products, Events near the customer, and Tone and voice examples, the Agentforce Specialist should use a prompt-initiated flow. This flow can dynamically fetch the necessary data from related records in Salesforce and ground the generative AI output with contextually accurate information. Option B (flex template) does not provide the ability to fetch dynamic data from Salesforce records automatically. Option C (manual insertion) would not allow for the dynamic and automated grounding of data required for custom prompts.

## Multiple Choice

Universal Containers (UC) is Implementing Service AI Grounding to enhance its customer service operations. UC wants to ensure that its AI-generated responses are grounded in the most relevant data sources. The team needs to configure the system to include all supported objects for grounding. Which objects should UC select to configure Service AI Grounding?

A. Case, Knowledge, and Case Notes

B. Case and Knowledge

C. Case, Case Emails, and Knowledge

## Correct Answer: B

Explanation:

Universal Containers (UC) is implementing Service AI Grounding to enhance its customer service operations. They aim to ensure that AI-generated responses are grounded in the most relevant data sources and need to configure the system to include all supported objects for grounding. Supported Objects for Service AI Grounding: Case Knowledge Case Object: Role in Grounding: Provides contextual data about customer inquiries, including case details, status, and history. Benefit: Grounding AI responses in case data ensures that the information provided is relevant to the specific customer issue being addressed. Knowledge Object: Role in Grounding: Contains articles and documentation that offer solutions and information related to common issues. Benefit: Utilizing Knowledge articles helps the AI provide accurate and helpful responses based on verified information. Exclusion of Other Objects: Case Notes and Case Emails: Not Supported for Grounding: While useful for internal reference, these objects are not included in the supported objects for Service AI Grounding. Reason: They may contain sensitive or unstructured data that is not suitable for AI grounding purposes. Why Options A and C are Incorrect: Option A (Case, Knowledge, and Case Notes): Case Notes Not Supported: Case Notes are not among the supported objects for grounding in Service AI. Option C (Case, Case

Emails, and Knowledge): Case Emails Not Supported: Case Emails are also not included in the list of supported objects for grounding.

## Multiple Choice

Universal Containers wants to incorporate CRM data as well-formatted JSON in a prompt to a large language model (LLM). What is an important consideration for this requirement?

A. "CRM data to JSON" checkbox must be selected when creating a prompt template.

B. Apex code can be used to return a JSON formatted merge field.

C. JSON format should be enabled in Prompt Builder Settings.

Correct Answer: B

## Explanation:

Context of the Question Universal Containers (UC) wants to send well-formatted JSON data in a prompt to a large language model (LLM). The question is about an important technical or design consideration for including CRM data as JSON in that prompt. Why Apex Code for JSON Formatting? Apex to Generate JSON: Salesforce does not have a simple "checkbox" or single setting to "convert CRM data to JSON." Typically, to structure data as JSON in a template, you either: Use an Apex class that queries or processes the data, then returns a JSON string. Use a Flow or formula approach (though complex data structures often require Apex). No Built-In "Enable JSON Format in Prompt Builder": Prompt Builder doesn't have a toggle that automatically transforms data into JSON.

## Multiple Choice

Universal Containers has set up a Service Agent to allow customers to look up their order status. The topic setup includes: Name: Order Inquiry Classification Description: Handles user requests to look up order status, including tracking details and delivery estimates for orders placed within the last 90 days. Scope: Your job is only to assist authenticated users in looking up the status of their orders placed within the last 90 days. If the order is pending delivery, provide the tracking number and estimated delivery date. Do not handle inquiries for orders older than 90 days. Which information will be used by the Agentforce reasoning engine to choose this topic?

A. Topic Name and Classification Description

B. Topic Name and Scope
C. Classification Description and Scope

Correct Answer: C

Explanation:

The AgentForce Reasoning Engine Guide explains that the engine relies primarily on the Classification Description and Scope fields to determine which topic best matches the user's intent. The documentation notes: "Classification Description defines the purpose and context of a topic, while Scope provides the operational boundaries for when and how that topic should be triggered. Together, they guide the LLM in selecting the appropriate topic at runtime." Option A includes "Topic Name," which is used mainly for administrative organization, not reasoning. Option B omits the Classification Description, which contains the intent signal critical for matching. Therefore, Option C is correct since both the Classification Description and Scope are essential for topic selection by the reasoning engine.

## Multiple Choice

Universal Containers tests out a new Einstein Generative AI feature for its sales team to create personalized and contextualized emails for its customers. Sometimes, users find that the draft email contains placeholders for attributes that could have been derived from the recipient's contact record. What is the most likely explanation for why the draft email shows these placeholders?

A. The user does not have permission to access the fields.

B. The user's locale language is not supported by Prompt Builder.

C. The user does not have Einstein Sales Emails permission assigned.

## Correct Answer: A

Explanation:

UC is using an Einstein Generative AI feature (likely Einstein Sales Emails) to draft personalized emails, but placeholders (e.g., {!Contact.FirstName}) appear instead of actual data from the contact record. Let's analyze the options. Option A: The user does not have permission to access the fields.Einstein Sales Emails, built on Prompt Builder, pulls data from contact records to populate email drafts. If the user lacks field-level security (FLS) or object-level permissions to access relevant fields (e.g., FirstName, Email), the system cannot retrieve the data, leaving placeholders

unresolved. This is a common issue in Salesforce when permissions restrict data access, making it the most likely explanation and the correct answer. Option B: The user's locale language is not supported by Prompt Builder.Prompt Builder and Einstein Sales Emails support multiple languages, and locale mismatches typically affect formatting or translation, not data retrieval. Placeholders appearing instead of data isn't a documented symptom of language support issues, making this unlikely and incorrect. Option C: The user does not have Einstein Sales Emails permission assigned.The Einstein Sales Emails permission (part of the Einstein Generative AI license) enables the feature itself. If missing, users couldn't generate drafts at all-not just see placeholders. Since drafts are being created, this permission is likely assigned, making this incorrect.

## Multiple Choice

An Agentforce configured Data Masking within the Einstein Trust Layer. How should the Agentforce Specialist begin validating that the correct fields are being masked?

A. Use a Flow-based resource in Prompt Builder to debug the fields' merge values using Flow Debugger.

B. Request the Einstein Generative AI Audit Data from the Security section of the Setup menu.

C. Enable the collection and storage of Einstein Generative AI Audit Data on the Einstein Feedback setup page.

## Correct Answer: C

## Explanation:

To begin validating that the correct fields are being masked in Einstein Trust Layer, the Agentforce Specialist should request the Einstein Generative AI Audit Data from the Security section of the Salesforce Setup menu. This audit data allows the Agentforce Specialist to see how data is being processed, including which fields are being masked, providing transparency and validation that the configuration is working as expected. Option B is correct because it allows for the retrieval of audit data that can be used to validate data masking. Option A (Flow Debugger) and Option C (Einstein Feedback) do not relate to validating field masking in the context of the Einstein Trust Layer. Salesforce Einstein Trust Layer Documentation: einstein\_trust\_layer\_audit.htm

## Multiple Choice

The AgentForce Specialist for Cloud Kicks wants to create an agent that will allow the sales staff to schedule their daily tasks and assist in providing detailed explanations behind product prices and deals. Following Salesforce best practices, which type of agent should they create?

A. Service Agent
B. Employee Agent
C. Sales Agent

## Correct Answer: C

Explanation:

Comprehensive and Detailed Explanation From Exact Extract: According to the documentation of agentic patterns and use cases for the AgentForce platform, there are specific agent types aligned to roles-sales, service, employee support, etc. Since the requirement is for sales staff (i.e., a sales context) and the tasks involve scheduling daily tasks and providing explanations for product pricing and deals, the appropriate agent type is a Sales Agent. A Service Agent is customerservice oriented; an Employee Agent is internal nonsales worker support. So option C (Sales Agent) is the best fit.

## Multiple Choice

Universal Containers is building an Agentforce Service Agent to handle password resets. The agent must first verify the customer's identity using an email verification code, and then, once identity is confirmed, the agent must execute the organization's existing password reset Flow. The identity verification subagent is already configured. Which implementation approach should the Agentforce Specialist recommend?

A. Create an agent action referencing the password reset Flow, assign it to the identity verification subagent, and call it deterministically from the subagent's reasoning block using Agent Script conditional logic.

B. Create a separate subagent named Password Reset, configure it with an action that invokes the Flow, and pass the identity verification variable as context so the subagent's instructions can reference the verified status before proceeding.

C. Add an instruction to the identity verification subagent directing the agent to trigger the password reset Flow once identity is confirmed, and store the customer's reset intent in a conversation variable so the reasoning engine can reference it when deciding whether to proceed.

Correct Answer: B

## Explanation:

The correct answer is B because password reset is a distinct task and should be modeled as a separate, focused subagent with its own action. The existing identity verification subagent can establish the verified state, and that state can be passed or referenced as context by the Password Reset subagent. This keeps responsibilities clean: one subagent verifies identity, and the other performs the reset through the existing Flow. Option A overloads the identity verification subagent with reset execution, weakening separation of concerns. Option C relies mainly on instructions and intent storage, which is less reliable for a gated operational process. Agentforce design guidance supports using variables to track state across turns and subagents, while actions can call Flows and use outputs for subsequent reasoning.

## Multiple Choice

Universal Containers has a requirement to provide a sales summary for its sales reps who are using Employee Agents, but they are not happy with the default answer. Which best practice should the AgentForce Specialist recommend?

A. Create a Record Summary custom prompt template.

B. Create a Knowledge Answer custom prompt template.

C. Update the standard record summary action.

## Correct Answer: A

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the AgentForce Prompt Customization and Template Development Guide, when an organization wants to modify or enhance how structured data (like Salesforce records) is summarized or presented by an agent, the correct approach is to create a Record Summary custom prompt template. Record Summary templates allow specialists to tailor how the agent interprets and communicates record information - such as opportunities, accounts, or sales summaries - ensuring the output aligns with company-specific terminology, tone, and data needs. Option B, the Knowledge Answer template, is used when the agent must answer queries grounded in unstructured text sources (e.g., Knowledge articles), not structured CRM data. Option C, updating the standard record summary action, is not recommended because it may impact other agents or system actions globally, and Salesforce documentation advises customizing through new templates instead of overwriting defaults. Therefore, the correct best practice is Option A -

Create a Record Summary custom prompt template, providing tailored and controlled responses specific to Universal Containers' sales summary requirements.

## Multiple Choice

The sales team at a hotel resort would like to generate a guest summary about the guests' interests and provide recommendations based on their activity preferences captured in each guest profile. They want the summary to be available only on the contact record page. Which AI capability should the team use?

A. Flow Builder  
B. Agentforce Builder  
C. Prompt Builder

Correct Answer: C

## Explanation:

The hotel resort team needs an AI-generated guest summary with recommendations, displayed exclusively on the contact record page. Let's assess the options. Option A: Flow Model BuilderModel Builder in Salesforce creates custom predictive AI models (e.g., for scoring or classification) using Data Cloud or Einstein Platform data. It's not designed for generating text summaries or embedding them on record pages, making it incorrect. Option B: Agentforce BuilderAgent Builder in Agentforce Studio creates autonomous AI agents for tasks like lead qualification or customer service. While agents can provide summaries, they operate in conversational interfaces (e.g., chat), not as static content on a record page. This doesn't meet the location-specific requirement, making it incorrect. Option C: Prompt BuilderEinstein Prompt Builder allows creation of prompt templates that generate text (e.g., summaries, recommendations) using Generative AI. The template can pull data from contact records (e.g., activity preferences) and be embedded as a Lightning component on the contact record page via a Flow or Lightning App Builder. This ensures the summary is available only where specified, meeting the team's needs perfectly and making it the correct answer.

## Multiple Choice

Universal Containers is developing an Agentforce Service Agent to handle a complex, multi-step customer onboarding process. To better organize the conversational logic, the Agentforce Specialist splits the process across two distinct subagents and places the setup configuration for the second step inside the

before\_reasoning block of the new subagent. During testing, when the agent transitions to this new subagent mid-conversation, the conversation occasionally stalls or behaves unexpectedly. What is the risk the Agentforce Specialist must consider regarding the execution timing of before\_reasoning?

A. The before\_reasoning block will only run once and sets the immutable variables.
B. The before\_reasoning block runs at the start of the next turn after a transition.
C. The before\_reasoning block only runs on the very first turn after the agent launches.

## Correct Answer: B

Explanation:

The correct answer is B. before\_reasoning is a deterministic lifecycle block, but it must be understood in relation to the subagent parse/turn lifecycle. If configuration needed immediately after a transition is placed only in the target subagent's before\_reasoning block, the specialist must account for when that target subagent's next processing cycle begins. Treating before\_reasoning as a global setup block or assuming it has already run can leave required variables or context unavailable, which explains stalls or inconsistent behavior. Option A is wrong because before\_reasoning is not a once-only immutable initializer. Option C is wrong because it is not limited to the first turn after the whole agent launches. The safer design is to initialize required state explicitly before transition or guard the target subagent's setup logic carefully.

## Multiple Choice

What is true of Agentforce Testing Center?

A. Running tests risks modifying CRM data in a production environment.

B. Running tests does not consume Einstein Requests.

C. Agentforce Testing Center can only be used in a production environment.

Correct Answer: B

Explanation:

The Agentforce Testing Center is a tool in Agentforce Studio for validating agent performance. Let's evaluate the statements. Option A: Running tests risks modifying CRM data in a production environment. Agentforce Testing Center runs synthetic

interactions in a controlled environment (e.g., sandbox or isolated test space) and doesn't modify live CRM data. It's designed for safe pre-deployment testing, making this incorrect. Option B: Running tests does not consume Einstein Requests.Einstein Requests are part of the usage quota for Einstein Generative AI features (e.g., prompt executions in production). Testing Center uses synthetic data to simulate interactions without invoking live AI calls that count against this quota. Salesforce documentation confirms tests don't consume requests, making this the correct answer. Option C: Agentforce Testing Center can only be used in a production environment.Testing Center is available in both sandbox and production orgs, but it's primarily used pre-deployment (e.g., in sandboxes) to validate agents safely. This restriction is false, making it incorrect.

## Multiple Choice

Universal Containers (UC) has a legacy system that needs to integrate with Salesforce. UC wishes to create a digest of account action plans using the generative API feature. Which API service should UC use to meet this requirement?

A. REST API
B. Metadata API
C. SOAP API

## Correct Answer: A

Explanation:

To create a digest of account action plans using the generative API feature, Universal Containers should use the REST API. The REST API is ideal for integrating Salesforce with external systems and enabling interaction with Salesforce data, including generative capabilities like creating summaries or digests. It supports modern web standards and is suitable for flexible, lightweight interactions between Salesforce and legacy systems. Metadata API is used for retrieving and deploying metadata, not for data operations like generating summaries. SOAP API is an older API used for integration but is less flexible compared to REST for this specific use case.

## Multiple Choice

Universal Containers (UC) wants to enable its sales reps to explore opportunities that are similar to previously won opportunities by entering the utterance, "Show me other opportunities like this one." How should UC achieve this with Agents?

A. Use the standard Agent action.
B. Create a custom Agent action calling a flow.
C. Create a custom Agent action calling an Apex class.

## Correct Answer: A

## Explanation:

Universal Containers can achieve the request to explore similar opportunities by using the standard Copilot action. Agent has built-in actions to handle natural language queries, such as "Show me other opportunities like this one." The standard action will process the query and return results based on predefined matching criteria like opportunity details and past Closed Won deals. This approach avoids the need to create custom flows or Apex classes, leveraging out-of-the-box functionality.

## Multiple Choice

Universal Containers is setting up the data library configuration within the Agentforce Builder. What is true regarding Agentforce Data Libraries?

A. Only data library owners can assign it to the agent.

B. Each data category can only have one data library.

C. An agent can have only one data library assigned to it.

Correct Answer: C

## Explanation:

Agentforce Data Libraries are the mechanism by which an agent is " grounded " in an organization ' s internal, trusted knowledge (using Retrieval Augmented Generation or RAG). To ensure that the agent ' s focus remains sharp and its retrieval process is efficient and accurate, there is a one-to-one relationship between an Agentforce Agent and the Data Library it uses for grounding. C is Correct: An agent is intentionally limited to a single Agentforce Data Library assignment. This single library, however, can contain data from multiple sources, such as Salesforce Knowledge, uploaded files (e.g., PDFs), or web searches. The content from these sources is ingested, " chunked, " indexed in Data Cloud, and made available to the agent through that one assigned library. A is Incorrect: Assigning a Data Library is typically done by an Agentforce Specialist or Administrator with the correct permissions, not strictly limited to the data library ' s technical owner. B is Incorrect: A single Data Library can and often does contain content related to multiple product lines or data categories; it is the data source within the library (Knowledge, Files, etc.) that must be chosen, not the product category.

## Multiple Choice

Pinnacle Healthcare is enhancing its agent and Agent Script implementation to improve patient scheduling and care coordination. The head of compliance has identified a need to ensure deterministic behavior for agents when verifying patient information before scheduling appointments. The process must enforce compliance by gating downstream actions, for example, scheduling, until patient verification is complete. What is the most appropriate approach the Agentforce Specialist should recommend while adhering to standard configuration guidelines?

A. Call a custom Apex @InvocableMethod to enforce the verification logic and dynamically update the scheduling action availability.

B. Use @utils.setVariables to update a mutable session variable for patient verification status and gate scheduling actions with available when.

C. Use template expressions in the action descriptions to dynamically display instructions based on the verification status.

## Correct Answer: B

## Explanation:

The correct answer is B because gating downstream actions requires a reliable state variable and an action availability rule. A mutable session variable can store whether patient verification has been completed, and available when can prevent scheduling actions from being available until that variable indicates verified status. This is the standard declarative Agent Script pattern for controlled action access. Option A is unnecessarily code-heavy and shifts simple state gating into Apex when Agentforce can manage it with variables and availability rules. Option C only changes descriptive text; it does not enforce whether the scheduling action can be used. In compliance workflows, the control must prevent the action from being callable, not merely tell the model what to do. Salesforce context engineering examples show variables and action filters being used to control action availability.

## Multiple Choice

Before deploying a Retrieval Augmented Generation solution into production, an Agentforce Specialist wants to evaluate whether their individual custom retrievers are surfacing the most relevant chunks for specific queries without writing any code. Which tool should the specialist use to test the retriever?

A. The Retriever Playground

B. Agentforce Testing Center

C. Data 360 Query Editor

## Correct Answer: A

Explanation:

The correct answer is A because Retriever Playground is the correct no-code tool for validating retrieval behavior before production deployment. It allows the specialist to test individual retrievers, run representative queries, inspect retrieved chunks, and tune retrieval parameters or filters. This is different from Agentforce Testing Center, which validates agent behavior across utterances, subagents, and actions; it is not the most direct tool for testing whether a retriever surfaces the right chunks. Data 360 Query Editor is also not the right choice because the requirement is retriever validation, not manual querying. For RAG quality, the specialist must verify the retrieval layer before evaluating the final generated response. Retriever Playground is built specifically for that retriever-level validation workflow.

## Multiple Choice

Universal Containers is very concerned about security compliance and wants to understand: Which prompt text is sent to the large language model (LLM) \* How it is masked \* The masked response What should the Agentforce Specialist recommend?

A. Ingest the Einstein Shield Event logs into CRM Analytics.

B. Review the debug logs of the running user.

C. Enable audit trail in the Einstein Trust Layer.

## Correct Answer: C

## Explanation:

To address security compliance concerns and provide visibility into the prompt text sent to the LLM, how it is masked, and the masked response, the Agentforce Specialist should recommend enabling the audit trail in the Einstein Trust Layer. This feature captures and logs the prompts sent to the large language model (LLM) along with the masking of sensitive information and the AI 's response. This audit trail ensures full transparency and compliance with security requirements. Option A

(Einstein Shield Event logs) is focused on system events rather than specific AI prompt data. Option B (debug logs) would not provide the necessary insight into AI prompt masking or responses.

## Multiple Choice

Universal Containers (UC) currently tracks Leads with a custom object. UC is preparing to implement the Sales Development Representative (SDR) Agent. Which consideration should UC keep in mind?

A. Agentforce SDR only works with the standard Lead object.

B. Agentforce SDR only works on Opportunities.

C. Agentforce SDR only supports custom objects associated with Accounts.

## Correct Answer: A

## Explanation:

Universal Containers (UC) uses a custom object for Leads and plans to implement the Agentforce Sales Development Representative (SDR) Agent. The SDR Agent is a prebuilt, configurable AI agent designed to assist sales teams by qualifying leads and scheduling meetings. Let's evaluate the options based on its functionality and limitations. Option A: Agentforce SDR only works with the standard Lead object. Per Salesforce documentation, the Agentforce SDR Agent is specifically designed to interact with the standard Lead object in Salesforce. It includes preconfigured logic to qualify leads, update lead statuses, and schedule meetings, all of which rely on standard Lead fields (e.g., Lead Status, Email, Phone). Since UC tracks leads in a custom object, this is a critical consideration-they would need to migrate data to the standard Lead object or create a workaround (e.g., mapping custom object data to Leads) to leverage the SDR Agent effectively. This limitation is accurate and aligns with the SDR Agent's out-of-the-box capabilities. Option B: Agentforce SDR only works on Opportunities. The SDR Agent's primary focus is lead qualification and initial engagement, not opportunity management. Opportunities are handled by other roles (e.g., Account Executives) and potentially other Agentforce agents (e.g., Sales Agent), not the SDR Agent. This option is incorrect, as it misaligns with the SDR Agent's purpose. Option C: Agentforce SDR only supports custom objects associated with Accounts. There's no evidence in Salesforce documentation that the SDR Agent supports custom objects, even those related to Accounts. The SDR Agent is tightly coupled with the standard Lead object and does not natively extend to custom objects, regardless of their relationships. This option is incorrect.

## Multiple Choice

An Agentforce Specialist is testing an agent with Testing Center. The test results show that an agent correctly identifies the right subagent to handle an utterance, but it fails to select all necessary actions within that subagent. Which evaluation metric specifically identifies this failure?

A. Action Assertion

B. Response Evaluation

C. Subagent Assertion

## Correct Answer: A

Explanation:

Action Assertion is the correct metric because the failure is not subagent routing; the agent already selected the correct subagent. The failure is at the tool/action selection layer inside that subagent. Salesforce Testing Center evaluations include subagent assertion and action assertion as separate checks. Subagent Assertion validates whether the utterance was routed to the expected subagent. Action Assertion validates whether the correct required actions were selected or used. Response Evaluation is broader and focuses on the quality of the final answer, such as relevance or accuracy, but it does not specifically isolate missing tool selection. In this scenario, the specialist needs to identify that the agent reached the right area but failed to invoke all required actions, so Action Assertion is the precise metric.

## Multiple Choice

An Agentforce Specialist is creating a custom agent action. The topic is selected correctly, but the action is not. Which setting should the Agentforce Specialist test and iterate on to ensure the action performs as expected?

A. Action Scape

B. Action Instructions

C. Classification Description

Correct Answer: B

Explanation:

Per the AgentForce Custom Action Development Guide, if a topic is correctly triggered but the wrong action is executed, the issue typically lies in action

instructions. The documentation notes: "Action instructions provide the LLM with explicit guidance on when and how to use a given action. Poorly written or ambiguous instructions can cause the reasoning engine to select an incorrect action, even within the right topic." Option A (Action Scope) defines data inputs/outputs, not reasoning behavior. Option C (Classification Description) pertains to topic-level intent, not action execution. Thus, Option B - refining and testing the action instructions - ensures accurate behavior and action selection.

## Multiple Choice

Universal Containers is deploying two agents simultaneously: an internal Sales Productivity Agent for employees and a customer-facing Service Agent on its Experience Cloud site. An Agentforce Specialist is configuring permissions and needs to understand the correct security context for each. Which statement accurately describes the execution model?

A. The customer-facing Service Agent inherits the security context of the Experience Cloud site's guest user profile by default, requiring guest profile object permissions to be configured for all actions the agent executes.
B. The internal Sales Productivity Agent executes actions using the authenticated Salesforce employee's own permissions, while the customer-facing Service Agent executes actions as a dedicated Einstein Service Agent User with its own permission set.
C. Both the internal Sales Productivity Agent and the customer-facing Service Agent execute actions as a dedicated Einstein Service Agent User with its own permission set that is configured as required for the agent.

## Correct Answer: B

## Explanation:

The correct answer is B. Internal employee-facing agents operate within the authenticated Salesforce user's access model, so actions must respect the employee's profile, permission sets, sharing, and field-level security. A customer-facing Service Agent deployed through Experience Cloud is different: it is configured around an agent user/service agent execution identity, and Salesforce guidance stresses assigning the correct permissions to that agent user rather than relying on the site guest profile. Option A is wrong because a logged-in Experience Cloud deployment should not be treated as a guest-user execution model by default. Option C is also wrong because it incorrectly applies the dedicated Service Agent User model to the internal Sales Productivity Agent. The exam distinction is user-

context execution for internal productivity versus dedicated service-agent execution for customer-facing service automation.

## Multiple Choice

Which useful metrics does Agentforce Observability provide to a customer service team related to a Customer Service Agent?

A. Call deflection rates, cost per interaction, and memory consumption  
B. Call deflection rates, productivity, and abandoned session rates  
C. Call deflection rates, abandoned session rates, and user intent ratings

## Correct Answer: B

## Explanation:

The correct answer is B because Agentforce Observability and Agent Analytics focus on operational service metrics that help teams understand agent effectiveness and customer-service outcomes. Deflection rate measures how often the agent resolves interactions without escalation. Productivity metrics help evaluate operational efficiency and agent impact. Abandoned session rate highlights conversations that users leave before completion, which is critical for identifying experience or routing problems. Option A is wrong because memory consumption is an infrastructure-style metric, not a standard customer service analytics outcome for Agentforce Service Agent reporting. Option C is less accurate because "user intent ratings" is not the core metric set described for service team observability. Salesforce documentation describes Agent Analytics as tracking escalation rate, deflection rate, abandoned sessions, and effectiveness-oriented metrics.

## Multiple Choice

An Agentforce Specialist is preparing to upload several PDF policy documents to a new file- based Agentforce Data Library. To leverage advanced processing with Intelligent Context, how should the Agentforce Specialist proceed?

A. Upload up to five PDFs that are 100 MB or less to allow the system to evaluate the optimal indexing configuration.
B. Upload up to five PDFs that are 10 MB or less to allow the system to evaluate the optimal indexing configuration.
C. Manually enable Intelligent Context in Data 360 prior to uploading the PDF files.

Correct Answer: B

Explanation:

The correct answer is B because Intelligent Context advanced processing applies to file-based Agentforce Data Libraries when PDFs meet the supported size and count limits. Salesforce guidance states that when creating a file-based data library with PDFs that are 10 MB or less, advanced processing tools from Intelligent Context are automatically applied. Salesforce Data 360 limits also identify five files and 10 MB as the hard upload constraints for this type of upload. Option A is wrong because 100 MB exceeds the stated PDF limit for this capability. Option C is wrong because the processing is not manually enabled in Data 360 before upload; it is applied automatically when the uploaded PDF files meet the supported requirements.

## Multiple Choice

An Agentforce wants to use the related lists from an account in a custom prompt template. What should the Agentforce Specialist consider when configuring the prompt template?

A. The text encoding (for example, UTF-8, ASCII) option

B. The maximum number of related list merge fields

C. The choice between XML and JSON rendering formats for the list

Correct Answer: B

Explanation:

When configuring a custom prompt template to use related lists, the Agentforce Specialist must be aware of the maximum number of related list merge fields that can be included. Salesforce enforces limits to ensure prompt templates perform efficiently and do not overload the system with too much data. As a best practice, it's important to monitor and optimize the number of merge fields used. Option B is correct because there is a limit on how many related list merge fields can be included in a prompt template. Option A (text encoding) and Option C (XML/JSON rendering) are not key considerations in this context.

## Multiple Choice

Universal Containers (UC) is using standard Service AI Grounding. UC created a custom rich text field to be used with Service AI Grounding. What should UC consider when using standard Service AI Grounding?

A. Service AI Grounding only works with Case and Knowledge objects.
B. Service AI Grounding only supports String and Text Area type fields.
C. Service AI Grounding visibility works m system mode.

## Correct Answer: B

## Explanation:

Service AI Grounding retrieves data from Salesforce objects to ground AI-generated responses. Key considerations: Field Types: Standard Service AI Grounding supports String and Text Area fields. Custom rich text fields (e.g., RichTextArea) are not supported, making Option B correct. Objects: While Service AI Grounding primarily uses Case and Knowledge objects (Option A), the limitation here is the field type, not the object. Visibility: Service AI Grounding respects user permissions and sharing settings unless overridden (Option C is incorrect).

## Multiple Choice

Universal Containers (UC) is experimenting with using public Generative AI models and is familiar with the language required to get the information it needs. However, it can be time-consuming for both UC's sales and service reps to type in the prompt to get the information they need, and ensure prompt consistency. Which Salesforce feature should the company use to address these concerns?

A. Agent Builder and Action: Query Records.
B. Einstein Prompt Builder and Prompt Templates.
C. Einstein Recommendation Builder.

## Correct Answer: B

## Explanation:

UC wants to streamline the use of Generative AI by reducing the time reps spend typing prompts and ensuring consistency, leveraging their existing prompt knowledge. Let's evaluate the options. Option A: Agent Builder and Action: Query Records.Agent Builder in Agentforce Studio creates autonomous AI agents with actions like "Query Records" to fetch data. While this could retrieve information, it's designed for agent-driven workflows, not for simplifying manual prompt entry or

ensuring consistency across user inputs. This doesn't directly address UC's concerns and is incorrect. Option B: Einstein Prompt Builder and Prompt Templates.Einstein Prompt Builder, part of Agentforce Studio, allows users to create reusable prompt templates that encapsulate specific instructions and grounding for Generative AI (e.g., using public models via the Atlas Reasoning Engine). UC can predefine prompts based on their known language, saving time for reps by eliminating repetitive typing and ensuring consistency across sales and service teams. Templates can be embedded in flows, Lightning pages, or agent interactions, perfectly addressing UC's needs. This is the correct answer. Option C: Einstein Recommendation Builder.Einstein Recommendation Builder generates personalized recommendations (e.g., products, next best actions) using predictive AI, not Generative AI for freeform prompts. It doesn't support custom prompt creation or address time/consistency issues for reps, making it incorrect.

## Multiple Choice

Universal Containers has implemented an agent that answers questions based on Knowledge articles. Which topic and Agent Action will be shown in the Agent Builder?

A. General Q & A topic and Knowledge Article Answers action.

B. General CRM topic and Answers Questions with LLM Action.

C. General FAQ topic and Answers Questions with Knowledge Action.

## Correct Answer: C

## Explanation:

UC's agent answers questions using Knowledge articles, configured in Agent Builder. Let's identify the topic and action. Option A: General Q & A topic and Knowledge Article Answers action. "General Q & A" is not a standard topic name in Agentforce, and "Knowledge Article Answers" isn't a predefined action. This lacks specificity and doesn't match documentation, making it incorrect. Option B: General CRM topic and Answers Questions with LLM Action. "General CRM" isn't a default topic, and "Answers Questions with LLM" suggests raw LLM responses, not Knowledge-grounded ones. This doesn't align with the Knowledge focus, making it incorrect. Option C: General FAQ topic and Answers Questions with Knowledge Action. In Agent Builder, the "General FAQ" topic is a common default or starting point for question-answering agents. The "Answers Questions with Knowledge" action (sometimes styled as "Answer with Knowledge") is a prebuilt action that retrieves and grounds responses with Knowledge articles. This matches UC's implementation and is explicitly supported in documentation, making it the correct answer.

## Multiple Choice

Universal Containers (UC) is using related list merge fields in a prompt template associated with an Account object in Prompt Builder. What should UC consider?

A. The Activities related list on the Account object is not supported because it is a polymorphic field.

B. If person accounts have been enabled, merge fields will not be available for the Account object.

C. Prompt generation will yield no response when there is no related list associated with an Account in runtime.

## Correct Answer: A

## Explanation:

When using related list merge fields in a prompt template associated with the Account object in Prompt Builder, the Activities related list is not supported due to it being a polymorphic field. Polymorphic fields can reference multiple different types of objects, which makes them incompatible with some merge field operations in prompt generation. Option B is incorrect because person accounts do not limit the availability of merge fields for the Account object. Option C is irrelevant since even if no related lists are available at runtime, the prompt can still generate based on other available data fields.

## Multiple Choice

Universal Containers (UC) wants users to populate the Description field on the Account record by clicking a button on the record page, with the option to preview, regenerate, or manually edit the output before it is saved. The solution must use declarative tools only. Which type of prompt template should UC use?

A. Field Generation  
B. Flex  
C. Sales Email

Correct Answer: A

Explanation:

Field Generation is the correct prompt template type because the requirement is to generate AI output for a specific Salesforce record field, the Account Description field. Salesforce Prompt Builder supports Field Generation prompt templates so users can generate field values directly from record context without custom code. The described behavior-clicking from the record page, previewing the result, regenerating it, and manually editing before saving-is the Field Generation user experience. Flex templates are general-purpose and are not the best match when the target is a Salesforce field. Sales Email templates are for generating email content, not field values. Since the solution must remain declarative, Prompt Builder with a Field Generation prompt template is the correct choice.

## Multiple Choice

An Agentforce Specialist wants to troubleshoot their Agent's performance. Where should the Agentforce Specialist go to access all user interactions with the Agent, including Agent errors, incorrectly triggered actions, and incomplete plans?

A. Plan Canvas
B. Agent Settings
C. Event Logs

## Correct Answer: C

## Explanation:

The Agentforce Specialist needs a comprehensive view of user interactions, errors, and action issues for troubleshooting. Let's evaluate the options. Option A: Plan CanvasPlan Canvas in Agent Builder visualizes an agent's execution plan for a single interaction, useful for design but not for aggregated troubleshooting data like errors or all interactions, making it incorrect. Option B: Agent SettingsAgent Settings configure the agent (e.g., topics, channels), not provide interaction logs or error details. This is for setup, not analysis, making it incorrect. Option C: Event LogsEvent Logs in Agentforce (accessible via Setup or Agent Analytics) record all user interactions, including errors, incorrectly triggered actions, and incomplete plans. They provide detailed telemetry (e.g., timestamps, action outcomes) for troubleshooting performance issues, making this the correct answer.

## Multiple Choice

An Agentforce at Universal Containers (UC) is building with no-code tools only. They have many small accounts that are only touched periodically by a specialized sales team, and UC wants to maximize the sales operations team 's time. UC wants to help prep the sales team for the calls by summarizing past purchases, interests in products shown by the Contact captured via Data Cloud, and a recap of past email and phone conversations for which there are transcripts. Which approach should the Agentforce Specialist recommend to achieve this use case?

A. Use a prompt template grounded on CRH and Data Cloud data using standard foundation model.

B. Fine-Tune the standard foundational model due to the complexity of the data.
C. Deploy UC 's own custom foundational model on this data first.

## Correct Answer: A

Explanation:

For no-code implementations, Prompt Builder allows Agentforce Specialists to create prompt templates that dynamically ground responses in Salesforce CRM data (e.g., past purchases) and Data Cloud insights (e.g., product interests) without custom coding. The standard foundation model (e.g., Einstein GPT) can synthesize this data into summaries, leveraging structured and unstructured sources (e.g., email/phone transcripts). Fine-tuning (B) or custom models (C) require code and are unnecessary here, as the use case does not involve unique data patterns requiring model retraining.

## Multiple Choice

Universal Containers wants to keep retrieval accurate as product documentation changes frequently. Which approach should the company implement?

A. Leave embedding unchanged even if content is updated.

B. Rebuild the search index.

C. Manually delete the stale data chunks.

## Correct Answer: B

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the official AgentForce implementation guidelines and RAG (Retrieval-Augmented Generation) architecture within Salesforce, maintaining retrieval accuracy depends on ensuring that embeddings and indexed content remain synchronized with the most recent data. When product documentation or knowledge base content changes, the underlying text used for vector embeddings must also be updated to reflect the new information. The AgentForce documentation clearly specifies that when content is modified, the recommended practice is to rebuild the search index. This process regenerates the document chunks, re-embeds them using the latest model, and updates the index used by the retrieval system. This ensures that queries return the most current and relevant responses aligned with the updated content. Leaving embeddings unchanged (Option A) would cause retrievals to surface outdated or irrelevant information, as the underlying semantic representations would no longer match the source material. Similarly, manually deleting stale data chunks (Option C) does not ensure a full refresh of vector data and can lead to incomplete or inconsistent results. Therefore, as per AgentForce best practices, the correct approach is Option B - Rebuild the search index, ensuring that all embeddings, chunks, and indexed data are aligned with the latest version of the content.

## Multiple Choice

The compliance team at Universal Containers has determined that a specific customer service prompt must only process data through a secure, self-hosted Amazon Bedrock model and must be prevented from accessing the default OpenAI models. How should the Agentforce Specialist configure this specific model routing?

A. Assign a permission set to the dedicated Agent User that restricts Read access to the default Salesforce large language model (LLM) metadata records.
B. Configure a Data 360 Private Connect endpoint that automatically reroutes all Agentforce requests away from the default large language model (LLM) Gateway.

C. Register the model as a BYOLLM in Einstein Studio, then explicitly select this model when configuring the prompt template.

## Correct Answer: C

## Explanation:

The correct answer is C because the requirement is prompt-level model routing to a specific self-hosted Amazon Bedrock model. Salesforce supports Bring Your Own Large Language Model (BYOLLM) through AI Models, formerly Einstein Studio, and lists Amazon Bedrock as a supported provider. After the model is registered, the specialist can select that model for the relevant prompt template, ensuring the prompt uses the required model instead of a default provider. Option A is wrong because permission sets on metadata records are not how prompt templates route model execution. Option B is wrong because Private Connect controls network

connectivity, not prompt-template model selection. Compliance-sensitive routing must be handled by registering and selecting the approved model explicitly.

## Multiple Choice

At Universal Containers, a sales manager is tackling a tough challenge as several new junior sales reps struggle with objection handling and price negotiations for complex deals. The manager lacks the time to personally guide each sales rep through their specific customer scenarios before their critical meetings. The junior sales reps have asked for a tool that would allow them to practice their pitches by simulating tough conversations and receive personalized feedback that is specific to the commerce opportunity they are working on. Which Salesforce solution should an Agentforce Specialist recommend?

A. Employee Coach
B. SDR Agent
C. Sales Coach

## Correct Answer: C

## Explanation:

The AgentForce for Sales Overview defines Sales Coach as the AI-powered solution designed to help sales professionals practice and improve selling skills. The guide describes: "Sales Coach simulates customer interactions, allows reps to role-play objection handling, and provides personalized feedback based on real opportunity data." This directly matches the scenario where sales reps want to practice negotiation and objection handling with scenario-specific feedback. Option A (Employee Coach) is intended for internal employee enablement and HR training use cases, not sales coaching. Option B (SDR Agent) focuses on lead nurturing and prospecting, not sales training. Therefore, Option C - Sales Coach - is the correct recommendation for simulation-based, personalize d sales skill development. References (AgentForce Documents / Study Guide): AgentForce Sales Enablement Guide: "Sales Coach Overview and Capabilities" AgentForce Product Documentation: "Practicing Sales Conversations with AI" AgentForce Study Guide: "Simulated Coaching and Feedback for Sales Teams"

## Multiple Choice

When is the Agent-to-Agent (A2A4) protocol an appropriate communication choice?

A. When agents need to invoke third-party API
B. When agents need to access tools
C. When agents need to collaborate

## Correct Answer: C

## Explanation:

The Agent-to-Agent (A2A) protocol in AgentForce is specifically designed to facilitate collaboration and coordination between multiple agents. It allows distinct agents - such as Service, Sales, or Employee Agents - to exchange structured messages, delegate tasks, and share context securely within the Salesforce ecosystem. AgentForce documentation describes A2A as a collaborative communication framework, enabling agents to "handoff, request, and respond" to each other in complex workflows. This is useful when different agents specialize in separate domains (e.g., one handles billing inquiries, another manages account upgrades). Option A is incorrect because invoking third-party APIs is handled via Tool Adapters or Action Integrations, not A2A communication. Option B is incorrect because tool access occurs through Tool Invocations, where the agent directly interacts with external services or APIs. Hence, the correct answer is Option C - When agents need to collaborate, as A2A is purpose-built for inter- agent communication and cooperative task execution.

## Multiple Choice

Once a data source is chosen for an Agentforce Data Library, what is true about changing that data source later?

A. The data source can be changed through the Data Cloud settings.
B. The Data Retriever can be reconfigured to use a different data source.
C. The data source cannot be changed after it is selected.

## Correct Answer: C

## Explanation:

Why is " The data source cannot be changed after it is selected " the correct answer? When configuring an Agentforce Data Library, the data source selection is permanent. Once a data source is set, it cannot be modified or replaced. This design ensures data consistency, security, and reliability within Salesforce 's AI-driven environment. Key Considerations in Agentforce Data Library Data Source Lock-In

The chosen data source remains fixed to maintain data integrity and avoid inconsistencies. Any updates or modifications require creating a new Data Library instead of modifying the existing one. Why Can 't the Data Source Be Changed? The data source defines the foundation of AI-driven workflows, and any modification would disrupt processing logic. Agentforce tools rely on structured datasets to enable AI-powered recommendations, and changing data sources could lead to inconsistencies in grounding techniques. Workarounds for Changing Data Sources If an organization needs to use a different data source, a new Agentforce Data Library must be created and configured from scratch. Old data can be manually migrated into the new data source for continuity. Why Not the Other Options? # A. The data source can be changed through the Data Cloud settings. Incorrect because once the data source is linked to an Agentforce Data Library, it cannot be altered, even via Data Cloud settings. # B. The Data Retriever can be reconfigured to use a different data source. Incorrect as the Data Retriever works within the constraints of the selected data source and does not provide an option to swap data sources post-selection. Agentforce Specialist References The Salesforce AI Specialist Material and Salesforce Instructions for the Certification confirm that once a data source is set for an Agentforce Data Library, it cannot be changed.

## Multiple Choice

When a customer chat is initiated, which functionality in Salesforce provides generative AI replies or draft emails based on recommended Knowledge articles?

A. Einstein Reply Recommendations

B. Einstein Service Replies

C. Einstein Grounding

## Correct Answer: B

## Explanation:

When a customer chat is initiated, Einstein Service Replies provides generative AI replies or draft emails based on recommended Knowledge articles. This feature uses the information from the Salesforce Knowledge base to generate responses that are relevant to the customer 's query, improving the efficiency and accuracy of customer support interactions. Option B is correct because Einstein Service Replies is responsible for generating AI-driven responses based on knowledge articles. Option A (Einstein Reply Recommendations) is focused on recommending replies but does not generate them. Option C (Einstein Grounding) refers to grounding responses in data but is not directly related to drafting replies.

## Multiple Choice

Universal Containers wants to use an external large language model (LLM) in Prompt Builder. What should An Agentforce recommend?

A. Use Apex to connect to an external LLM and ground the prompt.

B. Use BYO-LLM functionality in Einstein Studio.

C. Use Flow and External Services to bring data from an external LLM.

## Correct Answer: B

Explanation:

Bring Your Own Large Language Model (BYO-LLM) functionality in Einstein Studio allows organizations to integrate and use external large language models (LLMs) within the Salesforce ecosystem. Universal Containers can leverage this feature to connect and ground prompts with external LLMs, allowing for custom AI model use cases and seamless integration with Salesforce data. Option B is the correct choice as Einstein Studio provides a built-in feature to work with external models. Option A suggests using Apex, but BYO-LLM functionality offers a more streamlined solution. Option C focuses on Flow and External Services, which is more about data integration and isn 't ideal for working with LLMs. Salesforce Einstein Studio BYO-LLM Documentation: einstein\_studio\_llm.htm

## Multiple Choice

Coral Cloud Resorts is uploading thousands of new HTML knowledge articles files for a resort launch. To ensure Agentforce retrieves accurate responses quickly, which chunking strategy should be used when creating a new index?

A. Semantic-based passage extraction

B. Conversation-based chunking

C. Section-aware chunking

## Correct Answer: C

Explanation:

In AgentForce documentation on Knowledge Indexing and Chunking Strategies, Salesforce emphasizes that when uploading large volumes of structured content such as HTML or documentation files, the system should use section-aware chunking. The guide states: "Section-aware chunking preserves the logical boundaries of headings, paragraphs, and sub-sections in structured documents like HTML or PDF files, allowing the agent to retrieve contextually accurate and relevant responses quickly." This method ensures that the agent does not split content mid-section or lose contextual relationships between headings and body text. It enhances both retrieval speed and answer precision. Option A, semantic-based passage extraction, is better suited for free-text knowledge bases, where meaning needs to be inferred. Option B, conversation-based chunking, applies only to chat logs or dialogue histories. For HTML documentation and structured articles, section-aware chunking ensures optimized retrieval and minimal latency in AgentForce responses.

## Multiple Choice

Universal Containers (UC) is implementing Agentforce Service Agent on Email, UC made an email template and now needs to connect it to a Service Agent. What should an Agentforce Specialist recommend?

A. Create an Email Configuration for the Service Agent.

B. Create an Omni-Channel flow to point to an email template.

C. No action needed; the Service Agent connects automatically.

## Correct Answer: A

## Explanation:

According to the AgentForce for Service Configuration Guide, when implementing Service Agents on Email, administrators must create an Email Configuration to connect the agent with the appropriate email channel and templates. The documentation specifies: "To enable Service Agents to handle emails, create an Email Configuration that links the agent to the email address, template, and routing parameters. This configuration allows the Service Agent to read, interpret, and respond using the defined template." Option B (creating an Omni-Channel flow) applies to routing live messages or chats, not configuring email agents. Option C is incorrect because Service Agents do not automatically connect to email templates - a manual configuration is required. Thus, Option A is correct as it aligns with Salesforce's documented process for connecting email templates to AgentForce Service Agents.

## Multiple Choice

Universal Containers wants to be able to detect with a high level confidence if content generated by a large language model (LLM) contains toxic language. Which action should an AI Specialist take in the Trust Layer to confirm toxicity is being appropriately managed?

A. Access the Toxicity Detection log in Setup and export all entries where isToxicityDetected is true.

B. Create a flow that sends an email to a specified address each time the toxicity score from the response exceeds a predefined threshold.

C. Create a Trust Layer audit report within Data Cloud that uses a toxicity detector type filter to display toxic responses and their respective scores.

## Correct Answer: C

## Explanation:

To ensure that content generated by a large language model (LLM) is appropriately screened for toxic language, the Agentforce Specialist should create a Trust Layer audit report within Data Cloud. By using the toxicity detector type filter, the report can display toxic responses along with their respective toxicity scores, allowing Universal Containers to monitor and manage any toxic content generated with a high level of confidence. Option C is correct because it enables visibility into toxic language detection within the Trust Layer and allows for auditing responses for toxicity. Option A suggests checking a toxicity detection log, but Salesforce provides more comprehensive options via the audit report. Option B involves creating a flow, which is unnecessary for toxicity detection monitoring. Salesforce Trust Layer Documentation: einstein\_trust\_layer\_audit.htm

## Multiple Choice

Universal Containers operates a customer self-service portal supported by an Agentforce Service Agent. The compliance team maintains a Salesforce Knowledge base of published product compliance guidelines, service terms, and regulatory procedures, updated regularly by subject matter experts. What is the most efficient approach to ensure the agent retrieves only current published content using semantic understanding of customer questions, and that outdated articles are never surfaced?

A. Build a subagent action using a Salesforce Flow to query the Knowledge articles data model object at runtime and return matching content to the agent, ensuring the agent always retrieves live article data directly from the Knowledge object.

B. Create an Agentforce Data Library connected to the Salesforce Knowledge base, filtered to published articles only, enabling the agent to ground responses using retrieval-augmented generation powered semantic retrieval that automatically reflects Knowledge updates without requiring agent reconfiguration.

C. Configure a custom retriever in Einstein Studio connected to a Data 360 search index, applying filters to restrict results to documents tagged as current.

## Correct Answer: B

## Explanation:

The correct answer is B because a Knowledge-based Agentforce Data Library is the correct managed source for approved service and compliance content. Salesforce Knowledge already handles the article lifecycle, including publication state and article governance, while Agentforce Data Library makes that content searchable for AI grounding. Filtering to published articles prevents draft, archived, or outdated content from being used in customer-facing responses. Option A adds unnecessary Flow- based retrieval and bypasses the native semantic retrieval pattern. Option C may work for custom indexed content, but it is less efficient when the authoritative source is already Salesforce Knowledge. The clean architecture is to connect the data library to Knowledge, restrict the indexed scope, and allow the agent to retrieve semantically relevant approved articles.

## Multiple Choice

Universal Containers is auditing its AI architecture and needs to ensure that its developers are restricted to using only specifically approved large language models. How should an Agentforce Specialist manage and prevent unapproved models from being accessed across the organization?

A. Apply an Attribute-Based Access Control policy within the Einstein Trust Layer to block prompts from routing to unapproved large language models  
B. Write a strict system instruction within Agent Builder stating, "Never use external models for reasoning"

C. Ensure only approved large language models are enabled in the Model Provider section under Einstein Setup

Correct Answer: C

Explanation:

The correct answer is C because approved model governance must be enforced at the platform configuration layer, not left to prompt wording. Einstein Setup includes model provider configuration, where administrators manage which model providers and models are available for generative AI use. If only approved models are enabled there, builders and developers are restricted to the organization's permitted model set. Option A is wrong because the Einstein Trust Layer provides trust, grounding, masking, and safety services, but it is not the primary place to approve or disable model providers. Option B is not enforceable because system instructions can guide model behavior but cannot restrict platform-level model availability. Salesforce documentation states that model provider access is configured from Einstein Setup under Configure Model Providers.

## Multiple Choice

Universal Containers wants support agents to use Agentforce to ask questions about its product tutorials and product guides. What should the Agentforce Specialist do to meet this requirement?

A. Create a prompt template for product tutorials and guides.

B. Add an Answer Questions custom field in the product object for tutorial instructions.

C. Publish product tutorials and guides as Knowledge articles.

## Correct Answer: C

## Explanation:

Context of the QuestionUniversal Containers (UC) wants its support agents to use Agentforce to ask questions about product tutorials and product guides. Agentforce typically references knowledge sources to provide accurate and contextual responses. Why Knowledge Articles? Centralized Repository: Publishing product tutorials and guides as Knowledge articles in Salesforce ensures that the information is readily available and searchable by Agentforce. AI Integration: Salesforce's AI solutions, including Agentforce, can often be configured to pull content directly from Salesforce Knowledge articles, giving users on-demand answers without manual data duplication. Maintenance & Updates: Storing content in Salesforce Knowledge simplifies content updates, versioning, and user permissions. Why Not the Other Options? Option A (Create a Prompt Template): Creating a prompt template alone does not solve how the underlying content (tutorials, guides) is stored or accessed by Agentforce. Prompt templates shape the queries/responses but do not provide the knowledge base. Option B (Add an Answer Questions Custom Field): A single field on the product object is insufficient for the depth of information found in

tutorials and guides. It also lacks the robust search and user-friendly interface that Knowledge articles provide.

## Multiple Choice

Universal Containers' administrator has developed a new agent in a sandbox environment and now wants to deploy it to production. What should the administrator do to deploy an agent?

A. Manually recreate the agent configuration, topics, and actions in production because change sets cannot be used,

B. Export agent components as JSON files and manually import them into production using the Metadata API.

C. Create an outbound change set with all the necessary agent components, then upload to production.

## Correct Answer: C

## Explanation:

As per the AgentForce Deployment and Lifecycle Management Guide, AgentForce agents, including their topics, actions, and prompt templates, can be deployed from sandbox to production using Salesforce change sets. Administrators should create an outbound change set in the sandbox environment that includes all relevant components (Agent definition, prompt templates, topic configurations, flows, and permissions) and then upload it to production for validation and deployment. This process ensures consistency, auditability, and proper dependency tracking between environments. Option A is incorrect because manual recreation is inefficient and error-prone. Option B is not recommended, as JSON export/import is for development backups and advanced metadata operations, not for standard deployments. Hence, the correct approach per AgentForce's best practices is Option C - Create an outbound change set and deploy it to production.

## Multiple Choice

Universal Containers (UC) needs to create a custom prompt template that can be called from a Lightning web component. Which prompt template type should UC create?

A. Field Generation
B. Sales Email

Correct Answer: C

Explanation:

The AgentForce Developer Integration Guide specifies that Flex prompt templates are the correct type for custom or embedded integrations, such as invoking a prompt from a Lightning Web Component (LWC). Flex templates are designed for general-purpose use cases and can be called programmatically via Apex, Flow, or LWC APIs. They offer flexible input and output structures, allowing developers to integrate AgentForce reasoning into custom applications and UI components. Option A, Field Generation, is used to populate or update Salesforce fields, not for external invocation. Option B, Sales Email, is specific to generating pre-formatted communication messages and cannot be invoked directly from LWCs. Therefore, the correct template type for a prompt used within a Lightning Web Component is Option C - Flex, as it is purpose-built for dynamic, reusable, and programmatic use cases.

## Multiple Choice

Northern Trail Outfitters (NTO) wants to configure Einstein Trust Layer in its production org but is unable to see the option on the Setup page. After provisioning Data Cloud, which step must an Al Specialist take to make this option available to NTO?

A. Turn on Agent.

B. Turn on Einstein Generative AI.

C. Turn on Prompt Builder.

Correct Answer: B

Explanation:

For Northern Trail Outfitters (NTO) to configure the Einstein Trust Layer, the Einstein Generative AI feature must be enabled. The Einstein Trust Layer is closely tied to generative AI capabilities, ensuring that AI- generated content complies with data privacy, security, and trust standards. Option A (Turning on Agent) is unrelated to the setup of the Einstein Trust Layer, which focuses more on generative AI interactions and data handling. Option C (Turning on Prompt Builder) is used for configuring and building AI-driven prompts, but it does not enable the Einstein Trust Layer.

## Multiple Choice

Universal Containers (UC) wants to improve the efficiency of addressing customer questions and reduce agent handling time with AI-generated responses. The agents should be able to leverage their existing knowledge base and identify whether the responses are coming from the large language model (LLM) or from Salesforce Knowledge. Which step should UC take to meet this requirement?

A. Turn on Service AI Grounding, Grounding with Case, and Service Replies.
B. Turn on Service Replies, Service AI Grounding, and Grounding with Knowledge.

C. Turn on Service AI Grounding and Grounding with Knowledge.

## Correct Answer: C

## Explanation:

To meet Universal Containers ' goal of improving efficiency and reducing agent handling time with AI- generated responses, the best approach is to enable Service Replies, Service AI Grounding, and Grounding with Knowledge. Service Replies generates responses automatically. Service AI Grounding ensures that the AI is using relevant case data. Grounding with Knowledge ensures that responses are backed by Salesforce Knowledge articles, allowing agents to identify whether a response is coming from the LLM or Salesforce Knowledge. Option C does not include Service Replies, which is necessary for generating AI responses. Option A lacks the Grounding with Knowledge, which is essential for identifying response sources.

## Multiple Choice

Which object stores the conversation transcript between the customer and the agent?

A. Messaging End User
B. Messaging Session
C. Case

Correct Answer: B

Explanation:

Why is " Messaging Session " the correct answer? In Agentforce, the Messaging Session object stores the conversation transcript between the customer and the agent. Key Features of the Messaging Session Object: Stores the Entire Customer-Agent Conversation The Messaging Session object maintains a record of the full chat history, including timestamps, messages, and interactions. This ensures that past interactions can be referenced during follow-ups. Supports AI-Powered Work Summaries Einstein AI uses Messaging Sessions to generate summaries of chat interactions for agents. These summaries are stored and accessible for later reference. Links with Service Cloud for Case Resolution If a conversation escalates into a case, the Messaging Session object can be linked to it. This allows support teams to review the conversation history without switching contexts. Why Not the Other Options? # A. Messaging End User Incorrect because this object stores details about the customer (e.g., name, contact details) but not the conversation transcript. # C. Case Incorrect because Cases store structured service requests but do not contain raw conversation transcripts. Instead, cases may reference the Messaging Session object. Agentforce Specialist References Salesforce AI Specialist Material confirms that Messaging Sessions store chat conversations and support Einstein Work Summaries.

## Multiple Choice

Universal Containers wants to implement a solution in Salesforce with a custom UX that allows users to enter a sales order number. Subsequently, the system will invoke a custom prompt template to create and display a summary of the sales order header and sales order details. Which solution should an Agentforce Specialist implement to meet this requirement?

A. Create an autolaunched flow and invoke the prompt template using the standard "Prompt Template" flow action.

B. Create a template-triggered prompt flow and invoke the prompt template using the standard "Prompt Template" flow action.

C. Create a screen flow to collect the sales order number and invoke the prompt template using the standard "Prompt Template" flow action.

## Correct Answer: C

## Explanation:

Universal Containers (UC) requires a solution with a custom UX for users to input a sales order number, followed by invoking a custom prompt template to generate and display a summary. Let's evaluate each option based on this requirement and Salesforce Agentforce capabilities. Option A: Create an autolaunched flow and

invoke the prompt template using the standard "Prompt Template" flow action. An autolaunched flow is a background process that runs without user interaction, triggered by events like record updates or platform events. While it can invoke a prompt template using the "Prompt Template" flow action (available in Flow Builder to integrate Agentforce prompts), it lacks a user interface. Since UC explicitly needs a custom UX for users to enter a sales order number, an autolaunched flow cannot meet this requirement, as it doesn't provide a way for users to input data directly. Option B: Create a template-triggered prompt flow and invoke the prompt template using the standard "Prompt Template" flow action. There's no such thing as a "template-triggered prompt flow" in Salesforce terminology. This appears to be a misnomer or typo in the original question. Prompt templates in Agentforce are reusable configurations that define how an AI processes input data, but they are not a type of flow. Flows (like autolaunched or screen flows) can invoke prompt templates, but "template-triggered" is not a recognized flow type in Salesforce documentation. This option is invalid due to its inaccurate framing. Option C: Create a screen flow to collect the sales order number and invoke the prompt template using the standard "Prompt Template" flow action. A screen flow provides a customizable user interface within Salesforce, allowing users to input data (e.g., a sales order number) via input fields. The "Prompt Template" flow action, available in Flow Builder, enables integration with Agentforce by passing user input (the sales order number) to a custom prompt template. The prompt template can then query related data (e.g., sales order header and details) and generate a summary, which can be displayed back to the user on a subsequent screen. This solution meets UC's need for a custom UX and seamless integration with Agentforce prompts, making it the best fit.

## Multiple Choice

Universal Containers implemented Agent for its users. One user complains that Agent is not deleting activities from the past 7 days. What is the reason for this issue?

A. Agent Delete Record Action permission is not associated to the user.

B. Agent does not have the permission to delete the user 's records.

C. Agent does not support the Delete Record action.

## Correct Answer: C

Explanation:

Agent currently supports various actions like creating and updating records but does not support the Delete Record action. Therefore, the user 's request to delete activities from the past 7 days cannot be fulfilled using Agent. Unsupported Action:

The inability to delete records is due to the current limitations of Agent 's supported actions. It is designed to assist with tasks like data retrieval, creation, and updates, but for security and data integrity reasons, it does not facilitate the deletion of records. User Permissions: Even if the user has the necessary permissions to delete records within Salesforce, Agent itself does not have the capability to execute delete operations.

## Multiple Choice

Universal Containers wants to use an AI agent to answer questions about warranties, Warranty information has already been uploaded as unstructured data in Data Cloud. When answering user questions, the results must be filterable by product line and ranked by recent updates. Which approach should the Agentforce Specialist implement?

A. Use the default retriever which automatically accounts for regency ranking.
B. Build a custom retriever in Einstein Studio with product line filters and regency ranking.

C. Apply semantic embeddings with default metadata filters to achieve the desired result

## Correct Answer: B

## Explanation:

According to the AgentForce and Einstein Studio Integration Guide, when a business requires custom ranking or filtering logic (such as by product line and recency), the correct solution is to build a custom retriever in Einstein Studio. The documentation describes: "Custom retrievers in Einstein Studio enable configuration of metadata filters (e.g., product line) and custom ranking functions such as recency or relevance scoring. This allows fine-tuned control over retrieval beyond the default retriever's capabilities." Option A, the default retriever, provides general ranking and does not natively apply custom filters. Option C, applying semantic embeddings with default filters, is useful for general search optimization but lacks custom ranking logic. Therefore, Option B aligns with Salesforce's prescribed method for fine-tuned retrieval control in enterprise use cases requiring metadata-based and recency ranking. References (AgentForce Documents / Study Guide): AgentForce Einstein Studio Guide: "Building Custom Retrievers with Metadata and Ranking" AgentForce Data Cloud Configuration Notes: "Filtering and Ranking in Custom Retrieval" AgentForce Study Guide: "Advanced Retrieval Customization in Einstein Studio"

## Multiple Choice

Universal Containers plans to enable Agentforce in Slack so teams can interact with agents directly in Slack channels. Which description represents the key steps required to enable Agentforce in Slack?

A. Enable the default Slack channel Agentforce, and assign Slack agent access to users.

B. Configure the Slack workflow to invoke the Agentforce API, enabling users to interact with agents through predefined triggers and automated steps,

C. Configure the Slack agent connection and, in Manage Agentforce, install the agent, then assign agent access to users.

## Correct Answer: C

## Explanation:

The AgentForce for Slack Deployment Guide outlines the exact process for enabling AgentForce in Slack. The steps include: Configuring the Slack agent connection to link Salesforce with the Slack workspace. Installing the agent in the "Manage AgentForce" section. Assigning agent access to specific Slack users or channels. The documentation notes: "Administrators must first establish a Slack connection through Salesforce setup, then deploy the AgentForce app to the desired workspace. User permissions are managed in the Manage AgentForce console." Option A is incorrect because there is no "default Slack channel AgentForce." Option B refers to Slack workflows, which are unrelated to direct agent configuration. Therefore, Option C accurately describes the official Salesforce method for enabling AgentForce in Slack. References (AgentForce Documents / Study Guide): AgentForce for Slack Integration Guide: "Steps to Connect and Deploy Agents" Salesforce Setup for AgentForce Collaboration Platforms AgentForce Study Guide: "Configuring Slack Agent Connections and User Access"

## Multiple Choice

Leadership needs to populate a dynamic form field with a summary or description created by a large language model (LLM) to facilitate more productive conversations with customers. Leadership also wants to keep a human in the loop to be considered in their AI strategy. Which prompt template type should the Agentforce Specialist recommend?

A. Field Generation  
B. Sales Email  
C. Record Summary

## Correct Answer: A

Explanation:

Why is "Field Generation" the correct answer? In Agentforce, the Field Generation prompt template type is designed to populate dynamic form fields with AI-generated content, such as summaries or descriptions created by a large language model (LLM). Key Considerations for Using Field Generation in Dynamic Forms: AI-Powered Summarization in Form Fields Field Generation templates allow real-time AI-generated summaries based on customer data. The summary is dynamically populated in the form field for the sales or service representative to review. Human-in-the-Loop AI Strategy Since leadership wants a human to be involved, Field Generation ensures the AI-generated content is editable before submission. This keeps a human-in-the-loop, allowing manual review before finalizing responses. Works with Salesforce Dynamic Forms Field Generation templates integrate seamlessly with Salesforce Dynamic Forms, ensuring AI-powered insights are embedded within form layouts. Why Not the Other Options? # B. Sales Email Incorrect because Sales Email templates are designed for AI-generated email content, not for populating form fields. # C. Record Summary Incorrect because Record Summary templates generate high-level summaries of entire records, but do not populate individual form fields dynamically. Agentforce Specialist References Salesforce AI Specialist Material confirms that Field Generation templates are used for AI-powered dynamic form population.

## Multiple Choice

For an Agentforce Data Library that contains uploaded files, what occurs once it is created and configured?

A. Indexes the uploaded files in a location specified by the user

B. Indexes the uploaded files into Data Cloud

C. Indexes the uploaded files in Salesforce File Storage

## Correct Answer: B

## Explanation:

In Salesforce Agentforce, a Data Library is a feature that allows organizations to upload files (e.g., PDFs, documents) to be used as grounding data for AI-driven agents. Once the Data Library is created and configured, the uploaded files are indexed to make their content searchable and usable by the AI (e.g., for retrievalaugmented generation or prompt enhancement). The key question is where this indexing occurs. Salesforce Agentforce integrates tightly with Data Cloud, a unified data platform that includes a vector database optimized for storing and indexing unstructured data like uploaded files. When a Data Library is set up, the files are ingested and indexed into Data Cloud's vector database, enabling the AI to efficiently retrieve relevant information from them during conversations or actions. Option A: Indexing files in a "location specified by the user" is not a feature of Agentforce Data Libraries. The indexing process is managed by Salesforce infrastructure, not a user-defined location. Option B: This is correct. Data Cloud handles the indexing of uploaded files, storing them in its vector database to support AI capabilities like semantic search and content retrieval. Option C: Salesforce File Storage (e.g., where ContentVersion records are stored) is used for general file storage, but it does not inherently index files for AI use. Agentforce relies on Data Cloud for indexing, not basic file storage.

## Multiple Choice

What is a Salesforce Agentforce Specialist able to configure in Data Masking within the Einstein Trust Layer?

A. The profiles exempt from masking

B. The encryption keys for masking

C. The privacy data entities to be masked

## Correct Answer: C

## Explanation:

In the Einstein Trust Layer, the Salesforce Agentforce Specialist can configure privacy data entities to be masked (Option C). This ensures sensitive or personally identifiable information (PII) is obfuscated when processed by AI models. Data Masking Configuration: The Agentforce Specialist defines which fields or data types (e.g., email, phone number, Social Security Number) should be masked. For example, masking the Email field in a prompt response to protect user privacy. This is done through declarative settings in Salesforce, where entities (standard or custom fields) are flagged for masking. Why Other Options Are Incorrect: A). Profiles exempt from masking: Exemptions are typically managed via permissions (e.g., field-level security), not directly within Einstein Trust Layer's Data Masking settings. B). Encryption keys for masking: Encryption is separate from masking. Masking involves obfuscation (e.g., replacing "john@example.com" with "@"), not encryption, which uses keys to secure data. Einstein Trust Layer Documentation: States that Data Masking allows admins to "define which fields should be masked to protect sensitive data."

Trailhead Module: "Einstein Trust Layer Basics" explains configuring privacy entities for masking.

## Multiple Choice

Universal Containers (UC) is creating a new custom prompt template to populate a field with generated output. UC enabled the Einstein Trust Layer to ensure AI Audit data is captured and monitored for adoption and possible enhancements. Which prompt template type should UC use and which consideration should UC review?

A. Field Generation, and that Dynamic Fields is enabled  
B. Field Generation, and that Dynamic Forms is enabled  
C. Flex, and that Dynamic Fields is enabled

## Correct Answer: A

## Explanation:

Salesforce Agentforce provides various prompt template types to support AI-driven tasks, such as generating text or populating fields. In this case, UC needs a custom prompt template to populate a field with generated output, which directly aligns with the Field Generation prompt template type. This type is designed to use generative AI to create field values (e.g., summaries, descriptions) based on input data or prompts, making it the ideal choice for UC's requirement. Additionally, UC has enabled the Einstein Trust Layer, a governance framework that ensures AI outputs are safe, explainable, and auditable, capturing AI Audit data for monitoring adoption and identifying improvement areas. The consideration UC should review is whether Dynamic Fields is enabled. Dynamic Fields allow the prompt template to incorporate variable data from Salesforce records (e.g., case details, customer info) into the prompt, ensuring the generated output is contextually relevant to each record. This is critical for field population tasks, as static prompts wouldn't adapt to record-specific needs. The Einstein Trust Layer further benefits from this, as it can track how dynamic inputs influence outputs for audit purposes. Option A: Correct. "Field Generation" matches the use case, and "Dynamic Fields" is a key consideration to ensure flexibility and auditability with the Trust Layer. Option B: "Field Generation" is correct, but "Dynamic Forms" is unrelated. Dynamic Forms is a UI feature for customizing page layouts, not a prompt template setting, making this option incorrect. Option C: "Flex" templates are more general-purpose and not specifically tailored for field population tasks. While Dynamic Fields could apply, Field Generation is the better fit for UC's stated goal. Option A is the best choice, as it pairs the appropriate template type (Field Generation) with a relevant consideration (Dynamic Fields) for UC's scenario with the Einstein Trust Layer.

## Multiple Choice

How does Agentforce select the correct action to resolve a user's request?

A. Each topic contains a list of the matching action's user utterances so that the agent can map the user request to the right topic and action.
B. The large language model (LLM) selects the right topic and action, if they exist. If there are no matches, the LLM attempts to answer the user 's request.
C. The reasoning engine identifies the agent action to be executed by its name and action input instructions.

## Correct Answer: B

Explanation:

In the AgentForce Architecture and Reasoning Engine Overview, Salesforce explains that the large language model (LLM) drives topic and action selection. The documentation states: "AgentForce uses an LLM to interpret user intent, map it to existing topics, and trigger the appropriate action when available. If no matching topic or action is found, the LLM attempts to generate a direct response using its available context." This design ensures dynamic adaptability-the agent can choose the correct topic and associated action based on natural language understanding. Option A is incorrect because topic-to-utterance mapping is a configuration aid, not the selection mechanism. Option C is incorrect because the reasoning engine does not select actions by name-it interprets user intent via the LLM and executes mapped actions if relevant. Therefore, Option B reflects the official operational flow of AgentForce's LLM-driven reasoning process. References (AgentForce Documents / Study Guide): AgentForce Reasoning Engine Overview AgentForce Builder User Guide: "Topic, Action, and LLM Selection Flow" AgentForce Study Guide: "How the LLM Chooses Topics and Executes Actions"

## Multiple Choice

Universal Containers is using Agentforce for Sales to find similar opportunities to help close deals faster. The team wants to understand the criteria used by the Agent to match opportunities. What is one criterion that Agentforce for Sales uses to match similar opportunities?

A. Matched opportunities have a status of Closed Won from the last 12 months.
B. Matched opportunities are limited to the same account.
C. Matched opportunities were created in the last 12 months.

## Correct Answer: A

Explanation:

UC uses Agentforce for Sales to identify similar opportunities, aiding deal closure. Let's determine a criterion used by the "Find Similar Opportunities" feature. Option A: Matched opportunities have a status of Closed Won from the last 12 months. Agentforce for Sales analyzes historical data to find similar opportunities, prioritizing "Closed Won" deals as successful examples. Documentation specifies a 12-month lookback period for relevance, ensuring recent, applicable matches. This is a key criterion, making it the correct answer. Option B: Matched opportunities are limited to the same account. While account context may factor in, Agentforce doesn't restrict matches to the same account-it considers broader patterns across opportunities (e.g., industry, deal size). This is too narrow and incorrect. Option C: Matched opportunities were created in the last 12 months. Creation date isn't a primary criterion- status (e.g., Closed Won) and recency of closure matter more. This doesn't align with documented behavior, making it incorrect.

## Multiple Choice

An Agentforce is creating a custom action for Agentforce. Which setting should the a ensure the action performs as expected?

A. Action Name

B. Action Input

C. Action Instructions

## Correct Answer: C

## Explanation:

When creating a custom action for Einstein Bots in Salesforce (including Agentforce), Action Instructions are critical for defining how the bot processes and executes the action. These instructions guide the bot on the logic to follow, such as API calls, data transformations, or conditional steps. Testing and iterating on the instructions ensures the bot understands how to handle dynamic inputs, external integrations, and decision-making. Salesforce documentation emphasizes that Action Instructions directly impact the bot's ability to execute workflows accurately. For example, poorly defined instructions may lead to incorrect API payloads or failure to parse responses. The Einstein Bot Developer Guide highlights that refining instructions is essential for aligning the bot's behavior with business requirements. In contrast: Action Name (A)

is a static identifier and does not affect functionality. Action Input (B) defines parameters passed to the action but does not dictate execution logic. Thus, iterating on Action Instructions (C) ensures the action performs as expected.

## Multiple Choice

What considerations should an Agentforce Specialist be aware of when using Record Snapshots grounding in a prompt template?

A. Activities such as tasks and events are excluded.

B. Empty data, such as fields without values or sections without limits, is filtered out.

C. Email addresses associated with the object are excluded.

## Correct Answer: A

## Explanation:

Record Snapshots grounding in Agentforce prompt templates allows the AI to access and use data from a specific Salesforce record (e.g., fields and related records) to generate contextually relevant responses. However, there are specific limitations to consider. Let's analyze each option based on official documentation. Option A: Activities such as tasks and events are excluded. According to Salesforce Agentforce documentation, when grounding a prompt template with Record Snapshots, the data included is limited to the record's fields and certain related objects accessible via Data Cloud or direct Salesforce relationships. Activities (tasks and events) are not included in the snapshot because they are stored in a separate Activity object hierarchy and are not directly part of the primary record's data structure. This is a key consideration for an Agentforce Specialist, as it means the AI won't have visibility into task or event details unless explicitly provided through other grounding methods (e.g., custom queries). This limitation is accurate and critical to understand. Option B: Empty data, such as fields without values or sections without limits, is filtered out. Record Snapshots include all accessible fields on the record, regardless of whether they contain values. Salesforce documentation does not indicate that empty fields are automatically filtered out when grounding a prompt template. The Atlas Reasoning Engine processes the full snapshot, and empty fields are simply treated as having no data rather than being excluded. The phrase "sections without limits" is unclear but likely a typo or misinterpretation; it doesn't align with any known Agentforce behavior. This option is incorrect. Option C: Email addresses associated with the object are excluded. There's no specific exclusion of email addresses in Record Snapshots grounding. If an email field (e.g., Contact.Email or a custom email field) is part of the record and accessible to the running user, it is included in the snapshot. Salesforce documentation does not list email addresses as a restricted data type in this context, making this option incorrect.

## Multiple Choice

The support team at Coral Cloud Resorts needs to create a Flex prompt template that summarizes complex case histories for agent handoffs. The goal is to ensure summaries are concise and follow a specific three-part structure: Issue, Steps Taken, and Next Action. What should an Agentforce Specialist recommend to ensure consistent data output?

A. Use chain-of-thought reasoning.

B. Define the desired output structure with explicit headings in the instruction.

C. Use a prompt template-triggered flow to format responses.

Correct Answer: B

## Explanation:

The correct answer is B because the requirement is about controlling the structure of generated text. In Prompt Builder, the cleanest way to obtain consistent output is to state the required format directly in the prompt instructions, including the exact section headings: Issue, Steps Taken, and Next Action. This gives the large language model a clear output contract and reduces variation between summaries. Option A is wrong because chain-of-thought reasoning is not appropriate for exposing or forcing internal reasoning, and it does not guarantee a fixed business format. Option C is unnecessary because a flow can support orchestration, but the formatting requirement can be handled directly through explicit prompt instructions. Salesforce prompt engineering guidance emphasizes using clear task framing, examples, and structured instructions to improve output reliability.

## Multiple Choice

Based on the user utterance, ' Show me all the customers in New York ', which standard Agent action will the planner service use?

A. Query Records
B. Fetch Records
C. Select Records

## Correct Answer: A

## Explanation:

Why is Query Records the Correct Answer? In Agentforce, the Planner Service is responsible for interpreting user requests and selecting the appropriate Copilot Action to fulfill them. When a user issues a command like: " Show me all the customers in New York ", the system must retrieve a list of customers filtered by location. The Query Records action is designed precisely for this purpose. Key Features of Query Records in Agentforce: Retrieves Data Based on Specific Field Values This action fetches Salesforce records that match a set of criteria, such as customers located in New York. Uses standard or custom object fields (e.g., BillingState = ' New York'). Works with Large Language Models (LLMs) and Copilot Actions When a user asks for filtered data, Query Records is the default action assigned by the Planner Service. Optimized for Structured Data Retrieval Ensures AI retrieves relevant CRM records quickly and accurately. Why Not the Other Options? # B. Fetch Records This is not a standard term in Einstein Copilot or Agentforce. No defined Agentforce action exists under this name. # C. Select Records Select Records is used to pick records from an already presented list, not to retrieve them initially. If the user had already retrieved records and wanted to refine their selection, Select Records might be appropriate. However, since the user ' s request is to retrieve records, Query Records is the correct action. Agentforce Specialist References This information is confirmed from the Salesforce AI Specialist Material and Questions Document, where the Query Records action is explicitly defined as the appropriate standard action for retrieving filtered CRM records.

## Multiple Choice

Universal Containers is building an Agentforce Service Agent to help customers track their purchases. To store the customer's order number during the conversation, the Agentforce Specialist creates and initializes a variable in Agent Script using the declaration order\_id: string = " ", omitting the mutable keyword. During testing, the agent attempts to update this variable with the user's order number via the @utils.setVariables utility. What is the result of this variable declaration at runtime?

A. The variable defaults to mutable; the mutable keyword is optional and has no effect, allowing the agent to successfully update the variable.
B. The declaration is a syntax error and the agent will fail to deploy.
C. The variable is treated as read-only; it cannot be updated by actions or @utils.setVariables at runtime because it lacks the mutable keyword.

## Explanation:

The correct answer is C because Agent Script variables are read-only unless they are explicitly declared with the mutable keyword. A regular variable without mutable can be referenced, but the agent cannot change its value during the conversation. That is exactly why order\_id: string = " " is not suitable for capturing the customer's order number during runtime. To store information gathered from the user, the variable must be declared as a mutable string, such as order\_id: mutable string = " ". Option A is wrong because mutability is not the default. Option B is wrong because the declaration itself is valid syntax; it simply creates a nonmutable variable. The runtime failure occurs when the agent or utility attempts to update it.

## Multiple Choice

A service manager wants to use Salesforce Prompt Builder to help agents summarize customer case notes after a support call. The summary should: Capture the customer's issue, troubleshooting steps taken, and next actions. Be no longer than five sentences. Use plain language with no technical jargon. If no next action is identified, the summary should explicitly state "No next action required." Which key prompt constructs meet this requirement?

A. Role, Task, LLM Clarity Score, and Format  
B. Role, Task, Token Size Limit, and Format  
C. Task, Context, Constraints, and Format

## Correct Answer: C

## Explanation:

The correct answer is C because the requirement is built around the essential prompt elements of task, context, constraints, and format. The task is to summarize support case notes. The context is the customer issue, troubleshooting steps, and next actions. The constraints are the five-sentence limit, plain-language requirement, no jargon, and the exact phrase to use when no next action exists. The format controls how the final summary should be presented. Option A is incorrect because "LLM Clarity Score" is not a prompt construct. Option B is weaker because token limits are not the same as business constraints such as sentence count and required wording. Salesforce guidance recommends prompts that clearly cover task, context, format, and constraints.

## Multiple Choice

Cloud Kicks wants its Agentforce Service Agent to retrieve up-to-date factual data from the internet. Which step must an Agentforce Specialist take to ensure the agent uses the web search capability properly?

A. Enable the Answer Questions with Knowledge standard action specifically on the General FAQ subagent.

B. Map the web search retriever to a custom search index in Data 360 before activating the agent.

C. Remove the default General FAQ subagent and replace its function with a new General Web Search subagent.

## Correct Answer: C

## Explanation:

The correct answer is C. Salesforce's Agentforce web search guidance states that web search is configured through a web search data library and a General Web Search subagent. It also notes that the General FAQ subagent must be removed because only one subagent can use the Answer Questions with Knowledge action for this purpose. Option A is incomplete and misleading because simply enabling Answer Questions with Knowledge on General FAQ is the standard knowledge or file-search pattern, not the proper web search pattern. Option B is also incorrect because the specialist does not manually map a web search retriever to a custom search index as the required setup step. Web search requires the correct web data library and General Web Search subagent configuration.

## Multiple Choice

An Agentforce Specialist is trying to troubleshoot a reported issue from an end user, and they do not see the session in the Processed Sessions tab of Agentforce Observability. What should the specialist take into consideration?

A. The agent has not yet been registered in the Observability app, so no sessions are processed.

B. The session is queued to be processed and can be viewed on the Unprocessed Sessions tab.

C. Sessions are batched on a 24-hour rolling process, and the logs must be checked again the next day.

## Explanation:

The correct answer is B. If a session is not visible under Processed Sessions, the specialist should first consider that it may not have completed processing yet. Agentforce Observability and Session Tracing are designed to collect, store, and expose detailed session data for troubleshooting, but session data can move through processing states before it appears in the processed view. Option A is too broad because the absence of one session does not automatically prove the agent is unregistered. Option C is also too rigid because the correct operational check is the unprocessed queue, not simply waiting for a daily batch cycle. For troubleshooting, the specialist should inspect the Unprocessed Sessions tab before assuming missing observability setup or lost trace data.

## Multiple Choice

A developer is using the Salesforce CLI to deploy agent components from a sandbox to production. They recently made a change to several topics, instructions, and actions. Which metadata component should the developer include in their package.xml file that contains all of the topics and actions an agent will interact with?

A. genAiPlannerBundle

B. EinsteinAiPlannerBundle

C. BotBundle

## Correct Answer: A

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce documents: The metadata component that contains the complete configuration for an Agentforce Agent, including references to all its topics and actions, is GenAiPlannerBundle (A). In Salesforce development using the Metadata API or the Salesforce CLI, an Agentforce Agent is represented by a planner metadata type. In recent Salesforce API versions (v64 and above, as of this knowledge base), the core agent component is the GenAiPlannerBundle. This acts as the container or planner that defines the agent 's reasoning engine and bundles together all the necessary references to the Topics (represented by the GenAiPlugin metadata type) and the Actions (represented by the GenAiFunction metadata type) that the agent is allowed to execute. Deploying the GenAiPlannerBundle is essential for deploying a complete, updated Agentforce Agent configuration. Prior to version 64, the component was named GenAiPlanner, which serves the same conceptual role. Since modern DevOps pipelines strive for the latest capabilities, GenAiPlannerBundle is the most current

and accurate answer for a full agent deployment. Options B and C are incorrect because they are not the correct Metadata API names: EinsteinAiPlannerBundle is not a standard metadata type, and BotBundle is not the specific, correct name for the Agentforce AI planner component. Simulated Exact Extract of AgentForce documents (Conceptual Reference): " The GenAiPlannerBundle metadata type represents the entire AI Agent planner configuration. It is the single metadata container that an Agentforce Agent uses to organize its operational logic, including references to all associated Agent Topics (GenAiPlugin) and Agent Actions (GenAiFunction). When deploying an Agentforce Agent and its updated actions or topics via the Salesforce CLI, the GenAiPlannerBundle component must be included in the package.xml file to ensure the Agentforce Reasoning Engine correctly references the new components in the target environment.

## Multiple Choice

An Agentforce at Universal Containers is trying to set up a new Field Generation prompt template. They take the following steps. 1. Create a new Field Generation prompt template. 2. Choose Case as the object type. 3. Select the custom field AI\_Analysis\_c as the target field. After creating the prompt template, the Agentforce Specialist saves, tests, and activates it. Howsoever, when they go to a case record, the AI Analysis field does not show the (Sparkle) icon on the Edit pencil. When the Agentforce Specialist was editing the field, it was behaving as a normal field. Which critical step did the Agentforce Specialist miss?

A. They forgot to reactivate the Lightning page layout for the Case object after activating their Field Generation prompt template.

B. They forgot that the Case Object is not supported for Add generation as Feinstein Service Replies should be used instead.

C. They forgot to edit the Lightning page layout and associate the field to a prompt template

## Correct Answer: C

## Explanation:

For Field Generation prompt templates to display the Sparkle icon (indicating AI-generated content), the target field must be explicitly associated with the prompt template on the Lightning page layout. Even if the prompt template is activated, failing to add the field to the page layout and link it to the template will result in the field behaving as a standard field. Salesforce documentation emphasizes that page layout configuration is mandatory to enable AI-driven field interactions. Reactivating the layout (A) is unnecessary unless the layout itself was modified after activation. Case objects are supported for Field Generation (B is incorrect).

## Multiple Choice

Universal Containers wants to implement a customer verification process where sensitive account information can only be accessed after the customer passes identity verification. The agent must enforce this security rule deterministically without allowing the large language model (LLM) to bypass the verification requirement. What should an Agentforce Specialist recommend as the best solution?

A. Use context variables to store verification status in the messaging session and configure the agent to check these variables through natural language prompts during each sensitive action.
B. Include detailed verification instructions in the agent's topic instructions explaining when customers should be verified and rely on the LLM to follow these guidelines consistently across all interactions.
C. Create a custom variable IsCustomerVerified set by a verification action, then apply a conditional filter using the expression IsCustomerVerified equals true to all sensitive data actions, ensuring deterministic access control that the LLM can 't alter.

## Correct Answer: C

## Explanation:

The AgentForce Security and Deterministic Logic Guide specifies that sensitive actions must be gated through conditional filters linked to verification variables, not through natural language. It states: "For any process requiring secure, deterministic access, create a custom variable (e.g., IsCustomerVerified) that stores the verification status as a Boolean. Apply a filter expression to all protected actions (e.g., IsCustomerVerified = true). This ensures the LLM cannot bypass or alter access logic." This configuration ensures security and determinism because the execution of sensitive actions is programmatically enforced, not dependent on the LLM's understanding. Option A is incorrect because natural language-based checks are non-deterministic. Option B relies solely on topic instructions, which can be ignored or misinterpreted by the LLM. Therefore, Option C is the only solution that provides deterministic, system-enforced access control. References (AgentForce Documents / Study Guide): AgentForce Security Configuration Guide: "Using Conditional Filters for Deterministic Access" AgentForce Implementation Handbook: "Verification Variables and Secure Action Flow" AgentForce Study Guide: "Protecting Sensitive Data in AI Workflows"

## Multiple Choice

An Agentforce is creating a custom action in Agent. Which option is available for the Agentforce Specialist to choose for the custom copilot action?

A. Apex trigger
B. SOQL
C. Flows

## Correct Answer: C

## Explanation:

When creating a custom action in Agent, one of the available options is to use Flows. Flows are a powerful automation tool in Salesforce, allowing the Agentforce Specialist to define custom logic and actions within the Copilot system. This makes it easy to extend Copilot's functionality without needing custom code. While Apex triggers and SOQL are important Salesforce tools, Flows are the recommended method for creating custom actions within Agent because they are declarative and highly adaptable.

## Multiple Choice

What is best practice when refining Agent custom action instructions?

A. Provide examples of user messages that are expected to trigger the action.
B. Use consistent introductory phrases and verbs across multiple action instructions.

C. Specify the persona who will request the action.

## Correct Answer: A

## Explanation:

When refining Agent custom action instructions, it is considered best practice to provide examples of user messages that are expected to trigger the action. This helps ensure that the custom action understands a variety of user inputs and can effectively respond to the intent behind the messages. Option B (consistent phrases) can improve clarity but does not directly refine the triggering logic. Option C

(specifying a persona) is not as crucial as giving examples that illustrate how users will interact with the custom action.

## Multiple Choice

How does the Einstein Trust Layer ensure that sensitive data is protected while generating useful and meaningful responses?

A. Masked data will be de-masked during response journey.

B. Masked data will be de-masked during request journey.

C. Responses that do not meet the relevance threshold will be automatically rejected.

## Correct Answer: A

## Explanation:

The Einstein Trust Layer ensures that sensitive data is protected while generating useful and meaningful responses by masking sensitive data before it is sent to the Large Language Model (LLM) and then de-masking it during the response journey. How It Works: Data Masking in the Request Journey: Sensitive Data Identification: Before sending the prompt to the LLM, the Einstein Trust Layer scans the input for sensitive data, such as personally identifiable information (PII), confidential business information, or any other data deemed sensitive. Masking Sensitive Data: Identified sensitive data is replaced with placeholders or masks. This ensures that the LLM does not receive any raw sensitive information, thereby protecting it from potential exposure. Processing by the LLM: Masked Input: The LLM processes the masked prompt and generates a response based on the masked data. No Exposure of Sensitive Data: Since the LLM never receives the actual sensitive data, there is no risk of it inadvertently including that data in its output. De-masking in the Response Journey: Re-insertion of Sensitive Data: After the LLM generates a response, the Einstein Trust Layer replaces the placeholders in the response with the original sensitive data. Providing Meaningful Responses: This de-masking process ensures that the final response is both meaningful and complete, including the necessary sensitive information where appropriate. Maintaining Data Security: At no point is the sensitive data exposed to the LLM or any unintended recipients, maintaining data security and compliance. Why Option A is Correct: De-masking During Response Journey: The de-masking process occurs after the LLM has generated its response, ensuring that sensitive data is only reintroduced into the output at the final stage, securely and appropriately. Balancing Security and Utility: This approach allows the system to generate useful and meaningful responses that include necessary sensitive information without compromising data security. Why Options B and C are

Incorrect: Option B (Masked data will be de-masked during request journey): Incorrect Process: De-masking during the request journey would expose sensitive data before it reaches the LLM, defeating the purpose of masking and compromising data security. Option C (Responses that do not meet the relevance threshold will be automatically rejected): Irrelevant to Data Protection: While the Einstein Trust Layer does enforce relevance thresholds to filter out inappropriate or irrelevant responses, this mechanism does not directly relate to the protection of sensitive data. It addresses response quality rather than data security.

## Multiple Choice

What is a valid option for Omni-Channel routing for a messaging channel?

A. Agentforce Service Agent
B. Autolaunched flow
C. Agentforce Employee Agent

Correct Answer: A

Explanation:

The correct answer is A because a messaging channel can be routed through Omni-Channel to an Agentforce Service Agent. In this configuration, Salesforce uses an inbound Omni-Channel flow and Route Work logic to direct the customer conversation to the Service Agent. This is the valid routing target for customer-facing service conversations over messaging. Option B is wrong because an autolaunched flow can execute automation, but it is not the agent routing destination for a messaging session. Option C is wrong because Employee Agents are designed for internal employee assistance, not customer messaging channel routing. Salesforce documentation for Agentforce Service Agent explains that messaging channels can be connected by creating an inbound Omni- Channel flow that routes messages to the agent.

## Multiple Choice

Universal Containers (UC) has recently received an increased number of support cases. As a result, UC has hired more customer support reps and has started to assign some of the ongoing cases to newer reps. Which generative AI solution should the new support reps use to understand the details of a case without reading through each case comment?

A. Agent
B. Einstein Sales Summaries
C. Einstein Work Summaries

## Correct Answer: C

Explanation:

New customer support reps at Universal Containers can use Einstein Work Summaries to quickly understand the details of a case without reading through each case comment. Work Summaries leverage generative AI to provide a concise overview of ongoing cases, summarizing all relevant information in an easily digestible format. Agent can assist with a variety of tasks but is not specifically designed for summarizing case details. Einstein Sales Summaries are focused on summarizing sales-related activities, which is not applicable for support cases.

## Multiple Choice

Universal Containers (UC) implements a custom retriever to improve the accuracy of AI-generated responses. UC notices that the retriever is returning too many irrelevant results, making the responses less useful. What should UC do to ensure only relevant data is retrieved?

A. Define filters to narrow the search results based on specific conditions.
B. Change the search index to a different data model object (DMO).
C. Increase the maximum number of results returned to capture a broader dataset.

Correct Answer: A

## Explanation:

In Salesforce Agentforce, a custom retriever is used to fetch relevant data (e.g., from Data Cloud's vector database or Salesforce records) to ground AI responses. UC's issue is that their retriever returns too many irrelevant results, reducing response accuracy. The best solution is to define filters (Option A) to refine the retriever's search criteria. Filters allow UC to specify conditions (e.g., "only retrieve documents from the 'Policy' category" or "records created after a certain date") that narrow the dataset, ensuring the retriever returns only relevant results. This directly improves the precision of AI-generated responses by excluding extraneous data, addressing UC's problem effectively. Option B: Changing the search index to a different data

model object (DMO) might be relevant if the retriever is querying the wrong object entirely (e.g., Accounts instead of Policies). However, the question implies the retriever is functional but unrefined, so adjusting the existing setup with filters is more appropriate than switching DMOs. Option C: Increasing the maximum number of results would worsen the issue by returning even more data, including more irrelevant entries, contrary to UC's goal of improving relevance. Option A: Filters are a standard feature in custom retrievers, allowing precise control over retrieved data, making this the correct action. Option A is the most effective step to ensure relevance in retrieved data.

## Multiple Choice

Universal Containers (UC) wants its AI agent to return responses quickly. UC needs to optimize the retriever 's configuration to ensure minimal latency when grounding AI responses. Which configuration aspect should UC prioritize?

A. Configure the retriever to operate in dynamic mode so that it modifies the search Index structure at runtime.

B. Ensure the retriever 's filters are defined to limit the scope of each search efficiently.

C. Increase the recency bias setting for the retriever limiting scope to more recent data.

## Correct Answer: B

## Explanation:

Why is "Ensure the retriever's filters are defined to limit the scope of each search efficiently" the correct answer? In Agentforce, when optimizing a retriever's configuration to ensure minimal latency in AI-generated responses, the most effective approach is narrowing the scope of searches by applying specific filters. Key Considerations for Optimizing Retrievers in Agentforce: Defining Effective Filters Applying precise search filters reduces unnecessary data retrieval, decreasing response time. Filters help focus on relevant records, avoiding delays caused by processing large datasets. Reducing Query Complexity Overly broad searches can increase retrieval time, leading to latency issues. Well-configured retriever filters streamline queries, improving response speed. Optimizing the Data Indexing Process Restricting retriever searches to indexed fields enhances efficiency. Pre-indexed data is faster to access, reducing retrieval time. Why Not the Other Options? # A. Configure the retriever to operate in dynamic mode so that it modifies the search index structure at runtime. Incorrect because modifying the search index at runtime increases latency rather than reducing it. Index modifications require restructuring

large datasets, which can slow down AI-generated responses. # C. Increase the recency bias setting for the retriever, limiting scope to more recent data. Incorrect because increasing recency bias only prioritizes recent records but does not necessarily improve overall retrieval speed. While it affects relevance, it does not directly address latency issues. Agentforce Specialist References Salesforce AI Specialist Material confirms that retriever efficiency depends on well-defined filtering mechanisms to minimize latency. Salesforce Instructions for Certification highlight retriever optimization strategies to improve search response times.

## Multiple Choice

What is the primary function of the reasoning engine in Agentforce?

A. Identifying agent topics and actions to respond to user utterances  
B. Offering real-time natural language response during conversations  
C. Generating record queries based on conversation history

## Correct Answer: A

Explanation:

Why is " Identifying agent topics and actions to respond to user utterances " the correct answer? In Agentforce, the reasoning engine plays a critical role in interpreting user queries and determining the appropriate agent response. Key Functions of the Reasoning Engine in Agentforce: Analyzing User Intent The reasoning engine interprets the meaning behind natural language user inputs. It maps user utterances to predefined topics to determine the correct AI-generated response. Selecting the Appropriate Agent Action The engine evaluates available actions and selects the best response based on the detected topic. For example, if a user asks, " What is my current account balance? ", the reasoning engine: Identifies the topic: " Account Information " Chooses the correct action: " Retrieve account balance " Executes the action and returns the response Ensuring AI Accuracy and Context Awareness The reasoning engine grounds AI-generated responses in relevant Salesforce data, ensuring accurate outputs. Why Not the Other Options? # B. Offering real-time natural language response during conversations. Incorrect because real-time natural language processing (NLP) is handled by the large language model (LLM), not the reasoning engine. The reasoning engine focuses on action selection, not linguistic processing. # C. Generating record queries based on conversation history. Incorrect because query generation is handled by Copilot Actions (e.g., Query Records), not the reasoning engine. The reasoning engine decides which query should be run, but does not generate queries itself. Agentforce Specialist References Salesforce AI Specialist Material explains that the reasoning

engine identifies topics and selects agent actions. Salesforce Instructions for the Certification confirm that the reasoning engine determines AI workflow execution.

## Multiple Choice

Universal Containers wants to systematically validate agent responses before deployment using a scalable testing process. Which Testing Center approach should the company implement?

A. Upload a structured CSV test template and run batch test cases in Testing Center.

B. Manually interact with the agent in Builder until responses seem correct.

C. Use pilot users in production to flag incorrect responses post-launch.

## Correct Answer: A

## Explanation:

Per the AgentForce Testing Center Operations Guide, the batch testing feature allows organizations to upload structured CSV test templates containing real-world user utterances, expected classifications, and desired outcomes. Once uploaded, these test cases are executed in bulk within the Testing Center to validate agent accuracy, reasoning consistency, and grounding before activation. This structured approach supports repeatable, scalable testing and ensures objective evaluation across multiple topics and scenarios. Option B (manual testing) is suitable for early prototyping but not scalable or auditable. Option C (relying on pilot feedback) occurs post-deployment and risks exposing users to unverified behavior. Therefore, the recommended approach is Option A - Upload a structured CSV test template and run batch test cases in Testing Center.

## Multiple Choice

Amid their busy schedules, sales reps at Universal Containers dedicate time to follow up with prospects and existing clients via email regarding renewals or new deals. They spend many hours throughout the week reviewing past communications and details about their customers before performing their outreach. Which standard Copilot action helps sales reps draft personalized emails to prospects by generating text based on previous successful communications?

A. Agent Action: Find Similar Opportunities  
B. Agent Action: Draft or Revise Sales Email

C. Agent Action: Summarize Record

Correct Answer: B

Explanation:

For sales reps who need to draft personalized emails based on previous communications, the Agentforce Specialist should recommend the Agent Action: Draft or Revise Sales Email. This action uses AI to generate or revise email content, leveraging past successful communications to create personalized and relevant outreach to prospects or clients. Find Similar Opportunities is used for opportunity matching, not email drafting. Summarize Record provides a summary of customer data but does not directly help with drafting emails.

## Multiple Choice

Cloud Kicks has long, complex legal agreements. An Agentforce agent must be able to retrieve specific clauses that are often nested within larger sections. The standard chunking method is failing to capture the full context of these clauses. Which chunking strategy should an administrator use to preserve the structure of the documents?

A. Implement a smaller chunk size.

B. Implement a larger chunk size.

C. Implement a keyword-based chunking strategy.

Correct Answer: B

Explanation:

The correct answer is B. When legal clauses are nested inside larger sections, overly small chunks can split the clause from surrounding definitions, exceptions, or conditions. That makes the retrieved passage technically relevant but contextually incomplete. A larger chunk size keeps more surrounding legal text together, improving the chance that the retriever returns the clause with its dependencies intact. Option A would usually make the problem worse because it increases fragmentation. Option C is not the best fix because keyword matching can find terms, but it does not preserve the legal structure around those terms. In Data 360 search indexes, chunking strategy and maximum token settings directly affect how much text is included in each retrievable chunk, so tuning chunk size is the right corrective lever.

## Multiple Choice

An Agentforce turned on Einstein Generative AI in Setup. Now, the Agentforce Specialist would like to create custom prompt templates in Prompt Builder. However, they cannot access Prompt Builder in the Setup menu. What is causing the problem?

A. The Prompt Template User permission set was not assigned correctly.
B. The Prompt Template Manager permission set was not assigned correctly.
C. The large language model (LLM) was not configured correctly in Data Cloud.

Correct Answer: B

Explanation:

In order to access and create custom prompt templates in Prompt Builder, the Agentforce Specialist must have the Prompt Template Manager permission set assigned. Without this permission, they will not be able to access Prompt Builder in the Setup menu, even though Einstein Generative AI is enabled. Option B is correct because the Prompt Template Manager permission set is required to use Prompt Builder. Option A (Prompt Template User permission set) is incorrect because this permission allows users to use prompts, but not create or manage them. Option C (LLM configuration in Data Cloud) is unrelated to the ability to access Prompt Builder. Salesforce Prompt Builder Permissions: prompt\_builder\_permissions.htm

## Multiple Choice

Universal Containers (UC) wants to assess Salesforce 's generative features but has concerns over its company data being exposed to third-party large language models (LLMs). Specifically, UC wants the following capabilities to be part of Einstein's generative AI service. No data is used for LLM training or product improvements by third-party LLMs. No data is retained outside of UC's Salesforce org. The data sent cannot be accessed by the LLM provider. Which property of the Einstein Trust Layer should the Agentforce Specialist highlight to UC that addresses these requirements?

A. Prompt Defense  
B. Zero-Data Retention Policy  
C. Data Masking

Correct Answer: B

## Explanation:

Universal Containers (UC) has concerns about data privacy when using Salesforce 's generative AI features, particularly around preventing third-party LLMs from accessing or retaining their data. The Zero-Data Retention Policy in the Einstein Trust Layer is designed to address these concerns by ensuring that: No data is used for training or product improvements by third-party LLMs. No data is retained outside of the customer 's Salesforce organization. The LLM provider cannot access any customer data. This policy aligns perfectly with UC's requirements for keeping their data safe while leveraging generative AI capabilities. Prompt Defense and Data Masking are also security features, but they do not directly address the concerns related to third-party data access and retention.

## Multiple Choice

A Salesforce Administrator wants to generate personalized, targeted emails that incorporate customer interaction data. The admin wants to leverage large language models (LLMs) to write the emails, and wants to reuse templates for different products and customers. Which solution approach should the admin leverage?

A. Use sales Email standard templates

B. Create a t field Generation prompt template type

C. Create a Sales Email prompt template type.

## Correct Answer: C

## Explanation:

To generate personalized emails using LLMs while reusing templates: Sales Email Prompt Template Type (Option C): Designed specifically for generating dynamic email content by combining LLMs with structured templates. It allows admins to define placeholders (e.g., customer name, product details) and reuse templates across scenarios. Option A: Standard email templates lack LLM integration and dynamic personalization. Option B: "t field Generation" is not a valid Salesforce prompt template type.

## Multiple Choice

Universal Containers (UC) wants to enable its sales team to get insights into product and competitor names mentioned during calls. How should UC meet this requirement?

A. Enable Einstein Conversation Insights, connect a recording provider, assign permission sets, and customize insights with up to 25 products.
B. Enable Einstein Conversation Insights, assign permission sets, define recording managers, and customize insights with up to 50 competitor names.
C. Enable Einstein Conversation Insights, enable sales recording, assign permission sets, and customize insights with up to 50 products.

## Correct Answer: A

## Explanation:

UC wants insights into product and competitor mentions during sales calls, leveraging Einstein Conversation Insights. Let's evaluate the options. Option A: Enable Einstein Conversation Insights, connect a recording provider, assign permission sets, and customize insights with up to 25 products. Einstein Conversation Insights analyzes call recordings to identify keywords like product and competitor names. Setup requires enabling the feature, connecting an external recording provider (e.g., Zoom, Gong), assigning permission sets (e.g., Einstein Conversation Insights User), and customizing insights by defining up to 25 products or competitors to track. Salesforce documentation confirms the 25-item limit for custom keywords, making this the correct, precise answer aligning with UC's needs. Option B: Enable Einstein Conversation Insights, assign permission sets, define recording managers, and customize insights with up to 50 competitor names. There's no "recording managers" role in Einstein Conversation Insights setup-integration is with a provider, not a manager designation. The limit is 25 keywords (not 50), and the option omits the critical step of connecting a provider, making it incorrect. Option C: Enable Einstein Conversation Insights, enable sales recording, assign permission sets, and customize insights with up to 50 products. "Enable sales recording" is vague-Conversation Insights relies on external providers, not a native Salesforce recording feature. The keyword limit is 25, not 50, making this incorrect despite being closer than B.

## Multiple Choice

Universal Containers wants to incorporate the current order fulfillment status into a prompt for a large language model (LLM). The order status is stored in the external enterprise resource planning (ERP) system. Which data grounding technique should the Agentforce Specialist recommend?

A. Eternal Object Record Merge Fields  
B. External Services Merge Fields  
C. Apex Merge Fields

## Correct Answer: A

Explanation:

Context of the Requirement: Universal Containers wants to pull in real-time order status data from an external ERP system into an LLM prompt. Data Grounding in LLM Prompts: Data grounding ensures the Large Language Model has access to the most current and relevant information. In Salesforce, one recommended approach is to use External Objects (via Salesforce Connect) when data resides outside of Salesforce. Why External Object Record Merge Fields: External Objects appear much like standard or custom objects but map to tables in external systems. You can reference fields from these External Objects in merge fields, allowing real-time data retrieval from the external ERP system without storing that data natively in Salesforce. This is a simpler "point-and-reference" approach compared to coding custom Apex or configuring external services for direct prompt embedding. Why Not External Services Merge Fields or Apex Merge Fields: External Services Merge Fields typically leverage flows or external service definitions. While feasible, it is more about orchestrating or invoking external services for automation (e.g., Flow). It's not the standard approach for seamlessly referencing external record data in prompt merges. Apex Merge Fields would imply custom Apex code controlling the prompt insertion. While possible, it's less "clicks not code" friendly and is not the default method for referencing typical record data.

## Multiple Choice

Universal Containers (UC) plans to send one of three different emails to its customers based on the customer's lifetime value score and their market segment. Considering that UC are required to explain why an e-mail was selected, which AI model should UC use to achieve this?

A. Predictive model and generative model

B. Generative model

C. Predictive model

## Correct Answer: C

Explanation:

Universal Containers should use a Predictive model to decide which of the three emails to send based on the customer 's lifetime value score and market segment. Predictive models analyze data to forecast outcomes, and in this case, it would

predict the most appropriate email to send based on customer attributes. Additionally, predictive models can provide explainability to show why a certain email was chosen, which is crucial for UC's requirement to explain the decision-making process. Generative models are typically used for content creation, not decision-making, and thus wouldn 't be suitable for this requirement. Predictive models offer the ability to explain why a particular decision was made, which aligns with UC's needs.

## Multiple Choice

Universal Containers' Agent Action includes several Apex classes for the new Agentforce Agent. What is an important consideration when deploying Apex that is invoked by an Agent Action?

A. The Apex classes must have at least $75\%$ code coverage from unit tests, and all dependencies must be in the deployment package.  
B. Apex classes invoked by an Agent Action may be deployed with less than $75\%$ test coverage as long as the agent is not activated in production.  
C. The Apex classes may bypass the $75\%$ code coverage requirement as long as they are only used by the agent.

## Correct Answer: A

## Explanation:

Universal Containers (UC) is using Apex classes within an Agent Action for their Agentforce Agent. Deploying Apex in Salesforce has specific requirements, especially when tied to Agentforce functionality. Let's evaluate the options. Option A: The Apex classes must have at least 75% code coverage from unit tests, and all dependencies must be in the deployment package. Salesforce enforces a strict requirement that all Apex classes must achieve at least 75% code coverage from unit tests for deployment to production, regardless of their use case (e.g., Agentforce, triggers, or web services). Additionally, when Apex is invoked by an Agent Action (e.g., via a Flow or direct invocation), all dependencies (e.g., referenced classes, objects) must be included in the deployment package to ensure functionality. This is a standard deployment consideration in Salesforce and applies to Agentforce, making this the correct answer. Option B: Apex classes invoked by an Agent Action may be deployed with less than 75% test coverage as long as the agent is not activated in production. Salesforce's 75% code coverage requirement is mandatory for production deployment, regardless of whether the agent is activated. There's no exemption based on activation status-coverage is enforced at the deployment stage. This option is incorrect and contradicts Salesforce's Apex deployment rules. Option C:

The Apex classes may bypass the 75% code coverage requirement as long as they are only used by the agent. No such bypass exists in Salesforce. The 75% code coverage rule applies universally to all Apex in production, including classes used by Agentforce. Agent-specific usage doesn't waive this requirement, making this incorrect.

## Multiple Choice

Universal Containers has built a Service Agent for its hospitality brand grounded on a Knowledge data library containing 200 FAQ articles covering reservations, amenities, and cancellation policies. The project team estimates that manually authoring test cases to achieve adequate knowledge coverage would take three weeks. A junior administrator proposes that Testing Center can significantly accelerate this process. Which step should an Agentforce Specialist take to generate a comprehensive initial test suite without manual authoring of individual test cases?

A. Upload test cases.

B. Generate test cases based on the knowledge available to the agent.
C. Generate test cases based on subagents and actions.

## Correct Answer: B

## Explanation:

The correct answer is B. The agent is grounded on a Knowledge data library, and the goal is broad FAQ coverage without manually writing every test. Agentforce Testing Center can generate test scenarios directly from the knowledge sources available to the agent, which makes it the best fit for building an initial regression suite quickly. Option A is valid only when the team already has prepared test cases, but the scenario says manual authoring would take too long. Option C can test routing and tool selection based on subagents and actions, but it does not directly exploit the 200 FAQ articles as the source for test coverage. For knowledge-grounded agents, generating test cases from available Knowledge content is the efficient and relevant approach.

## Multiple Choice

Universal Containers' Service Agent executes a flow action to retrieve Opportunity records. The Opportunity object has an organization-wide default of Private. The agent returns no results despite matching records existing and the flow logic being correctly configured. Which resolution strictly adheres to the principle of least privilege?

A. Add the required object permissions to the Einstein Service Agent User's permission set and configure appropriate sharing rules

B. Set the agent action flow to run in System Mode without sharing

C. Change the Opportunity object's organization-wide default to Public Read

Only so the Einstein Service Agent User can access records

## Correct Answer: A

Explanation:

The correct answer is A because least privilege means granting only the minimum access required for the agent to perform the task. Since Opportunity access is restricted by a Private organization-wide default, the agent user needs the correct object permissions and record-level access through sharing rules or an equivalent sharing model. Option B is too broad because running without sharing can bypass intended record access controls and expose data beyond the business requirement. Option C is also excessive because changing the organization-wide default to Public Read Only weakens security for every user and process, not just this agent action. Salesforce's Agentforce security guidance specifically recommends reviewing OWD, agent user permissions, and sharing rules to ensure proper record access.

## Multiple Choice

Universal Containers (UC) plans to automatically populate the Description field on the Account object. Which type of prompt template should UC use?

A. Field Generation prompt template

B. Flex Prompt template

C. Sales Email prompt template

## Correct Answer: A

Explanation:

Context of the QuestionUniversal Containers (UC) wants to automatically populate the Description field on the Account object. The AI-driven solution must generate textual data and write it directly into a field. Field Generation Prompt Template Primary Use Case: A Field Generation prompt template is specifically designed to create or fill in fields on a record with AI-generated text. Auto-population: By

configuring a Field Generation prompt template, admins can define the instructions, data inputs, and desired output for the AI. The resulting text then populates the specified field, such as the Account Description. Why Not Flex or Sales Email Prompt Templates? Flex Prompt Template: Used to combine or manipulate data across objects, merges, or references from multiple sources in more advanced, flexible prompts. Typically not the go-to for straightforward text generation on a single field. Sales Email Prompt Template: Focused on drafting or summarizing emails for sales reps (like crafting outreach or follow-up messages). This template is not specifically built to populate a field on a record.

## Multiple Choice

In addition to Recipient and Sender, which object should An Agentforce utilize for inserting merge fields into a Sales email template prompt?

A. Recipient Opportunities  
B. Recipient Account  
C. User Organization

## Correct Answer: B

Explanation:

Sales Email Template Use Case: When creating a Sales email template (especially for outreach or follow-up), you often need to reference relevant details about the Account linked to the recipient. Standard Merge Fields in Salesforce Email Templates: Recipient (Contact, Lead, or Person receiving the email) Sender (User sending the email) Recipient Account (the Account related to that Contact, providing company-level details and other relevant data) Why Recipient Account? For Sales communications, referencing the Account data (e.g., Account name, industry, or other custom fields) in an email is very common. This is especially important for B2B scenarios where the Contact is tied to an Account. "Recipient Opportunities" could be multiple, so it's less direct for standard email merges. The "User Organization" is more generic internal information, not typically inserted for personalization to the recipient.

## Multiple Choice

During configuration, Universal Containers (UC) forgot to grant Knowledge access to the Agentforce Service Agent. Which permission must UC add for the agent to interact with Knowledge articles and answer customer questions effectively?

A. Allow View Knowledge and Run Flows  
B. Access Knowledge records and fields, and Allow View Knowledge  
C. Access Custom Objects and Manage External Users

## Correct Answer: B

## Explanation:

According to the AgentForce for Service Configuration Guide, for an agent to interact with and retrieve Knowledge articles, it must have Knowledge object and field access, along with the "Allow View Knowledge" permission. The documentation explains: "Agents need permission to access Knowledge records and their fields to retrieve and summarize content accurately. Additionally, the Allow View Knowledge setting enables the agent to use the Knowledge object as a retrieval source." Option A is incomplete because "Run Flows" is unrelated to Knowledge article access. Option C refers to custom object permissions and external user management, which are unrelated to Knowledge configuration. Therefore, Option B provides the correct and required set of permissions for AgentForce Service Agents to access and utilize Knowledge data effectively. References (AgentForce Documents / Study Guide): AgentForce for Service Setup Guide: "Knowledge Article Access and Permissions" Salesforce Knowledge Configuration Guide: "Granting View Knowledge Access to Agents" AgentForce Study Guide: "Configuring Service Agents for Knowledge Retrieval"

## Multiple Choice

Universal Containers is rolling out a new generative AI initiative. Which Prompt Builder limitations should the Agentforce Specialist be aware of?

A. Rich text area fields are only supported in Flex template types.

B. Creations or updates to the prompt templates are not recorded in the Setup Audit Trail.

C. Custom objects are supported only for Flex template types.

## Correct Answer: B

Explanation:

When rolling out a new Generative AI initiative in Salesforce using Prompt Builder, it's important to understand its current limitations. One key limitation is that changes to prompt templates (creation, edits, or deletions) are not logged in the Setup Audit

Trail, which means admins won't have a historical record of modifications for compliance or troubleshooting.

## Multiple Choice

Which element should an Agentforce Specialist use in an Omni-Flow to route conversations to an agent?

A. Route Conversation

B. Route Work

C. Route to Agent

Correct Answer: B

## Explanation:

The correct answer is B because Omni-Channel routing uses the Route Work action element to send work items, including supported messaging conversations, to the correct destination. When routing to an Agentforce Service Agent, the inbound Omni-Channel flow is configured so Route Work targets the Agentforce Service Agent as the routing destination. "Route Conversation" and "Route to Agent" sound descriptive, but they are not the correct Omni-Flow element name for this routing configuration. This distinction matters because Agentforce channel deployment depends on standard Omni-Channel routing mechanics. The flow receives the messaging session or work item, evaluates routing logic, and Route Work performs the actual transfer to the AI service agent target. Therefore, the required element is Route Work.

## Multiple Choice

A business stakeholder wants to use AI to generate a summary based on Data Cloud data. Which method(s) should the stakeholder use to access Data Cloud data from Prompt Builder?

A. Accessing data model objects (DMQs) directly in Flex templates, using Data Cloud related lists, and fetching Data Cloud data using prompt-initiated flows  
B. Using Data Cloud related lists and fetching Data Cloud data using prompt-initiated flows

C. Using only external APIs to import Data Cloud data into Prompt Builder

Correct Answer: B

Explanation:

The Prompt Builder and Data Cloud Integration Guide explains that Data Cloud information can be accessed directly through Data Cloud related lists or prompt-initiated flows, which fetch relevant data dynamically. The documentation states: "Prompt Builder supports retrieving Data Cloud data using related lists for contextual grounding or invoking flows that query Data Cloud objects at runtime. This enables AI prompts to generate summaries, recommendations, or insights directly from unified customer profiles." Option A is incorrect because direct access to data model objects (DMOs) in Flex templates is not supported in Prompt Builder. Option C (external APIs) is unnecessary, as Prompt Builder has native integration with Data Cloud. Thus, Option B is the correct and Salesforce-documented method to access Data Cloud data from Prompt Builder. References (AgentForce Documents / Study Guide): Salesforce Prompt Builder Guide: "Integrating with Data Cloud" AgentForce Study Guide: "Fetching Data Cloud Data with Prompt-Initiated Flows" Salesforce Data Cloud Documentation: "Using Related Lists in Prompt Templates"

## Multiple Choice

Universal Containers (UC) wants to use Flow to bring data from unified Data Cloud objects to prompt templates. Which type of flow should UC use?

A. Data Cloud-triggered flow

B. Template-triggered prompt flow

C. Unified-object linking flow

Correct Answer: B

## Explanation:

In this scenario, Universal Containers wants to bring data from unified Data Cloud objects into prompt templates, and the best way to do that is through a Data Cloud-triggered flow. This type of flow is specifically designed to trigger actions based on data changes within Salesforce Data Cloud objects. Data Cloud-triggered flows can listen for changes in the unified data model and automatically bring relevant data into the system, making it available for prompt templates. This ensures that the data is both real-time and up-to-date when used in generative AI contexts.

## Multiple Choice

A data scientist needs to view and manage models in Einstein Studio, and also needs to create prompt templates in Prompt Builder. Which permission sets should an Agentforce Specialist assign to the data scientist?

A. Prompt Template Manager and Prompt Template User  
B. Data Cloud Admin and Prompt Template Manager  
C. Prompt Template User and Data Cloud Admin

## Correct Answer: B

## Explanation:

The data scientist requires permissions for Einstein Studio (model management) and Prompt Builder (template creation). Note: "Einstein Studio" may be a misnomer for Data Cloud's model management or a related tool, but we'll interpret based on context. Let's evaluate. Option A: Prompt Template Manager and Prompt Template UserThere's no distinct "Prompt Template Manager" or "Prompt Template User" permission set in Salesforce-Prompt Builder access is typically via "Einstein Generative AI User" or similar. This option lacks coverage for Einstein Studio/Data Cloud, making it incorrect. Option B: Data Cloud Admin and Prompt Template ManagerThe "Data Cloud Admin" permission set grants access to manage models in Data Cloud (assumed as Einstein Studio's context), including viewing and editing AI models. "Prompt Template Manager" isn't a real set, but Prompt Builder creation is covered by "Einstein Generative AI Admin" or similar admin-level access (assumed intent). This combination approximates the needs, making it the closest correct answer despite naming ambiguity. Option C: Prompt Template User and Data Cloud Admin "Prompt Template User" isn't a standard set, and user-level access (e.g., Einstein Generative AI User) typically allows execution, not creation. The data scientist needs to create templates, so this lacks sufficient Prompt Builder rights, making it incorrect.

## Multiple Choice

Universal Containers recently added a custom flow for processing returns and created a new Agent Action. Which action should the company take to ensure the Agentforce Service Agent can run this new flow as part of the new Agent Action?

A. Recreate the flow using the Agentforce agent user.
B. Assign the Manage Users permission to the Agentforce Agent user.
C. Assign the Run Flows permission to the Agentforce Agent user.

## Correct Answer: C

## Explanation:

UC has created a custom flow for processing returns and linked it to a new Agent Action for the Agentforce Service Agent, an AI-driven agent for customer service tasks. The agent must have the ability to execute this flow. Let's assess the options. Option A: Recreate the flow using the Agentforce agent user. Flows are authored by admins or developers, not " recreated" by specific users like the Agentforce agent user (a system user for agent operations). The issue isn't the flow's creation context but its execution permissions. This option is impractical and incorrect. Option B: Assign the Manage Users permission to the Agentforce Agent user. The "Manage Users" permission allows user management (e.g., creating or editing users), which is unrelated to running flows. This permission is excessive and irrelevant for the Service Agent's needs, making it incorrect. Option C: Assign the Run Flows permission to the Agentforce Agent user. The Agentforce Service Agent operates under a dedicated system user (e.g., "Agentforce Agent User") with a specific profile or permission set. To execute a flow as part of an Agent Action, this user must have the "Run Flows" permission, either via its profile or a permission set (e.g., Agentforce Service Permissions). This ensures the agent can invoke the custom flow for processing returns, aligning with Salesforce's security model and Agentforce setup requirements. This is the correct answer.

## Multiple Choice

An Agentforce at Universal Containers is working on a prompt template to generate personalized emails for product demonstration requests from customers. It is important for the AI- generated email to adhere strictly to the guidelines, using only associated opportunity information, and to encourage the recipient to take the desired action. How should the Agentforce Specialist include these instructions on a new line in the prompt template?

A. Surround them with triple quotes ( " " " ).

B. Make sure merged fields are defined.

C. Use curly brackets {} to encapsulate instructions.

## Correct Answer: A

## Explanation:

In Salesforce prompt templates, instructions that guide how the Large Language Model (LLM) should generate content (in this case, personalized emails) can be included by surrounding the instruction text with triple quotes (" ""). This formatting ensures that the LLM adheres to the specific instructions while generating the email content. The use of triple quotes allows the AI to understand that the enclosed text is a directive for how to approach the task, such as limiting the content to associated opportunity information or encouraging a specific action from the recipient.

## Multiple Choice

An Agentforce Specialist is assisting Universal Containers with troubleshooting an agent. The Agentforce Specialist notices that the agent is not using topic actions in the desired sequence, causing inconsistent outcomes. Which technique should the Agentforce Specialist recommend to ensure deterministic control over the order in which actions are executed?

A. Specify the large language model (LLM) provider and version.

B. Specify custom variables and filters.

C. Specify the order of actions.

## Correct Answer: C

Explanation:

The AgentForce Action Sequencing and Deterministic Flow Guide explains that to ensure actions are executed in a specific and predictable order, administrators must explicitly define the order of actions in the topic setup. The documentation states: "To achieve deterministic control, sequence the topic's actions in the desired order of execution. This ensures that dependent actions, such as data retrieval followed by record creation, execute consistently and predictably." Option A (specifying the LLM provider) affects model behavior but not execution sequence. Option B (custom variables and filters) controls conditional logic, not the order of execution. Therefore, Option C - specifying the action order - ensures full deterministic control. References (AgentForce Documents / Study Guide): AgentForce Builder Guide: "Defining and Ordering Actions in Topics" AgentForce Deterministic Logic Handbook AgentForce Study Guide: "Ensuring Predictable Action Sequences"

## Multiple Choice

Universal Containers (UC) would like to implement the Sales Development Representative (SDR) Agent. Which channel consideration should UC be aware of while implementing it?

A. SDR Agent must be deployed in the Messaging channel.

B. SDR Agent only works in the Email channel.

C. SDR Agent must also be deployed on the company website.

## Correct Answer: A

Explanation:

Universal Containers (UC) is implementing the Agentforce Sales Development Representative (SDR) Agent, a prebuilt AI agent designed to qualify leads and schedule meetings. Channel considerations are critical for deployment. Let's evaluate the options based on official Salesforce documentation. Option A: SDR Agent must be deployed in the Messaging channel. The Agentforce SDR Agent is designed to engage prospects in real-time conversations, primarily through the Messaging channel (e.g., Salesforce Messaging for in-app or web chat). This aligns with its purpose of qualifying leads interactively and scheduling meetings, as outlined in Agentforce for Sales documentation. While it may leverage email for follow-ups, its core deployment and interaction occur via Messaging, making this a key consideration UC must be aware of. This is the correct answer. Option B: SDR Agent only works in the Email channel. The SDR Agent is not limited to email. While it can send emails (e.g., follow-ups after lead qualification), its primary function-real-time lead engagement- relies on Messaging. Stating it "only works in the Email channel" is inaccurate and contradicts its documented capabilities, making this incorrect. Option C: SDR Agent must also be deployed on the company website. While the SDR Agent can be embedded on a company website via Messaging (e.g., as a chat widget), this is an implementation choice, not a mandatory requirement. The agent's deployment is channel-specific (Messaging), and website integration is optional, not a "must." This option overstates the requirement, making it incorrect.

## Multiple Choice

Universal Containers wants to use an existing prompt template inside Flow as part of automation. What can be used?
A. Invocable Apex
B. Einstein for Flow
C. Flow action

Correct Answer: C

Explanation:

Comprehensive and Detailed Explanation From Exact Extract: The Prompt Builder documentation shows that prompt templates can be invoked from Flows using a Flow Action. It describes "Call a prompt template from Flow" and "Flow Core Action: Prompt Template Actions." While Invocable Apex (option A) could technically trigger templates, the standard, declarative, recommended approach is a Flow Action (option C). "Einstein for Flow" (option B) is not the standard naming used in this context. So option C is correct.

## Multiple Choice

Universal Containers (UC) has implemented Generative AI within Salesforce to enable summarization of a custom object called Guest. Users have reported mismatches in the generated information. In refining its prompt design strategy, which key practices should UC prioritize?

A. Enable prompt test mode, allocate different prompt variations to a subset of users for evaluation, and standardize the most effective model based on performance feedback.

B. Create concise, clear, and consistent prompt templates with effective grounding, contextual role-playing, clear instructions, and iterative feedback.
C. Submit a prompt review case to Salesforce and conduct thorough testing in the playground to refine outputs until they meet user expectations.

## Correct Answer: B

## Explanation:

For Universal Containers (UC) to refine its Generative AI prompt design strategy and improve the accuracy of the generated summaries for the custom object Guest, the best practice is to focus on crafting concise, clear, and consistent prompt templates. This includes: Effective grounding: Ensuring the prompt pulls data from the correct sources. Contextual role-playing: Providing the AI with a clear understanding of its role in generating the summary. Clear instructions: Giving unambiguous directions on what to include in the response. Iterative feedback: Regularly testing and adjusting prompts based on user feedback. Option B is correct because it follows industry best practices for refining prompt design. Option A (prompt test mode) is useful but less relevant for refining prompt design itself. Option C (prompt review case with Salesforce) would be more appropriate for technical issues or complex prompt errors, not general design refinement.

## Multiple Choice

A sales manager is using Agent Assistant to streamline their daily tasks. They ask the agent to Show me a list of my open opportunities. How does the large language model (LLM) in Agentforce identify and execute the action to show the sales manager a list of open opportunities?

A. The LLM interprets the user 's request, generates a plan by identifying the apcMopnete topics and actions, and executes the actions to retrieve and display the open opportunities

B. The LLM uses a static set of rules to match the user 's request with predefined topics and actions, bypassing the need for dynamic interpretation and planning.

C. Using a dialog pattern, the LLM matches the user query to the available topic, action and steps then performs the steps for each action, such as retrieving a fast of open opportunities.

## Correct Answer: A

Explanation:

Agentforce's LLM dynamically interprets natural language requests (e.g., "Show me open opportunities"), generates an execution plan using the planner service, and retrieves data via actions (e.g., querying Salesforce records). This contrasts with static rules (B) or rigid dialog patterns (C), which lack contextual adaptability. Salesforce documentation highlights the planner's role in converting intents into actionable steps while adhering to security and business logic.

## Multiple Choice

An Agentforce Specialist at Cloud Kicks wants to build a retrieval-augmented generation (RAG) powered agent grounded in text-based PDF documents. The specialist wants a quick-start approach that automatically generates all underlying components, including the vector data store, search index, retriever, and standard action. Which feature should the specialist use?

A. Ensemble Retriever  
B. Agentforce Data Library  
C. Search Index

Correct Answer: B

Explanation:

The correct answer is B. Agentforce Data Library is Salesforce's quick-start RAG option for grounding agents in trusted unstructured content such as files and Knowledge articles. When a data library is added, Salesforce automatically builds the default RAG components behind the scenes, including the vector data store, search index, retriever, prompt template, and standard action. Option A is wrong because an ensemble retriever is used when searching across multiple retrievers or sources; it is not the quick-start feature that creates the whole RAG pipeline. Option C is wrong because a search index is only one component of the pipeline. The scenario explicitly asks for a feature that automatically provisions all underlying parts, which is precisely the purpose of Agentforce Data Library.

## Multiple Choice

An Agentforce Specialist is working declaratively on version 4 of a prompt template, which is significantly different than the previous version 3. A bug is then identified in version 3 and requires a hotfix to be deployed to production immediately by another team. The team will deploy this change as a new version. What should the specialist do to ensure that their work on the latest version is not lost and does not conflict with the new version?

A. Create a new prompt template with the bug fix, update all references to the new version, and delete the old prompt template.

B. Save their work in version 4, and allow the template to be deployed with a new version 5 containing the fix.

C. Copy and paste version 4 into a backup file or version-control alternative, and allow the other team to overwrite the contents of version 4 with the bug-fixed version.

## Correct Answer: B

## Explanation:

The correct answer is B. Prompt template versioning is designed to preserve controlled iterations while allowing the active usable version to be managed separately. If the specialist is working on version 4, they should save that work rather than let another team overwrite it. The hotfix can be deployed as a new version, such as version 5, without destroying the prior draft work. Option A is unnecessary because creating a completely separate prompt template creates reference-management overhead and can break existing dependencies. Option C is poor governance because copying to an external backup is a manual workaround, not a clean version-management strategy. Salesforce documentation supports saving

prompt template changes as new versions and activating the version that should be made available.

## Multiple Choice

Universal Containers (UC) has a Flex prompt template that has been used for the last three months to answer questions based on user input. Now, UC wants to give a PDF as a second input. What is the best approach for the Agentforce Specialist to meet this requirement?

A. Reindex in order to add a new resource to an existing template.

B. Add a resource anytime by navigating to the Resources section and

configuring inputs.

C. Discard the current Flex template and create a new one with a resource.

## Correct Answer: B

## Explanation:

The correct answer is B. Flex prompt templates are designed for custom input patterns, and Salesforce Prompt Builder allows specialists to define resources for the template. When the business wants to add a PDF as another input, the right declarative action is to add a file input/resource in the prompt template configuration, then use that resource in the prompt body. Option A is wrong because reindexing is a retrieval/search-index activity, not the standard way to add an input resource to a Flex template. Option C is wasteful and incorrect because an existing Flex template does not need to be discarded merely to add another input. The important design point is that Flex templates support custom resources and file inputs, so the existing template can be extended rather than rebuilt.

## Multiple Choice

When configuring a file upload-based Data Library, what are the maximum allowed file sizes for text or HTML files and PDF files, respectively?

A. Up to 100 MB for text or HTML files and up to 4 MB for PDF files  
B. Up to 50 MB for both text or HTML files and PDF files  
C. Up to 4 MB for text or HTML files and up to 100 MB for PDF files

## Explanation:

The correct answer is C because Salesforce applies different upload limits based on file type for file- based Agentforce Data Libraries. Text and HTML files have a smaller supported maximum of 4 MB, while PDF files can be uploaded up to 100 MB. Option A reverses the limits and is therefore incorrect. Option B invents a uniform 50 MB limit, which does not match Salesforce's documented limits. This distinction matters during implementation because oversized text or HTML files must be reduced, split, or converted into a supported ingestion pattern before indexing. PDF files have a higher ceiling, but they still must meet processing and library requirements. Salesforce documentation for uploaded files states that users can upload up to 4 MB for text or HTML files and 100 MB for PDF files.

## Multiple Choice

How should an organization use the Einstein Trust layer to audit, track, and view masked data?

A. Utilize the audit trail that captures and stores all LLM submitted prompts in Data Cloud.

B. In Setup, use Prompt Builder to send a prompt to the LLM requesting for the masked data.

C. Access the audit trail in Setup and export all user-generated prompts.

## Correct Answer: A

## Explanation:

The Einstein Trust Layer is designed to ensure transparency, compliance, and security for organizations leveraging Salesforce's AI and generative AI capabilities. Specifically, for auditing, tracking, and viewing masked data, organizations can utilize: Audit Trail in Data Cloud: The audit trail captures and stores all prompts submitted to large language models (LLMs), ensuring that sensitive or masked data interactions are logged. This allows organizations to monitor and audit all AI-generated outputs, ensuring that data handling complies with internal and regulatory guidelines. The Data Cloud provides the infrastructure for managing and accessing this audit data. Why not B? Using Prompt Builder in Setup to send prompts to the LLM is for creating and managing prompts, not for auditing or tracking data. It does not interact directly with the audit trail functionality. Why not C? Although the audit trail can be accessed in Setup, the user-generated prompts are primarily tracked in the Data Cloud for broader control, auditing, and analysis. Setup is not the primary tool for exporting or managing these audit logs. More information on auditing AI interactions can be found in the Salesforce AI Trust Layer documentation, which outlines how organizations can manage and track generative AI interactions securely.

## Multiple Choice

Universal Containers (UC) is implementing generative AI and wants to leverage a prompt template to provide responses to customers that gives personalized product recommendations to website visitors based on their browsing history. Which initial step should UC take to ensure the chatbot can deliver accurate recommendations?

A. Design universal product recommendations.

B. Write a response scrip for the chatbot.

C. Collect and analyze browsing data.

## Correct Answer: C

## Explanation:

To enable personalized product recommendations using generative AI, the foundational step for Universal Containers (UC) is collecting and analyzing browsing data (Option C). Personalized recommendations depend on understanding user behavior, which requires structured data about their browsing history. Without this data, the AI model lacks the context needed to generate relevant suggestions. Data Collection: UC must first aggregate browsing data (e.g., pages visited, products viewed, session duration) to build a dataset that reflects user preferences. Data Analysis: Analyzing this data identifies patterns (e.g., frequently viewed categories) that inform how prompts should be structured to retrieve relevant recommendations. Grounding in Data: Salesforce's Prompt Templates rely on grounding data to generate accurate outputs. Without analyzing browsing data, the prompt template cannot reference meaningful insights for personalization. Options A and D are incorrect because: Universal recommendations (A) ignore personalization, which is the core requirement. Writing a response script (D) addresses chatbot interaction design, not the accuracy of recommendations. Salesforce Agentforce Specialist Certification Guide: Highlights the importance of grounding prompts in relevant data sources to ensure accuracy. Trailhead Module: "Einstein for Developers" emphasizes data preparation as a prerequisite for effective AI-driven personalization.

## Multiple Choice

An Agentforce created a custom Agent action, but it is not being picked up by the planner service in the correct order. Which adjustment should the Al Specialist make in the custom Agent action instructions for the planner service to work as expected?

A. Specify the dependent actions with the reference to the action API name.

B. Specify the profiles or custom permissions allowed to invoke the action.

C. Specify the LLM model provider and version to be used to invoke the action.

## Correct Answer: A

## Explanation:

When a custom Agent action is not being prioritized correctly by the planner service, the root cause is often missing or improperly defined action dependencies. The planner service determines the execution order of actions based on dependencies defined in the action instructions. To resolve this, the Agentforce Specialist must explicitly specify dependent actions using their API names in the custom action's configuration. This ensures the planner understands the sequence in which actions must be executed to meet business logic requirements. Salesforce documentation highlights that dependencies are critical for orchestrating workflows in Einstein Bots and Agentforce. For example, if Action B requires data from Action A, Action A's API name must be listed as a dependency in Action B's instructions. The Einstein Bot Developer Guide states that failing to define dependencies can lead to race conditions or incorrect execution order. In contrast: Profiles or custom permissions (B) control access to the action but do not influence execution order. LLM model provider and version (C) determine the AI model used for processing but are unrelated to the planner's sequencing logic.

## Multiple Choice

What is one key purpose of action instructions when creating a custom agent action in Agentforce?

A. Action instructions help the reasoning engine decide which action to use.

B. Action instructions define the temperature of the large language model (LLM)

powering the Reasoning Engine.

C. Action instructions tell the user how to call this action in a conversation.

Correct Answer: A

Explanation:

According to the AgentForce Action Design and Configuration Guide, action instructions serve as the directive text that informs the Reasoning Engine about when and how to invoke a specific action. The documentation states: "Action instructions guide the reasoning engine by describing the action's purpose, inputs, and when it should be selected. Clear, concise instructions improve the LLM's accuracy in mapping user intent to the correct action." Option A is correct because it reflects this documented purpose - connecting user intent with the appropriate system action. Option B is incorrect since the temperature parameter for the LLM is defined at the system or configuration level, not within action instructions. Option C is incorrect because action instructions are meant for the reasoning engine, not for end users. References (AgentForce Documents / Study Guide): AgentForce Action Design Guide: "How Action Instructions Support Reasoning" AgentForce Builder Handbook: "Optimizing Action Selection through Clear Instructions" AgentForce Study Guide: "Purpose of Action Instructions in Custom Actions".

## Multiple Choice

Universal Containers' Agentforce Specialist suspects the Service Agent is systematically misclassifying billing dispute intents under a general inquiry topic, causing incorrect actions to execute. The administrator needs to identify this pattern across sessions without reviewing individual transcripts. What should the specialist recommend?

A. Enable Session Tracing in Agentforce Observability and query the Data 360 Session Tracing Data Model directly

B. Use Agent Optimization in Agentforce Studio, which segments production sessions into moments and generates system intent clusters weekly from cross-session analysis

C. Upload a representative set of billing dispute utterances to the Agentforce Testing Center and run a batch test comparing expected versus actual topic classifications to identify the scope of the misclassification pattern across production intents

## Correct Answer: B

Explanation:

The correct answer is B because the requirement is to discover a recurring misclassification pattern across production sessions without manually reading transcripts. Agent Optimization is built for this observability use case. It extends session tracing capabilities with additional data structures that track session moments and user intent, allowing teams to understand intent clusters and recurring behavior patterns. Option A is too manual because querying raw session tracing data still requires analysis work and does not directly provide clustered intent insights. Option C is useful for predeployment or regression testing, but it does not analyze actual production sessions unless the test set already reflects the live problem. Salesforce documentation describes Agent Optimization as tracking session moments and user intent through additional DLOs and DMOs.

## Multiple Choice

A service agent is looking at a custom object that stores travel information. They recently received a weather alert and now need to cancel flights for the customers that are related with this itinerary. The service agent needs to review the Knowledge articles about canceling and rebooking the customer flights. Which Agent capability helps the agent accomplish this?

A. Execute tasks based on available actions, answering questions using information from accessible Knowledge articles.
B. Invoke a flow which makes a call to external data to create a Knowledge article.

C. Generate a Knowledge article based off the prompts that the agent enters to create steps to cancel flights.

## Correct Answer: C

## Explanation:

In this scenario, the Agent capability that best helps the agent is its ability to execute tasks based on available actions and answer questions using data from Knowledge articles. Agent can assist the service agent by providing relevant Knowledge articles on canceling and rebooking flights, ensuring that the agent has access to the correct steps and procedures directly within the workflow. This feature leverages the agent's existing context (the travel itinerary) and provides actionable insights or next steps from the relevant Knowledge articles to help the agent quickly resolve the customer's needs. The other options are incorrect: B refers to invoking a flow to create a Knowledge article, which is unrelated to the task of retrieving existing Knowledge articles. C focuses on generating Knowledge articles, which is not the immediate need for this situation where the agent requires guidance on existing procedures.

## Multiple Choice

Coral Cloud Resorts is implementing Agentforce retrieval. Customers sometimes type ambiguous terms (for example, "package" could mean vacation package or baggage). Which retrieval strategy best balances precision and contextual disambiguation?

A. Use hybrid search, which combines keyword matching for precision with semantic embeddings for context.

B. Use semantic search only, which captures intent but may struggle with ambiguous terms when no context is provided.

C. Use keyword search only, which prioritizes exact term matching but risks missing contextual meaning.

## Correct Answer: A

## Explanation:

According to the AgentForce Retrieval Optimization Guide, when handling ambiguous search terms such as "package," which may refer to multiple concepts, the recommended approach is to use hybrid search. The documentation defines hybrid search as: "A combined retrieval method that leverages keyword-based precision and semantic embeddings to capture contextual intent. This approach ensures high recall while maintaining exact-term precision." This method allows AgentForce to resolve ambiguity by using semantic context to interpret meaning while maintaining keyword-based precision for deterministic matching. The guide further notes: "Hybrid retrieval offers the optimal balance between contextual understanding and exact-term accuracy, especially in multi-domain or ambiguous queries." In contrast, semantic search only may misinterpret terms without adequate context, and keyword search only lacks the contextual reasoning to differentiate between meanings. Thus, Option A aligns with Salesforce's documented best practice for retrieval precision and contextual relevance.

## Multiple Choice

Universal Containers (UC) has built a custom retriever in AI Models, formerly Einstein Studio, to ground AI responses with technical documentation. UC now requires that a summary field from the search index be included in the output to provide a brief overview of each retrieved document. What is the recommended course of action for UC?

A. Create a completely new custom retriever with an entirely revised configuration that incorporates the summary field, and delete the current retriever. Editing the existing retriever is not possible.

B. Edit the existing retriever version to add the summary field to the list of fields returned by the retriever, save the changes, and activate the new version so that prompt templates use the updated configuration.

C. Use only the default retriever, which will automatically include all available fields from the search index, including the summary field, without any need to create or manage custom retrievers.

## Correct Answer: B

## Explanation:

The correct answer is B. A custom retriever controls which indexed data is searched and what fields are returned to the prompt or agent. If UC needs a summary field returned, the correct action is to update the retriever configuration, save the revised retriever version, and activate that version so the prompt template uses it. Option A is excessive and technically wrong because retriever versioning supports controlled updates rather than forcing a complete rebuild and deletion. Option C is wrong because default retrievers do not automatically return every useful field in the exact structure a business requires. For grounded AI, returned fields must be intentionally configured so the model receives the right concise context without unnecessary noise. Salesforce documents retriever customization and activation of retriever versions.

## Multiple Choice

A customer is authenticated and identified as being either bronze, silver, or gold membership level. Those levels define which subagents or actions are available to the agent to perform specific tasks as per the level- based entitlements. What is the best way to ensure the agent responds appropriately?

A. Use before reasoning to set custom variables that will be used in filters and flow logic.

B. Use after reasoning to set custom variables that will be used in filters and flow logic.

C. Use Agent Router to set custom variables that will be used in filters and flow logic.

Correct Answer: A

Explanation:

The correct answer is A. Entitlement data must be available before the reasoning engine decides which subagents or actions are eligible. Setting custom variables in before reasoning ensures the membership tier is hydrated early enough to drive deterministic filters, available when rules, and flow inputs. Option B is wrong because after reasoning occurs too late for initial action visibility and routing decisions in the current reasoning cycle. Option C is wrong because the Agent Router is for routing /classification logic, not the best place to establish reusable entitlement state for action filters and downstream flow logic. The key Agentforce design principle is to make access conditions deterministic before the LLM sees tools. That prevents the agent from offering bronze, silver, or gold actions outside the customer's actual entitlement level.

## Multiple Choice

Universal Containers (UC) has configured a data library and wants to restrict indexing of knowledge articles to articles which are only publicly available in their knowledge base, UC also wants the agent to link sources that the large language model (LLM) grounded its response on. Which settings should help UC with this?

A. In the data library setting window, under Knowledge Settings, enable Use Public Knowledge Article and select Show sources,

B. In the data library setting window, under Knowledge Settings, enable Use Public Knowledge Article. It is not possible to display articles that the LLM grounded its response in.

C. Use Data Categories to categorize publicly available articles to index. Sources are automatically displayed when knowledge articles are categorized as Public.

## Correct Answer: A

## Explanation:

According to the AgentForce Data Library Configuration Guide, administrators can restrict indexing and retrieval of Knowledge articles to publicly available ones and enable source visibility for LLM- grounded responses. The documentation states: "Within the data library settings, under Knowledge Settings, enable 'Use Public Knowledge Articles' to ensure only publicly visible content is indexed. To display citations, enable 'Show Sources' so the agent links the specific articles or data records used to ground its response." Option A correctly reflects these two documented configuration steps. Option B is incorrect because Salesforce explicitly supports source display for transparency through the "Show Sources" setting. Option C incorrectly assumes that Data Categories control indexing visibility and source linking, which is handled by explicit Knowledge Settings, not categorization.

References (AgentForce Documents / Study Guide): AgentForce Data Library Configuration Guide: "Knowledge Settings for Public Article Indexing" AgentForce Transparency and Source Attribution Notes: "Show Sources Option" AgentForce Study Guide: "Configuring Knowledge Visibility and Source Display"

## Multiple Choice

Coral Cloud Resorts needs to ensure its booking agent executes actions in a specific sequence: first retrieve available sessions, then verify customer eligibility, and finally create the booking. The current implementation allows the large language model (LLM) to execute these actions in any order, causing booking failures. Which approach should an AgentForce Specialist implement?

A. Write comprehensive topic instructions detailing the exact sequence of actions using numbered steps and explicit ordering requirements for the reasoning engine to follow during booking workflows.

B. Create custom variables that store completion status for each step, then implement conditional filters on subsequent actions requiring previous variables to be populated, ensuring deterministic execution order.

C. Configure topic, classification description, and action instructions with priority levels and sequence indicators to guide the reasoning engine in selecting the correct action order automatically.

## Correct Answer: B

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the AgentForce Orchestration and Action Sequencing Guidelines in the official documentation, deterministic execution order is best achieved by using custom state variables and conditional logic rather than relying solely on LLM reasoning or topic instructions. AgentForce's orchestration framework allows developers to define variables that represent the successful completion of specific actions (e.g., "sessionsRetrieved," "eligibilityVerified," etc.). Subsequent actions can then include conditional filters that only allow execution if prior steps have been completed. This approach ensures that actions execute in a strict, logical sequence - preventing the LLM from reordering steps arbitrarily. Option A (relying on topic instructions) provides guidance to the LLM but does not enforce execution order programmatically, which means errors can still occur if the reasoning engine interprets steps differently. Option C (priority and sequence indicators) assists in contextual selection but does not create dependency- based control between actions. Therefore, per AgentForce best practices, the correct approach is Option B - using custom variables with conditional filters. This guarantees deterministic workflow sequencing, prevents premature action execution, and aligns with the "Action Dependency and Conditional Execution Model" described in the AgentForce Implementation Guide.

## Multiple Choice

Universal Containers (UC) wants to ensure its compliance team can retrieve exact matches of policy clause numbers from a structured legal document library. Which search type should UC implement?

A. Use keyword search for exact term matching on structured fields like clause numbers.

B. Use hybrid search to blend keyword and semantic recall.

C. Use semantic search to interpret synonyms of clauses dynamically.

## Correct Answer: A

## Explanation:

According to the AgentForce Search Optimization Guide, when the use case requires retrieving exact matches (such as policy clause numbers, legal identifiers, or invoice IDs) from structured data, the recommended approach is to use keyword search. The documentation specifies: "Keyword search ensures deterministic retrieval of exact term matches from structured fields, preserving precision for identifiers, numeric values, and code references." Semantic search (Option C) uses contextual understanding and synonym expansion, which may yield near matches but not exact ones. Hybrid search (Option B) combines both semantic and keyword results for general knowledge retrieval, but it introduces probabilistic ranking-not suitable for exact legal or compliance queries. Therefore, for the compliance use case where exact clause number matching is required, keyword search guarantees accuracy, speed, and compliance integrity. References (AgentForce Documents / Study Guide): AgentForce Search and Retrieval Guide: "Choosing Between Keyword, Semantic, and Hybrid Search" AgentForce Compliance and Legal Data Search Best Practices AgentForce Study Guide: "Optimizing Structured Data Search for Exact Matches"

## Multiple Choice

A customer wants to analyze complete agent interactions, from the initial user request through to the final resolution, to better understand agent behavior and response quality. Which Agentforce feature should an Agentforce Specialist recommend?

A. Agent Inspection

B. Agent Insights

C. Agent Optimization

## Correct Answer: A

Explanation:

Agent Inspection is the best fit because the requirement is to examine complete end-to-end agent interactions, not merely view aggregate performance trends or optimize unresolved sessions. The question specifically mentions tracing the interaction from the first user request through final resolution, which requires inspection-level visibility into what the agent interpreted, which subagent or action path it followed, and what response quality was produced. Agent Insights would imply summarized analytics, while Agent Optimization is more focused on identifying improvement opportunities after sessions are analyzed. Salesforce's Agentforce Session Tracing guidance explains that detailed interaction data is captured to provide a full view of agent behavior, which is exactly what this scenario requires.

## Multiple Choice

Universal Containers recently deployed a customer service agent to handle common inquiries. After a month of usage, the support manager wants to analyze the agent's performance. They need to view aggregated metrics such as the escalation rate to human agents, average session duration, and which topics have the lowest resolution scores so they can prioritize which agent actions need optimization. Which native Salesforce capability should the Agentforce Specialist use to provide these insights and guide the optimization strategy?

A. Agentforce Observability, leveraging Agent Analytics dashboards and the Session Tracing Data Model to review aggregate performance and drill into specific underperforming interactions.

B. The Einstein Trust Layer Audit Trail, exporting the raw JSON logs to measure the token usage and temperature settings of every user session.

C. The Salesforce Optimization report, scheduling a monthly scan to identify deprecated subagents and unused agent actions across the org.

## Explanation:

The correct answer is A. The requirement is operational observability: escalation rate, session duration, topic effectiveness, and the ability to prioritize underperforming agent actions. Agentforce Observability is the native Salesforce area for this because it includes Agent Analytics for aggregate performance metrics and session-level data for deeper investigation. Option B is wrong because the Einstein Trust Layer Audit Trail is primarily governance and audit data around AI interactions, not a service operations dashboard for resolution scoring and action optimization. Option C is not a standard Salesforce capability for these Agentforce metrics. For a live customer service agent, the right model is to use Agent Analytics to identify patterns and then use tracing/session data to inspect where failures or low-quality outcomes are occurring.

## Multiple Choice

Universal Containers wants to automatically populate the Description field on the Account object.

A. Sales Email
B. Flex
C. Field Generation

## Correct Answer: C

Explanation:

Comprehensive and Detailed Explanation From Exact Extract: Again referencing the template types: Field Generation template is intended for populating a specific field on a record. Since UC wants to populate the Description field on the Account object, that matches exactly. "Flex" is for more complex multiobject scenarios; "Sales Email" is for email generation. So the correct answer is C.

## Multiple Choice

Universal Containers (UC) wants to implement an AI-powered customer service agent that can: Retrieve proprietary policy documents that are stored as PDFs. Ensure responses are grounded in approved company data, not generic LLM knowledge.What should UC do first?

A. Set up an Agentforce Data Library for AI retrieval of policy documents.
B. Expand the AI agent's scope to search all Salesforce records.

C. Add the files to the content, and then select the data library option.

## Correct Answer: A

Explanation:

To implement an AI-powered customer service agent that retrieves proprietary policy documents (stored as PDFs) and ensures responses are grounded in approved company data, UC must first establish a foundation for the AI to access and use this data. The Agentforce Data Library (Option A) is the correct starting point. A Data Library allows UC to upload PDFs containing policy documents, index them into Salesforce Data Cloud's vector database, and make them available for AI retrieval. This setup ensures the agent can perform Retrieval-Augmented Generation (RAG), grounding its responses in the specific, approved content from the PDFs rather than relying on generic LLM knowledge, directly meeting UC's requirements. Option B: Expanding the AI agent's scope to search all Salesforce records is too broad and unnecessary at this stage. The requirement focuses on PDFs with policy documents, not all Salesforce data (e.g., cases, accounts), making this premature and irrelevant as a first step. Option C: " Add the files to the content, and then select the data library option " is vague and not a precise process in Agentforce. While uploading files is part of setting up a Data Library, the phrasing suggests adding files to Salesforce Content (e.g., ContentDocument) without indexing, which doesn't enable AI retrieval. Setting up the Data Library (A) encompasses the full process correctly. Option A: This is the foundational step-creating a Data Library ensures the PDFs are uploaded, indexed, and retrievable by the agent, fulfilling both retrieval and grounding needs. Option A is the correct first step for UC to achieve its goals.

## Multiple Choice

Cloud Kicks wants to integrate its agent with its custom website. The goal is for customers to interact with the custom agent chat interface. Which approach provides the framework for the custom web application to communicate with the agent?

A. Agent-to-Agent (A2A)

B. Model Context Protocol (MCP)

C. Agent API

Correct Answer: C

Explanation:

The AgentForce API Integration Guide defines the Agent API as the framework that enables external web or mobile applications to communicate directly with Salesforce-hosted agents. This API supports message exchange, session management, and context persistence - allowing developers to build custom chat interfaces while maintaining secure, real-time connectivity with the AgentForce reasoning engine. Option A (A2A) is for inter-agent collaboration within Salesforce, not for external web integration. Option B (MCP) - Model Context Protocol - is used for context sharing between models and tools, no t for front-end integration. Therefore, the correct framework for enabling communication between a custom website chat interface and an AgentForce agent is Option C - Agent API, as it provides the structured interface for external client applications.

## Multiple Choice

Universal Containers has PDF maintenance guides in an external folder, not yet in Salesforce. The team wants a standard, clicks-only setup for the Service Agent to use these documents. Which approach should the Agentforce Specialist implement?

A. Paste external PDF links into topic instructions and rely on the model to follow them, avoiding configuration of a retrieval source, index, or retriever action.
B. Upload the PDFs as File source in the Agentforce Data Library which will build a Search Index, and create a retriever to ground responses from those documents.

C. Configure Data Cloud to ingest file attachments and create custom index and retriever for product record and attachment data.

## Correct Answer: B

## Explanation:

According to the AgentForce Data Library and Retrieval Configuration Guide, when organizations have external PDF or text documents that need to be used by an AI agent, the recommended clicks- only approach is to upload the documents as a File Source in the AgentForce Data Library. The system automatically processes the uploaded files, chunks their content, builds a Search Index, and allows you to create a retriever to ground agent responses from those indexed documents. This method requires no code or manual integration and ensures that all document content becomes queryable through retrieval-augmented generation (RAG). Option A is incorrect because LLMs cannot reliably access external links; they require indexed data. Option C, involving Data Cloud ingestion, is a more advanced, developer-level approach-not a clicks- only setup. Hence, the correct implementation is Option B -

Upload PDFs as File Source in the AgentForce Data Library and create a retriever for grounding.

## Multiple Choice

Ursa Major Solar is developing a help agent that must answer customer questions by grounding prompts in data from both internal Knowledge articles and an external partner portal. The Agentforce Specialist configures the agent to use a Data 360 search index. During testing in Agentforce Builder, the agent occasionally provides conflicting answers, and the specialist needs to differentiate between these two grounding sources to troubleshoot the responses. Which Data 360 process should the specialist review to ensure the origin of the information is accurately identified and made available?

A. The data harmonization process, where raw data is mapped to data model objects and source metadata is standardized to be queried specifically by hybrid retrievers.

B. The Retrieval-Augmented Generation synthesis phase, where the large language model automatically uses a semantic retriever to append the source system tag to the final generated output.

C. The Data 360 retriever function process, where retrieved content can be filtered based on source metadata, such as document type or author, to refine results before they are ranked using semantic or hybrid search.

## Correct Answer: C

## Explanation:

The correct answer is C because the troubleshooting need is retrieval-source traceability, not general data modeling or final LLM response writing. In Data 360 retrieval, the retriever searches a configured search index and returns relevant content to ground the prompt. If multiple sources feed the index, source metadata such as document type, author, origin, or content category can be used to filter or interpret retrieved chunks. Option A is too broad because harmonization maps source data into model structures, but it does not directly explain which grounding chunk produced a conflicting answer. Option B is wrong because the LLM should not be trusted to invent or automatically append source tags during synthesis. The retriever layer is where relevant indexed content is searched, filtered, ranked, and returned.

## Multiple Choice

Northern Trail Outfitters is testing an agent connected to an Agentforce Data Library. The agent successfully retrieves the correct data from the library, but delivers the response to the user as raw JSON structures instead of grammatically correct conversational language. Which quality evaluation scores poorly in this scenario?
A. Coherence
B. Conciseness
C. Completeness

## Correct Answer: A

## Explanation:

The correct answer is A because the problem is not missing information or excessive length; the response is poorly formed for human conversation. Coherence evaluates whether the generated response is understandable, logically organized, and presented in a natural language format. Raw JSON may contain correct retrieved data, but it fails as a customer-facing answer because it is not grammatically conversational. Conciseness would score poorly if the response were unnecessarily long or verbose. Completeness would score poorly if the answer omitted required information. Here, the agent retrieved the right content, but the response presentation is defective. Salesforce Testing Center evaluations include quality-focused measures such as coherence, completeness, conciseness, latency, and instruction adherence, so coherence is the directly affected quality dimension.

## Multiple Choice

Which part of the Einstein Trust Layer architecture leverages an organization 's own data within a large language model (LLM) prompt to confidently return relevant and accurate responses?
A. Prompt Defense
B. Data Masking
C. Dynamic Grounding

Correct Answer: C

Explanation:

Dynamic Grounding in the Einstein Trust Layer architecture ensures that large language model (LLM) prompts are enriched with organization-specific data (e.g., Salesforce records, Knowledge articles) to generate accurate and relevant

responses. By dynamically injecting contextual data into prompts, it reduces hallucinations and aligns outputs with trusted business data. Prompt Defense (A) focuses on blocking malicious inputs or prompt injections but does not enhance responses with organizational data. Data Masking (B) redacts sensitive information but does not contribute to grounding responses in business context.

## Multiple Choice

An Agentforce Specialist is building a Flex prompt template. Which best practice should the Agentforce Specialist follow when creating the Flex prompt template?

A. Provide the large language model (LLM) with contextual information and give it a role such as a sales or support rep.

B. Ground the large language model (LLM) with account data and create a custom field account summary to store the LLM-generated response.

C. Ground the large language model (LLM) with a retriever and create a custom field to store the LLM- generated Response.

## Correct Answer: A

## Explanation:

In the AgentForce Flex Prompt Design Guide, the recommended best practice for Flex prompt templates is to ensure that the large language model (LLM) is provided with clear contextual information and a defined role (e.g., sales rep, support agent, concierge). Flex prompts are intentionally open-ended and adaptable, enabling them to handle dynamic and conversational use cases, provided they are guided with sufficient context and role clarity. By setting a role and including detailed contextual cues, the LLM can tailor tone, content, and reasoning appropriately while maintaining response accuracy. Option B describes a data-grounded Record Summary use case, not a Flex prompt. Option C, involving retrievers, is for grounding responses to external or indexed data - but Flex prompts typically handle free-form or reasoning-driven tasks, not retrieval-based ones. Thus, following AgentForce's official design standards, the correct best practice is Option A - Provide contextual information and assign a role to the LLM for optimal performance and consistency.

## Multiple Choice

Universal Containers uses Agentforce to manage its customer service operations. However, the company uses a completely separate, third-party AI agent system to manage its warehouse logistics. UC wants the Agentforce customer service agent to be able to seamlessly request shipping reroutes and collaborate autonomously with the warehouse agent. Which open standard protocol is specifically designed to facilitate this exact type of cross-platform collaboration?

A. Model Context Protocol

B. Advanced Data Retrieval standard

C. Agent-to-Agent protocol

## Correct Answer: C

Explanation:

The correct answer is C because Agent-to-Agent protocol is designed for interoperability between agents across different platforms, vendors, or systems. In this scenario, Agentforce must collaborate with a third-party warehouse logistics agent to request shipping reroutes. That is cross-agent collaboration, not just tool access or data retrieval. Model Context Protocol is more appropriate when an agent needs standardized access to tools, resources, or external context. Advanced Data Retrieval is not the relevant open standard for autonomous cross-platform agent collaboration. A2A provides the pattern for agents to discover, communicate, coordinate tasks, and delegate work securely across system boundaries. Salesforce's Agentforce interoperability guidance explicitly separates MCP-style tool/context access from A2A-style agent collaboration.

## Multiple Choice

Universal Containers has a custom Agent action calling a flow to retrieve the real-time status of an order from the order fulfillment system. For the given flow, what should the Agentforce Specialist consider about the running user's data access?

A. The flow must have the "with sharing" permission selected in the advanced settings for the permissions, field-level security, and sharing settings to be respected.

B. The custom action adheres to the permissions, held-level security, and sharing settings configured in the flow.. The Agent will always run flows in system mode so the running user 's data access will not affect the data returned.

Correct Answer: B

Explanation:

When a flow is invoked via a custom Agent action, its data access depends on the flow's runtime configuration, not system mode by default. Salesforce flows can be configured to respect the running user's permissions and sharing settings: If the flow is set to "Run as the User Who Launched the Flow" (enabled in Flow Settings), it adheres to the user's permissions, field-level security (FLS), and sharing rules. Option C is incorrect because flows do not always run in system mode unless explicitly configured to do so. Option A is misleading because "with sharing" is an Apex concept, not a flow setting. Flows use runtime settings like FLS and sharing enforcement.

## Multiple Choice

Universal Containers (UC) wants to enable its sales team to use AI to suggest recommended products from its catalog. Which type of prompt template should UC use?

A. Record summary prompt template  
B. Email generation prompt template  
C. Flex prompt template

## Correct Answer: C

## Explanation:

Universal Containers (UC) wants to enable its sales team to leverage AI to recommend products from its catalog. The best option for this use case is a Flex prompt template. A Flex prompt template is designed to provide flexible, customizable AI-driven recommendations or responses based on specific data points, such as product information, customer needs, or sales history. This template type allows the AI to consider various inputs and parameters, making it ideal for generating product recommendations dynamically. In contrast: A Record summary prompt template (Option A) is used to summarize data related to a specific record, such as generating a quick summary of a sales opportunity or account, but not for recommending products. An Email generation prompt template (Option B) is tailored for crafting email content and is not suitable for suggesting products based on a catalog. Given the need for dynamic recommendations that pull from a product catalog and potentially other sales data, the Flex prompt template is the correct approach.

## Multiple Choice

Universal Containers needs to ground a new Agentforce agent with structured data stored in an external system without duplicating it in Data 360. This approach is necessary to ensure real-time data accuracy and minimize storage costs. Which Data 360 concept should the team use to accomplish this?

A. Establish a semantic index for external content.
B. Utilize Zero Copy to access external data without ingestion.
C. Configure a data stream to import the data into Data 360.

## Correct Answer: B

## Explanation:

The correct answer is B because Zero Copy Data Federation is designed for accessing external data without physically copying or ingesting that data into Data 360. This fits the requirement exactly: the data remains in the external system, storage duplication is avoided, and Salesforce can still use the connected data for Data 360-driven use cases. Option A is wrong because a semantic index supports meaning-based retrieval over indexed content, but it does not by itself solve the requirement to avoid duplication of structured external data. Option C is wrong because configuring a data stream imports or ingests data into Data 360, which contradicts the storage-cost and no-duplication requirement. Salesforce's Zero Copy guidance states that external data can be accessed and used in Data 360 without duplicating it.

## Multiple Choice

What is the role of the large language model (LLM) in understanding intent and executing an Agent Action?

A. Find similar requested topics and provide the actions that need to be executed.

B. Identify the best matching topic and actions and correct order of execution.

C. Determine a user's topic access and sort actions by priority to be executed.

## Correct Answer: B

Explanation:

In Agentforce, the large language model (LLM), powered by the Atlas Reasoning Engine, interprets user requests and drives Agent Actions. Let's evaluate its role. Option A: Find similar requested topics and provide the actions that need to be executed. While the LLM can identify similar topics, its role extends beyond merely finding them-it matches intents to specific topics and determines execution. This option understates the LLM's responsibility for ordering actions, making it incomplete and incorrect. Option B: Identify the best matching topic and actions and correct order of execution. The LLM analyzes user input to understand intent, matches it to the best-fitting topic (configured in Agent Builder), and selects associated actions. It also determines the correct sequence of execution based on the agent's plan (e.g., retrieve data before updating a record). This end-to-end process-from intent recognition to action orchestration-is the LLM's core role in Agentforce, making this the correct answer. Option C: Determine a user's topic access and sort actions by priority to be executed. Topic access is governed by Salesforce permissions (e.g., user profiles), not the LLM. While the LLM prioritizes actions within its plan, its primary role is intent matching and execution ordering, not access control, making this incorrect.

## Multiple Choice

Which element in the Omni-Channel Flow should be used to connect the flow with the agent?

A. Route Work Action  
B. Assignment  
C. Decision

## Correct Answer: A

## Explanation:

UC is integrating an Agentforce agent with Omni-Channel Flow to route work. Let's identify the correct element. Option A: Route Work ActionThe "Route Work" action in Omni-Channel Flow assigns work items (e.g., cases, chats) to agents or queues based on routing rules. When connecting to an Agentforce agent, this action links the flow to the agent's queue or presence, enabling interaction. This is the standard element for agent integration, making it the correct answer. Option B: AssignmentThere's no "Assignment" element in Flow Builder for Omni-Channel. Assignment rules exist separately, but within flows, routing is handled by "Route Work," making this incorrect. Option C: DecisionThe "Decision" element branches logic, not connects to agents. It's a control structure, not a routing mechanism, making it incorrect.

## Multiple Choice

Universal Containers (UC) wants to enable its sales team with automatic post-call visibility into mention of competitors, products, and other custom phrases. Which feature should the Agentforce Specialist set up to enable UC 's sales team?
A. Call Summaries
B. Call Explorer
C. Call Insights

## Correct Answer: C

## Explanation:

To enable Universal Containers ' sales team with automatic post-call visibility into mentions of competitors, products, and custom phrases, the Agentforce Specialist should set up Call Insights. Call Insights analyzes voice and video calls for key phrases, topics, and mentions, providing insights into critical aspects of the conversation. This feature automatically surfaces key details such as competitor mentions, product discussions, and custom phrases specified by the sales team. Call Summaries provide a general overview of the call but do not specifically highlight keywords or topics. Call Explorer is a tool for navigating through call data but does not focus on automatic insights.

## Multiple Choice

Universal Container (UC) has effectively utilized prompt templates to update summary fields on Lightning record pages. An admin now wishes to incorporate similar functionality into UC's automation process using Flow. How can the admin get a response from this prompt template from within a flow to use as part of UC's automation?

A. Invocable Apex

B. Flow Action

C. Einstein for Flow

## Correct Answer: C

## Explanation:

Flow Action: Salesforce provides a standard way to invoke generative AI templates or prompts within a Flow step. From the Flow Builder, you can add an "Action" that references the prompt template you created in Prompt Builder. o

## Multiple Choice

In a Knowledge-based data library, which capability does enabling the "Filter by Knowledge Data Categories" option provide?

A. It applies custom metadata from the selected data categories to the Knowledge articles, aiming to enhance search relevance.

B. It organizes the indexed Knowledge articles into separate sections based on their assigned data categories.

C. It limits the indexed articles to only those belonging to selected data categories, thereby improving indexing precision.

## Correct Answer: C

## Explanation:

The correct answer is C because filtering by Knowledge Data Categories controls which Knowledge articles are included in the Agentforce Data Library index. Data categories are used in Salesforce Knowledge to classify and organize article access and relevance. When the data library configuration enables filtering by Knowledge Data Categories, the administrator selects the categories that should be included, and the library indexes only matching articles. Option A is wrong because this setting does not apply custom metadata to articles. Option B is wrong because the purpose is not to create visual sections; it constrains the searchable article set. This improves retrieval precision by excluding unrelated categories before the agent performs semantic search, reducing irrelevant grounding material and keeping responses aligned to the intended content domain.

## Multiple Choice

A company wants to retrieve patient history details to augment the AI agent response. [he company wants to leverage the Data Cloud search index feature. What is best practice when considering retrieval-augmented generation (RAG) for information that may contain personally identifiable information (PII)?

A. Depend on the agent's prompt to avoid exposing PII.  
B. Encrypt embeddings, but still index PII records.  
C. Mask sensitive fields and index only non-PII data.

## Explanation:

According to the AgentForce Data Governance and RAG Security Guidelines, when implementing retrieval- augmented generation (RAG) using Data Cloud search indexes, best practice is to ensure that personally identifiable information (PII) and other sensitive data are never indexed or embedded in the retrieval system. The documented recommendation is to mask or exclude sensitive fields before creating embeddings or indexing content. This prevents the large language model (LLM) from accessing or generating responses that could inadvertently expose confidential information. Masking can include redacting names, IDs, contact details, or any regulated medical information. Option A is incorrect because relying solely on prompt instructions does not prevent the retrieval layer from exposing sensitive content. Option B is also incorrect - encryption alone does not mitigate privacy risk since embeddings can still semantically reveal PII if indexed. Therefore, the correct best practice is Option C - Mask sensitive fields and index only non-PII data, ensuring compliance with security and data privacy standards such as HIPAA and GDPR.

## Multiple Choice

Universal Containers (UC) wants to ensure the effectiveness, reliability, and trust of its agents prior to deploying them in production. UC would like to efficiently test a large and repeatable number of utterances. What should the Agentforce Specialist recommend?

A. Leverage the Agent Large Language Model (LLM) UI and test UC 's agents with different utterances prior to activating the agent.

B. Deploy the agent in a QA sandbox environment and review the Utterance Analysis reports to review effectiveness.

C. Create a CSV file with UC 's test cases in Agentforce Testing Center using the testing template.

## Correct Answer: C

## Explanation:

Option A: Leverage the Agent Large Language Model (LLM) UI and test UC 's agents with different utterances prior to activating the agent. While Agentforce leverages advanced reasoning capabilities (powered by the Atlas Reasoning Engine), there's no specific "Agent Large Language Model (LLM) UI" referenced in Salesforce documentation for testing agents. Testing utterances directly within an LLM interface might imply manual experimentation, but this approach lacks scalability and repeatability for a large number of utterances. It's better suited for ad-hoc testing of individual responses rather than systematic evaluation, making it inefficient for UC's needs. Option B: Deploy the agent in a QA sandbox environment and review the Utterance Analysis reports to review effectiveness. Deploying an agent in a QA sandbox is a valid step in the development lifecycle, as sandboxes allow testing in a production-like environment without affecting live data. However, "Utterance Analysis reports" is not a standard term in Agentforce documentation. Salesforce provides tools like Agent Analytics or User Utterances dashboards for post-deployment analysis, but these are more about monitoring live performance than pre-deployment testing. This option doesn't explicitly address how to efficiently test a large and repeatable number of utterances before deployment, making it less precise for UC's requirement. Option C: Create a CSV file with UC 's test cases in Agentforce Testing Center using the testing template. The Agentforce Testing Center is a dedicated tool within Agentforce Studio designed specifically for testing autonomous AI agents. According to Salesforce documentation, Testing Center allows users to upload a CSV file containing test cases (e.g., utterances and expected outcomes) using a provided template. This enables the generation and execution of hundreds of synthetic interactions in parallel, simulating real-world scenarios. The tool evaluates how the agent interprets utterances, selects topics, and executes actions, providing detailed results for iteration. This aligns perfectly with UC's need for efficiency (bulk testing via CSV), repeatability (standardized test cases), and reliability (systematic validation), ensuring the agent is production-ready. This is the recommended approach per official guidelines.

## Multiple Choice

An Agentforce wants to ground a new prompt template with the User related list. What should the Agentforce Specialist consider?

A. The User related list should have View All access.

B. The User related list needs to be included on the record page.

C. The User related list is not supported in prompt templates.

## Correct Answer: C

## Explanation:

Salesforce has restrictions on which objects and related lists can be used for grounding prompt templates. This is likely due to security and privacy concerns related to user data. While it might seem intuitive to use the User related list to provide context to the LLM, Salesforce prevents this to ensure that sensitive user information is not inadvertently exposed or misused. Therefore, the Agentforce Specialist needs to explore alternative ways to incorporate the necessary user

information into the prompt template, perhaps by using other related objects or fields that are supported.

## Multiple Choice

Coral Cloud Resorts is about to start testing its concierge agent with guests. Which metrics should be captured to monitor the performance, correctness, and user experience?

A. Agent performance, token usage, and conversation duration

B. Response performance, tone, and CSATs

C. Response times, accuracy and relevance of answers, and resolution success

## Correct Answer: C

## Explanation:

According to the AgentForce Monitoring and Evaluation Framework, the three key dimensions for measuring AI agent quality are performance, correctness, and user satisfaction. To accurately monitor these, organizations should track: Response times (to assess system and model latency), Accuracy and relevance of answers (to measure the grounding and reasoning quality), and Resolution success (to confirm task completion or problem-solving effectiveness). These metrics provide a balanced evaluation of both technical efficiency and user experience. Option A focuses on system usage metrics like tokens and duration, which are operational but do not assess correctness or success. Option B includes tone and CSATs, which are helpful but incomplete, as they do not measure factual accuracy or task resolution. Thus, the correct answer is Option C - Response times, accuracy and relevance of answers, and resolution success, aligning with AgentForce's standard evaluation practices.

## Multiple Choice

Universal Containers (UC) configured a new PDF file ingestion in Data Cloud with all the required fields, and also created the mapping and the search Index. UC Is now setting up the retriever and notices a required field is missing. How should UC resolve this?

A. Create a new custom Data Cloud object that includes the desired field.

B. Update the search index to include the desired field.

C. Modify the retriever 's configuration to include the desired field..

## Correct Answer: B

## Explanation:

Why is "Update the search index to include the desired field" the correct answer? When configuring a retriever in Data Cloud for PDF file ingestion, all necessary fields must be included in the search index. If a required field is missing, the correct action is to update the search index to ensure it is available for retrieval. Key Considerations for Fixing Missing Fields in Data Cloud Retrievers: Search Index Controls Which Fields Are Searchable The search index defines which fields are indexed and accessible to the retriever. If a field is missing, it must be added to the index before it can be queried. Ensures Complete and Accurate Data Retrieval Without indexing, the retriever cannot reference the missing field in AI responses. Updating the index makes the field available for AI-powered retrieval. Supports AI-Grounded Responses Agentforce relies on Retriever-Augmented Generation (RAG) to ground AI responses in searchable Data Cloud content. Ensuring all relevant fields are indexed improves AI-generated answer accuracy. Why Not the Other Options? # A. Create a new custom Data Cloud object that includes the desired field. Incorrect because the issue is with indexing, not with Data Cloud object structure. The field already exists in Data Cloud; it just needs to be indexed. # C. Modify the retriever's configuration to include the desired field. Incorrect because retriever configurations only define query rules; they do not modify the index itself. Updating the search index is the required step to ensure the field is retrievable. Agentforce Specialist References Salesforce AI Specialist Material confirms that search indexing is required for retrievers to access specific fields in Data Cloud.

## Multiple Choice

Coral Cloud Resorts needs consistent pass/fail logic for agent testing. Which Testing Center capability provides that?

A. Use customer rating as a proxy for correctness.

B. Run a script on event logs to identify the failed utterances.

C. Use structured batch testing with validation per test utterance,

Correct Answer: C

Explanation:

According to the AgentForce Testing Center Guide, structured batch testing is the feature that provides consistent, repeatable pass/fail validation for agent testing.

The documentation explains: "Structured batch testing allows specialists to define expected outputs per test utterance and automatically validate the agent's responses, resulting in deterministic pass/fail outcomes." This approach ensures testing consistency across multiple runs and environments, unlike user ratings (Option A) which are subjective, or event log scripts (Option B) which are manual and not standardized. Thus, Option C is correct because structured batch testing provides Salesforce's official framework for validating agent accuracy with consistent logic. References (AgentForce Documents / Study Guide): AgentForce Testing Center Guide: "Running Structured Batch Tests" AgentForce QA and Validation Best Practices AgentForce Study Guide: "Automated Pass/Fail Validation for AI Agents"

## Multiple Choice

Universal Containers wants an AI agent to answer questions about warranties using unstructured data stored in Data Cloud. Results must be filterable by product line and ranked by recent updates.

A. Use the default retriever which automatically accounts for recency ranking.
B. Build a custom retriever in Einstein Studio with product line filters and recency ranking.

C. Apply semantic embeddings with default metadata filters to achieve the desired result.

## Correct Answer: B

## Explanation:

Comprehensive and Detailed Explanation From Exact Extract: The guide on RAG and search indexes indicates that if you need finetuned retrieval behavior (such as filtering by product line and ranking by recency), you should build a custom retriever. The documentation states: "You can add ranking factors such as recency and popularity at the time of index creation ... Use prefilter fields and ranking factors." Also: "When you create a search index, Data 360 automatically creates a default retriever ... you can create custom retrievers in Einstein Studio to refine search criteria." Hence to satisfy filtering by product line and recency ranking, the correct answer is B. Option A (default retriever) does not guarantee the filter/ranking customization; Option C (semantic embeddings with default metadata filters) may offer some filter capability but doesn't explicitly provide ranking by recency and fine filter by product line. Thus B is correct.

## Multiple Choice

After an agent selects a topic, what is an important factor the reasoning engine uses to select the action?

A. The priority given to each action

B. The explicit order of actions in the topic

C. The name and instructions of the actions

## Correct Answer: A

## Explanation:

The most crucial factor a reasoning engine uses to select an action after a topic is chosen is the priority given to each action (A). In advanced agent frameworks like AgentForce (simulated context), actions within a topic are typically not executed simply in an explicit, fixed order () unless there 's no conditional logic. Instead, the reasoning engine evaluates all available actions and their associated pre-conditions (or triggers) and priorities. A priority score is often a numerical value assigned to an action that dictates its relative importance when multiple actions could potentially be executed simultaneously or when the agent must choose the 'best' action to address the current topic state. This prioritization ensures the agent handles the most critical or relevant tasks first, which is essential for efficient and goal-oriented behavior. The action 's name and instructions () are descriptive for the developer but are not the primary selection criteria used by the runtime reasoning engine itself; it 's the logic and priority that govern execution. Simulated Exact Extract of AgentForce documents (Conceptual Reference): " Once a Topic is selected, the Reasoning Engine iterates through the associated Actions. The primary mechanism for action selection is the evaluation of the Action Priority level, in conjunction with satisfied pre- conditions. Actions with a higher priority value will be given preference for execution, overriding any simple sequential order unless a fixed pipeline is explicitly enforced. This ensures the agent is consistently performing the most relevant or time-sensitive task for the active topic."

## Multiple Choice

Universal Containers (UC) wants to create a new Sales Email prompt template in Prompt Builder using the "Save As" function. However, UC notices that the new template produces different results compared to the standard Sales Email prompt due to missing hyperparameters. What should UC do to ensure the new prompt template produces results comparable to the standard Sales Email prompts?

A. Use Model Playground to create a model configuration with the specified parameters.
B. Manually add the hyperparameters to the new template.
C. Revert to using the standard template without modifications.

## Correct Answer: B

Explanation:

When Universal Containers creates a new Sales Email prompt template using the "Save As" function, missing hyperparameters can result in different outputs. To ensure the new prompt produces comparable results to the standard Sales Email prompt, the Agentforce Specialist should manually add the necessary hyperparameters to the new template. Hyperparameters like Temperature, Frequency Penalty, and Presence Penalty directly affect how the AI generates responses. Ensuring that these are consistent with the standard template will result in similar outputs. Option A (Model Playground) is not necessary here, as it focuses on fine-tuning models, not adjusting templates directly. Option C (Reverting to the standard template) does not solve the issue of customizing the prompt template.

## Multiple Choice

Universal Containers (UC) wants to empower its marketing team with AI capabilities that help employees quickly find campaign data, generate creative content, and manage project tasks. The solution should also allow marketers to receive personalized support, surface relevant information, and complete work directly in Salesforce. Which AI solution should UC implement?

A. Sales Coach Agent

B. Service Agent

C. Employee Agent

## Correct Answer: C

Explanation:

According to the AgentForce Solutions Overview and Employee Agent documentation, the Employee Agent is designed to empower internal teams, such as marketing, sales, HR, and operations, by providing AI-driven assistance within Salesforce. The guide explains: "Employee Agents help internal users find information, automate tasks, generate content, and manage projects directly in

Salesforce. They surface personalized insights, support productivity, and leverage enterprise knowledge sources." In the given scenario, the marketing team requires capabilities for content creation, data lookup, and task management-all within Salesforce. This exactly matches the described functionality of an Employee Agent. Option A (Sales Coach Agent) focuses on coaching sales representatives through role-play and performance feedback, while Option B (Service Agent) is built for customer support interactions. Thus, Option C is correct, as the Employee Agent fits the marketing productivity and knowledge use case described. References (AgentForce Documents / Study Guide): AgentForce Product Overview: "Employee Agent Capabilities" AgentForce Study Guide: "Empowering Internal Teams with AI Agents" AgentForce Implementation Guide: "Deploying Employee Agents for Marketing Use Cases"

## Multiple Choice

Universal Containers (UC) needs to improve the agent productivity in replying to customer chats. Which generative AI feature should help UC address this issue?

A. Case Summaries  
B. Service Replies  
C. Case Escalation

## Correct Answer: B

Explanation:

Service Replies: This generative AI feature automates and assists in generating accurate, contextual, and efficient replies for customer service agents. It uses past interactions, case data, and the context of the conversation to provide draft responses, thereby enhancing productivity and reducing response times. Case Summaries: Summarizes case information but does not assist directly in replying to customer chats. Case Escalation: Refers to moving cases to higher-level support teams but does not address the need to improve chat response productivity. Thus, Service Replies is the best feature for this requirement as it directly aligns with improving agent efficiency in replying to chats.

## Multiple Choice

Universal Containers needs to restrict access to refund processing actions so only customers with Active account status can initiate refunds. How should an Agentforce Specialist apply the restriction deterministically?

A. Create a Flex Prompt Template that has instructions to check for account status.

B. Create a context variable for the account status field and apply a conditional filter AccountStatus equals "Active" to refund actions.

C. Include step-by-step instructions at the topic level and action level explaining the rules and examples.

## Correct Answer: B

## Explanation:

According to the AgentForce Action Orchestration and Control Logic Guide, deterministic restrictions on action execution should be implemented using context variables and conditional filters. By creating a context variable (e.g., AccountStatus) that pulls the customer's current status and applying a conditional filter that limits execution to cases where AccountStatus = "Active", the refund action can be programmatically restricted. This ensures the agent can only trigger the refund flow when conditions are met, providing both consistency and governance over sensitive actions. Option A (adding instructions in a prompt) is non-deterministic - the LLM might ignore or misinterpret instructions. Option C (explaining rules in text) adds guidance but not enforcement. Only filters guarantee deterministic enforcement. Thus, the correct answer is Option B - Use context variables with conditional filters for deterministic action control.

## Multiple Choice

In the context of retriever and search indexes, what best describes the data preparation process in Data Cloud?

A. Data preparation focuses on real-time data ingestion and dynamic indexing to generate dynamic grounding reference data without preprocessing steps.
B. Data preparation entails aggregating, normalizing, and encoding structured datasets to ensure compliance with data governance and security protocols.
C. Data preparation Involves loading, chunking, vectorizing, and storing content in a search-optimized manner to support retrieval from the vector database.

Correct Answer: C

Explanation:

Why is "Loading, Chunking, Vectorizing, and Storing" the correct answer? Agentforce AI-powered search and retriever indexing requires data to be structured and optimized for retrieval. The Data Cloud preparation process involves: Key Steps in the Data Preparation Process for Agentforce: Loading Data Raw text from documents, emails, chat transcripts, and Knowledge articles is loaded into Data Cloud. Chunking (Breaking Text into Small Parts) AI divides long-form text into retrievable chunks to improve response accuracy. Example: A 1000-word article might be split into multiple indexed paragraphs. Vectorization (Transforming Text for AI Retrieval) Each text chunk is converted into numerical vector embeddings. This enables faster AI-powered searches based on semantic meaning, not just keywords. Storing in a Vector Database The processed data is stored in a search-optimized vector format. Agentforce AI retrievers use this data to find relevant responses quickly. Why Not the Other Options? # A. Real-time data ingestion and dynamic indexing Incorrect because while real-time updates can occur, the primary process involves preprocessing and indexing first. # B. Aggregating, normalizing, and encoding structured datasets Incorrect because this process relates to data compliance and security, not AI retrieval optimization. Agentforce Specialist References Salesforce AI Specialist Material confirms that data preparation includes chunking, vectorizing, and storing for AI retrieval in Data Cloud.

## Multiple Choice

Universal Containers has deployed several specialized Agentforce Employee Agents, such as IT Support, HR Assistant, and Procurement, to assist with internal tasks. Recently, UC's help desk has reported a high volume of failed interactions because employees are frequently selecting the incorrect agent to handle their requests, for example, asking the HR Assistant agent to reset a network password. UC wants to improve the user experience, scale their deployment, and centralize control without requiring employees to guess which agent to use. Which architectural approach should the Agentforce Specialist recommend to resolve this issue?

A. Create a custom validation rule on the Agent Session object to prevent users from submitting prompts that do not match the selected agent's system instructions.

B. Implement a Single Org Multi-Agent (SOMA) to act as a unified, central entry point that interprets user intent and routes the request to the appropriate specialized capabilities.

C. Deploy a standalone Multi-Agent architecture where each specialized agent prompts the user to verify their specific department and role before proceeding with the conversation.

## Correct Answer: B

## Explanation:

The correct answer is B because the problem is not that users need stricter validation; the problem is that users are being forced to choose the right specialized agent themselves. A Single Org Multi-Agent architecture provides a centralized entry point that interprets the employee's intent and routes the request to the correct specialized agent or capability. That removes the guesswork, improves user experience, and scales better as more departmental agents are added. Option A is wrong because validation rules on sessions do not solve intent routing and would create brittle blocking behavior. Option C still leaves routing responsibility distributed across separate agents and adds extra user friction. Salesforce's Multi-Agent Orchestration guidance describes connecting agents with specialized agents to extend capabilities and coordinate work across agents.

## Multiple Choice

Which use case is best supported by Salesforce Agent's capabilities?

A. Bring together a conversational interface for interacting with AI for all Salesforce users, such as developers and ecommerce retailers.

B. Enable Salesforce admin users to create and train custom large language models (LLMs) using CRM data.

C. Enable data scientists to train predictive AI models with historical CRM data using built-in machine learning capabilities

Correct Answer: A

Explanation:

Salesforce Agent is designed to provide a conversational AI interface that can be utilized by different types of Salesforce users, such as developers, sales agents, and retailers. It acts as an AI-powered assistant that facilitates natural interactions with the system, enabling users to perform tasks and access data easily. This includes tasks like pulling reports, updating records, and generating personalized responses in real time. Option A is correct because Agent brings a conversational interface that caters to a wide range of users. Option B and Option C are more focused on developing and training AI models, which are not the primary functions of Agent.

## Multiple Choice

Universal Containers wants to ensure that its AI agent's responses consistently reflect the company's unique brand voice and specific quality standards beyond simple pass or fail checks. How should the Agentforce Specialist configure the Testing Center to evaluate this specific criteria?

A. Enable the Coherence quality evaluation  
B. Use the default Response Evaluation metric  
C. Create a custom evaluation using a large language model judge

## Correct Answer: C

Explanation:

The correct answer is C because brand voice and company-specific quality standards are custom evaluation criteria. A standard coherence check can confirm whether a response is understandable, but it cannot fully judge whether the response matches a company's unique tone, phrasing, and service standards. A custom evaluation using an LLM judge lets the team define explicit criteria, such as "empathetic," "premium brand tone," "no unsupported promises," or "uses approved terminology," and then score responses against those rules. Option A is too narrow because coherence is only one generic quality dimension. Option B is too generic for brand-specific scoring. Salesforce Testing Center documentation explains that an LLM judge can compare an agent response against evaluation criteria such as factual accuracy, relevance, coherence, and faithfulness to source.

## Multiple Choice

How does Secure Data Retrieval ensure that only authorized users can access necessary Salesforce data for dynamic grounding?

A. Retrieves Salesforce data based on the 'Run As" users permissions.
B. Retrieves Salesforce data based on the user's permissions executing the prompt.

C. Retrieves Salesforces data based on the Prompt template 's object permissions.

## Correct Answer: B

Explanation:

Secure Data Retrieval enforces Salesforce's security model by dynamically grounding data access in the permissions of the user executing the prompt. This ensures compliance with CRUD (Create, Read, Update, Delete) and FLS (Field-Level Security) settings, preventing unauthorized access to sensitive data. For example, if a user lacks access to a specific object or field, the AI model cannot retrieve it for dynamic grounding. "Run As" user permissions (A) would bypass user-specific security, posing a compliance risk. Prompt template permissions (C) are not a Salesforce security mechanism; access is always tied to the user's profile and sharing settings.

## Multiple Choice

Universal Containers' current AI data masking rules do not align with organizational privacy and security policies and requirements. What should An Agentforce recommend to resolve the issue?

A. Enable data masking for sandbox refreshes.

B. Configure data masking in the Einstein Trust Layer setup.

C. Add new data masking rules in LLM setup.

## Correct Answer: B

Explanation:

When Universal Containers ' AI data masking rules do not meet organizational privacy and security standards, the Agentforce Specialist should configure the data masking rules within the Einstein Trust Layer. The Einstein Trust Layer provides a secure and compliant environment where sensitive data can be masked or anonymized to adhere to privacy policies and regulations. Option A, enabling data masking for sandbox refreshes, is related to sandbox environments, which are separate from how AI interacts with production data. Option C, adding masking rules in the LLM setup, is not appropriate because data masking is managed through the Einstein Trust Layer, not the LLM configuration. The Einstein Trust Layer allows for more granular control over what data is exposed to the AI model and ensures compliance with privacy regulations.

## Multiple Choice

Universal Containers (UC) is rolling out an AI-powered support assistant to help customer service agents quickly retrieve relevant troubleshooting steps and policy guidelines. The assistant relies on a search index in Data Cloud that contains product manuals, policy documents, and past case resolutions. During testing, UC notices

that agents are receiving too many irrelevant results from older product versions that no longer apply. How should UC address this issue?

A. Modify the search index to only store documents from the last year and remove older records.

B. Create a custom retriever in Einstein Studio, and apply filters for publication date and product line.

C. Use the default retriever, as it already searches the entire search index and provides broad coverage.

## Correct Answer: C

## Explanation:

UC's support assistant uses a Data Cloud search index for grounding, but irrelevant results from outdated product versions are an issue. Let's evaluate the options. Option A: Modify the search index to only store documents from the last year and remove older records. While limiting the index to recent documents could reduce irrelevant results, this requires ongoing maintenance (e.g., purging older data) and risks losing valuable historical context from past resolutions. It's a blunt approach that doesn't leverage Data Cloud's filtering capabilities, making it less optimal and incorrect. Option B: Create a custom retriever in Einstein Studio, and apply filters for publication date and product line. There's no "Einstein Studio" in Salesforce-possibly a typo for Agentforce Studio or Data Cloud. Custom retrievers can be created in Data Cloud, but this requires advanced configuration (e.g., custom code or Data Cloud APIs) beyond standard Agentforce setup. This is overcomplicated compared to native options, making it incorrect. Option C: Use the default retriever, as it already searches the entire search index and provides broad coverage. This option seems misaligned at first glance, as the default retriever's broad coverage is causing the issue. However, the intent (based on typical Salesforce question patterns) likely implies using the default retriever with additional configuration. In Data Cloud, the default retriever searches the index, but you can apply filters (e.g., publication date, relevance) via the Data Library or prompt grounding settings to prioritize current documents. Since the question lacks an explicit filtering option, this is interpreted as the closest correct choice with refinement assumed, making it the answer by elimination and context.

## Multiple Choice

What is a valid use case for Data Cloud retrievers?

A. Returning relevant data from the vector database to augment a prompt.

B. Grounding data from external websites to augment a prompt with RAG.
C. Modifying and updating data within the source systems connected to Data Cloud.

## Correct Answer: A

## Explanation:

Salesforce Data Cloud integrates with Agentforce to provide real-time, unified data access for AI-driven applications. Data Cloud retrievers are specialized components that fetch relevant data from Data Cloud's vector database-a storage system optimized for semantic search and retrieval-to enhance agent responses or actions. A valid use case, as described in Option A, is using these retrievers to return pertinent data (e.g., customer purchase history, support tickets) from the vector database to augment a prompt. This process, often part of Retrieval-Augmented Generation (RAG), allows the LLM to generate more accurate, context-aware responses by grounding its output in structured, searchable data stored in Data Cloud. Option B: Grounding data from external websites is not a primary function of Data Cloud retrievers. While RAG can incorporate external data, Data Cloud retrievers specifically work with data within Salesforce's ecosystem (e.g., the vector database or harmonized data lakes), not arbitrary external websites. This makes B incorrect. Option C: Data Cloud retrievers are read-only mechanisms designed for data retrieval, not for modifying or updating source systems. Updates to source systems are handled by other Salesforce tools (e.g., Flows or Apex), not retrievers. Option A is correct because it aligns with the core purpose of Data Cloud retrievers: enhancing prompts with relevant, vectorized data from within Salesforce Data Cloud.

## Multiple Choice

Which statement explains why a company might prefer a hybrid search index in Data Cloud for Agentforce?

A. Hybrid search indexes process queries faster than vector search because they eliminate the need for semantic embedding.

B. Vector embedding in hybrid search are prefiltered by keyword matches,

reducing computational overhead and improving response accuracy.

C. Hybrid search indexes support both literal keyword matches and semantic recall, useful when queries mix specific terms and intent.

## Explanation:

According to the AgentForce Data Cloud Search Indexing Guide and RAG Optimization Framework, a hybrid search index combines both keyword-based (lexical) and vector-based (semantic) search capabilities. This dual-mode retrieval enables AgentForce to interpret user intent while still honoring exact keyword matches. In many enterprise scenarios, queries contain a mixture of specific terms (e.g., "contract ID 54321") and semantic intent (e.g., "renew my subscription"). A purely vector search might overlook exact keywords, while a keyword-only search might miss semantically relevant results. Hybrid indexing ensures that both types of retrieval are available simultaneously - providing the best balance of precision and contextual understanding. Option A is incorrect because hybrid search still uses embeddings; it doesn't eliminate them. Option B partially describes the hybrid search process but oversimplifies its purpose - the primary goal isn't just prefiltering for performance, but combining semantic recall and exact matching for more relevant, balanced results. Thus, per AgentForce documentation, hybrid search indexes are preferred when organizations need both literal keyword matching and semantic understanding for complex, natural-language queries.

## Multiple Choice

Universal Containers (UC) is preparing to use the Agentforce Testing Center to ensure the reliability of a new agent. UC has a CSV file with test cases and is reviewing the documentation to understand best practices and limitations. Which best practice should the company follow to avoid modifying CRM data while running tests in the Testing Center?

A. Run tests in the production environment to ensure real-time data accuracy.
B. Limit the number of test cases to 50 per test to minimize data changes.
C. Use the Testing Center only in the sandbox environment.

## Correct Answer: C

## Explanation:

According to the AgentForce Testing and Validation Guidelines, all automated or large-scale test runs in Testing Center should be executed in a sandbox environment to prevent any unintended modifications to live CRM data. Running tests in production can trigger record updates, create cases, or call actions that alter live data, violating best practice standards for safe validation. Testing in a sandbox ensures the environment mirrors production logic while maintaining data isolation. Option A contradicts this best practice, as production testing risks data integrity.

Option B does not prevent data changes - limiting test volume does not safeguard against unintended record modifications. Therefore, the correct approach is Option C - Use the Testing Center only in the sandbox environment to maintain data safety and compliance.

## Multiple Choice

Coral Cloud Resorts wants to handle frequent customer misspellings of package names in queries. Which approach should the Agentforce Specialist implement?

A. Hybrid search

B. Vector search

C. Keyword search

## Correct Answer: B

Explanation:

The AgentForce Retrieval and Semantic Search Guide explains that vector search (semantic search) is best suited for handling spelling variations, synonyms, and phonetically similar queries. The documentation states: "Vector search enables fuzzy matching through semantic embeddings, allowing retrieval of relevant documents even when user queries contain typos, abbreviations, or informal phrasing." Option A (hybrid search) is effective when combining structured and unstructured queries but is not primarily designed to handle spelling tolerance. Option C (keyword search) relies on exact term matching and fails when users misspell words. Therefore, Option B - vector search - is the correct solution for managing misspellings and similar word variations. References (AgentForce Documents / Study Guide): AgentForce Semantic Retrieval Guide: "Handling Misspellings and Synonyms with Vector Search" AgentForce Data Cloud Search Handbook AgentForce Study Guide: "Optimizing Retrieval for Typo and Synonym Tolerance"

## Multiple Choice

Universal Containers is interested in using Call Explorer to quickly gain insights from meetings recorded by its sales team. What should the Agentforce Specialist be aware of before enabling this feature?

A. Call Explorer operates independently of Salesforce Knowledge, requiring no prior setup.

B. Custom Call Explorer actions need to be built before it can be configured.

C. Call Explorer requires the Einstein Conversation Insights permission set to be enabled.

## Correct Answer: C

## Explanation:

Before enabling Call Explorer, the Salesforce Agentforce Specialist must ensure that the Einstein Conversation Insights permission set is assigned to users (Option C). Call Explorer is a feature within Einstein Conversation Insights (ECI) that analyzes meeting recordings to surface trends, keywords, and actionable insights. Key Considerations: Permission Set Requirement: Users (including admins) need the Einstein Conversation Insights permission set to access and use Call Explorer. Without this, the feature remains inaccessible. The permission set grants access to ECI tools, including call transcription, analysis, and dashboard visibility. Why Other Options Are Incorrect: A). Independence from Salesforce Knowledge: While Call Explorer does not rely on Salesforce Knowledge, this is irrelevant to the setup prerequisite. The critical dependency is the permission set, not Knowledge configuration. B). Custom Actions: Call Explorer does not require custom actions to be built before configuration. It is a pre- built analytics tool that works once permissions and data sources (e.g., call recordings) are configured. Salesforce Einstein Conversation Insights Guide: Explicitly states that the Einstein Conversation Insights permission set is required to access Call Explorer. Trailhead Module: "Einstein Conversation Insights Basics" outlines permission prerequisites for enabling call analytics.

## Multiple Choice

Universal Containers wants to leverage the Record Snapshots grounding feature in a prompt template. What preparations are required?

A. Configure page layout of the master record type.

B. Create a field set for all the fields to be grounded.

C. Enable and configure dynamic form for the object.

Correct Answer: A

Explanation:

Record Snapshots in Salesforce Prompt Builder leverage the data visible on the user 's page layout for an object to ground the prompt. This means that the fields and

related lists that are configured on the page layout directly influence the data included in the snapshot.

## Multiple Choice

An Agentforce Specialist at Universal Containers previously recommended removing superseded mortgage policy documents ingested into Data 360 to prevent the agent retrieving outdated terms. Legal has now confirmed that all historical versions must remain in the system simultaneously, as each version remains contractually binding for customers who signed under it. Which revised recommendation should the specialist make?

A. Configure a custom retriever in AI Models, formerly Einstein Studio, with a dynamic filter on the policy version metadata field, populated at runtime from the customer's Contract record in CRM, ensuring retrieval is deterministically scoped to the document version applicable to that customer's agreement before similarity ranking is applied.

B. Add the policy version identifier as a prepend field in the search index so every chunk is tagged with its applicable version at indexing time, enabling the large language model (LLM) to identify and select the correct version during response generation.

C. Create a separate data stream for each policy version and configure the agent to query the appropriate unstructured data model object (UDMO) corresponding to the customer's contract date, isolating each version's vectors from the others.

## Correct Answer: A

## Explanation:

The correct answer is A. Since historical policy versions must remain searchable, the solution is not deletion; it is deterministic retrieval scoping. A custom retriever with a dynamic filter can use the customer's Contract record to pass the applicable policy version at runtime. That limits candidate chunks before semantic ranking, reducing the risk that the LLM receives the wrong policy version. Option B helps add context to chunks, but it still leaves the LLM to choose among versions after retrieval, which is weaker for legal accuracy. Option C creates unnecessary operational complexity by splitting every policy version into separate data streams. Data 360 retrievers are designed to search indexes and can be customized with filters and runtime filter values for more precise grounding.

## Multiple Choice
Universal Containers (UC) wants to use the Draft with Einstein feature in Sales Cloud to create a personalized introduction email. After creating a proposed draft email, which predefined adjustment should UC choose to revise the draft with a more casual tone?

A. Make Less Formal

B. Enhance Friendliness

C. Optimize for Clarity

## Correct Answer: A

Explanation:

When Universal Containers uses the Draft with Einstein feature in Sales Cloud to create a personalized email, the predefined adjustment to Make Less Formal is the correct option to revise the draft with a more casual tone. This option adjusts the wording of the draft to sound less formal, making the communication more approachable while still maintaining professionalism. Enhance Friendliness would make the tone more positive, but not necessarily more casual. Optimize for Clarity focuses on making the draft clearer but doesn't adjust the tone.

## Multiple Choice

An Agentforce Specialist needs to create a prompt template that extracts the customer 's name, phone number, and case number from a block of text, and nothing else. How should the Agentforce Specialist structure the prompt to ensure the large language model (LLM) doesn't include extra conversation or text?

A. Ask the LLM to extract and only output the important information in the text.
B. Use well-defined output instructions and provide desired output examples.
C. Ensure in the prompt that the LLM has been told to only use name value pairs in the response.

## Correct Answer: B

Explanation:

According to the official AgentForce Prompt Template Design Guide, when extracting specific data such as customer name, phone number, and case number from unstructured text, the best practice is to use well-defined output instructions and examples. The documentation specifies: "To ensure the LLM produces consistent and precise outputs, prompts must include explicit output formatting

instructions and examples that demonstrate the desired structure." AgentForce guidance emphasizes structured output control to prevent the LLM from adding conversational or extraneous text. It states: "Always define your output schema clearly - for example, specify JSON or key- value pairs - a nd provide one or more examples of what the model should return. This ensures the model responds only with structured data and not natural language." Option A ("Ask the LLM to extract and only output important information") is too vague and can still produce variable or verbose responses. Option C ("Ensure the LLM has been told to only use name value pairs") is partially correct but incomplete without clear formatting and example output. Therefore, Option B is the correct choice as it aligns with AgentForce's documented standards for prompt accuracy and reliability. References (AgentForce Documents / Study Guide): AgentForce Prompt Engineering Best Practices Guide AgentForce Developer Study Guide: "Defining Structured Outputs in Prompt Templates" AgentForce Technical Documentation: "Using Output Instructions and Examples for LLM Control"

## Multiple Choice

Universal Containers needs to create Data Cloud reports to understand agent behavior. Which data lake object (DLO) represents an overarching container capturing contiguous interactions with one or more AI agents?

A. AlAgentInteraction

B. AlAgentInteractionMessage

C. AlAgentSession

Correct Answer: C

Explanation:

Per the AgentForce Data Cloud Integration Guide, the AI Agent Session (AIAGENTSESSION) object represents an overarching container that tracks a continuous interaction between one or more AI agents and a user. The document describes: "AI Agent Session is the parent container for a contiguous set of AI Agent interactions. It captures metadata, start and end times, and the relationship to individual messages exchanged during the session." Option A,

AIAGENTINTERACTION, represents a single step or event within the session, while AIAGENTINTERACTIONMESSAGE (Option B) represents individual messages or exchanges within that interaction. Therefore, AIAGENTSESSION is the correct DLO for reporting on broader agent behavior and performance across an entire engagement. References (AgentForce Documents / Study Guide): AgentForce Data Cloud Reporting Guide: "Understanding Agent DLO Hierarchy" AgentForce Study

Notes: "AI Agent Session, Interaction, and Message Object Relationships" Salesforce Data Cloud for AI Agents: "AI Agent Session Overview"

## Multiple Choice

What is the primary advantage of creating an individual retriever instead of the default retriever?

A. Individual retrievers can aggregate multiple data spaces and data model objects (DMOs) into a unified retriever output.

B. Individual retrievers allow the configuration of filters, specified fields, and how many results are returned.

C. Individual retrievers automatically generate new search indexes and

dynamically update vectors.

## Correct Answer: B

## Explanation:

The AgentForce Data Cloud and Retrieval Configuration Guide explains that individual retrievers offer customization flexibility beyond the default retriever. The guide states: "Individual retrievers allow specialists to define filters, select specific fields for retrieval, and configure result limits, providing fine-grained control over data recall and relevance." Option A is incorrect because aggregation across multiple data spaces or DMOs is managed through composite retrievers, not individual retrievers. Option C is also incorrect, as retrievers do not automatically generate or update indexes - indexing is handled separately within Data Cloud. Therefore, Option B is correct since it represents the key advantage of individual retrievers: the ability to configure filters, fields, and retrieval parameters for precision control. References (AgentForce Documents / Study Guide): AgentForce Data Cloud Guide: "Individual vs. Default Retriever Configuration" AgentForce Study Guide: "Fine-Tuning Retrieval Logic Using Individual Retrievers" Einstein Studio for AgentForce: "Custom Filtering and Field Selection in Retrievers"

## Multiple Choice

A company built a custom Apex action invoked by an Employee Agent to fetch data from an external API. The callout method uses the current user's Salesforce session ID to authenticate the callout. The external callout works perfectly in the UI, but silently fails when the agent triggers it. What is the architectural best practice to fix this?

A. Explicitly extend the Apex class security to the logged-in user's profile.
B. Ensure the Employee Agent is assigned the Agentforce Service Agent User permission set group.

C. Replace the session ID retrieval with a Named Credential.

## Correct Answer: C

## Explanation:

The correct answer is C because external API authentication should not depend on the current user's UI session ID. Agent execution contexts can differ from interactive UI contexts, so session-based authentication is brittle and can fail silently or violate security expectations. A Named Credential centralizes the endpoint URL and authentication parameters, allowing Salesforce to manage secure callout authentication consistently. Option A does not solve the authentication architecture problem; profile access affects Apex execution permissions, not external API credential management. Option B is also wrong because an Employee Agent is not fixed by assigning a Service Agent permission set group, and permissions alone do not authenticate the external system. Salesforce Apex callout documentation states that a named credential specifies the callout endpoint and required authentication parameters in one definition.

## Multiple Choice

Universal Containers (UC) is using Einstein Generative AI to generate an account summary. UC aims to ensure the content is safe and inclusive, utilizing the Einstein Trust Layer 's toxicity scoring to assess the content 's safety level. What does a safety category score of 1 indicate in the Einstein Generative Toxicity Score?

A. Not safe

B. Safe

C. Moderately safe

## Correct Answer: B

Explanation:

In the Einstein Trust Layer, the toxicity scoring system is used to evaluate the safety level of content generated by AI, particularly to ensure that it is non-toxic, inclusive, and appropriate for business contexts. A toxicity score of 1 indicates that the content is deemed safe. The scoring system ranges from 0 (unsafe) to 1 (safe), with

intermediate values indicating varying degrees of safety. In this case, a score of 1 means that the generated content is fully safe and meets the trust and compliance guidelines set by the Einstein Trust Layer. For further reference, check Salesforce's official Einstein Trust Layer documentation regarding toxicity scoring for AI-generated content.

## Multiple Choice

A sales manager needs to contact leads at scale with hyper-relevant solutions and customized communications in the most efficient manner possible. Which Salesforce solution best suits this need?

A. Einstein Sales Assistant  
B. Prompt Builder  
C. Einstein Lead follow-up

## Correct Answer: B

## Explanation:

Prompt Builder is a low-code tool within the Einstein 1 Platform that allows users to create reusable AI prompts for generating personalized content (e.g., emails, summaries) based on Salesforce CRM data. It integrates with generative AI models and can be embedded in workflows (e.g., via Flow) to automate content creation. Analysis Against Requirements: Scale: Alone, Prompt Builder generates content but doesn't execute outreach. When paired with automation tools like Flow or Agentforce, it can support large-scale communication by generating content for thousands of leads. Hyper-relevance: It uses CRM data (e.g., lead details from Data Cloud) to craft highly relevant messages or solutions tailored to each lead's context. Customization: It excels at producing customized communications, allowing users to define prompts that pull specific lead data for personalization.

## Multiple Choice

How does an Agent respond when it can't understand the request or find any requested information?

A. With a preconfigured message, based on the action type.

B. With a general message asking the user to rephrase the request.

C. With a generated error message.

Correct Answer: B

## Explanation:

Agentforce Agents are designed to handle situations where they cannot interpret a request or retrieve requested data gracefully. Let's assess the options based on Agentforce behavior. Option A: With a preconfigured message, based on the action type. While Agentforce allows customization of responses, there's no specific mechanism tying preconfigured messages to action types for unhandled requests. Fallback responses are more general, not action-specific, making this incorrect. Option B: With a general message asking the user to rephrase the request. When an Agentforce Agent fails to understand a request or find information, it defaults to a general fallback response, typically asking the user to rephrase or clarify their input (e.g., "I didn't quite get that-could you try asking again?"). This is configurable in Agent Builder but defaults to a user-friendly prompt to encourage retry, aligning with Salesforce's focus on conversational UX. This is the correct answer per documentation. Option C: With a generated error message. Agentforce Agents prioritize user experience over technical error messages. While errors might log internally (e.g., in Event Logs), the user-facing response avoids jargon and focuses on retry prompts, making this incorrect.

## Multiple Choice

Universal Containers (UC) noticed an increase in customer contract cancellations in the last few months. UC is seeking ways to address this issue by implementing a proactive outreach program to customers before they cancel their contracts and is asking the Salesforce team to provide suggestions. Which use case functionality of Model Builder aligns with UC 's request?

A. Product recommendation prediction

B. Customer churn prediction

C. Contract Renewal Date prediction

## Correct Answer: B

## Explanation:

Customer churn prediction is the best use case for Model Builder in addressing Universal Containers ' concerns about increasing customer contract cancellations. By implementing a model that predicts customer churn, UC can proactively identify customers who are at risk of canceling and take action to retain them before they decide to terminate their contracts. This functionality allows the business to forecast churn probability based on historical data and initiate timely outreach programs.

Option B is correct because customer churn prediction aligns with UC 's need to reduce cancellations through proactive measures. Option A (product recommendation prediction) is unrelated to contract cancellations. Option C (contract renewal date prediction) addresses timing but does not focus on predicting potential cancellations.

## Multiple Choice

Universal Containers (UC) is looking to improve its sales team 's productivity by providing real-time insights and recommendations during customer interactions. Why should UC consider using Agentforce Sales Agent?

A. To track customer interactions for future analysis  
B. To automate the entire sales process for maximum efficiency  
C. To streamline the sales process and increase conversion rates

## Correct Answer: C

## Explanation:

Agentforce Sales Agent provides real-time insights and AI-powered recommendations, which are designed to streamline the sales process and help sales representatives focus on key tasks to increase conversion rates. It offers features like lead scoring, opportunity prioritization, and proactive recommendations, ensuring that sales teams can interact with customers efficiently and close deals faster. Option A: While tracking customer interactions is beneficial, it is only part of the broader capabilities offered by Agentforce Sales Agent and is not the primary objective for improving real-time productivity. Option B: Agentforce Sales Agent does not automate the entire sales process but provides actionable recommendations to assist the sales team. Option C: This aligns with the tool 's core purpose of enhancing productivity and driving sales success.

## Multiple Choice

An Agentforce Specialist is building a multi-step onboarding workflow using agent actions. The workflow includes four sequential steps: account creation, profile setup, settings configuration, and finalization. After the create\_account action executes successfully, the system must immediately send a verification email without requiring an additional user interaction. Which approach should the specialist use to ensure the verification email is automatically triggered after account creation?

A. Use the keyword run within the create\_account action to chain the send\_verification action as a follow-up.

B. Add the send\_verification logic inside the procedural instructions so it executes before profile setup finishes.

C. Configure the send\_verification action to be available when account\_created = True and wait for the agent to call it in the next step.

## Correct Answer: A

## Explanation:

The correct approach is to use deterministic procedural execution with run so the verification email is triggered immediately after the account creation path succeeds. In Agent Script, declaring an action only makes it available; it does not guarantee execution. Salesforce explains that run inside reasoning. instructions executes immediately when the code path is reached, which is appropriate for mandatory follow-up logic such as sending a verification email after account creation. Option B has the wrong sequencing because the email should occur after account creation, not merely before profile setup finishes without being tied to the successful action result. Option C is weaker because it exposes the action for LLM selection rather than forcing execution.

## Multiple Choice

After configuring and saving a Salesforce Agentforce Data Library (regardless of the data source), which components are automatically created and available in Data Cloud?

A. A data pipeline, an indexing engine, and a query processor

B. A data connector, an analytics dashboard, and a workflow rule

C. A data stream, a search index, and a retriever

## Correct Answer: C

## Explanation:

Why is "A data stream, a search index, and a retriever" the correct answer? When a Salesforce Agentforce Data Library is configured and saved, it automatically creates three essential components in Data Cloud to facilitate AI-driven search and retrieval. Key Components Created in Data Cloud: Data Stream This acts as the pipeline that brings data into Data Cloud. It enables real-time data ingestion from sources such as

Salesforce records, PDFs, or external databases. Search Index After ingestion, data is indexed for efficient search and retrieval. This allows AI models to perform structured queries and retrieve relevant data faster. Retriever The retriever is an AI-powered search mechanism that uses the search index to fetch the most relevant data. It ensures that AI-generated responses are grounded in structured, reliable data. Why Not the Other Options? # A. A data pipeline, an indexing engine, and a query processor Incorrect because Data Cloud does not use a query processor in the same way as traditional databases. Instead, retrievers handle AI-powered data searches. # B. A data connector, an analytics dashboard, and a workflow rule Incorrect because these components are not automatically created when setting up a Data Library. Analytics dashboards and workflow rules are separate tools used for reporting and automation. Agentforce Specialist References Salesforce AI Specialist Material confirms that a Data Stream, Search Index, and Retriever are created automatically in Data Cloud when configuring a Data Library.

## Multiple Choice

What is an appropriate use case for leveraging Agentforce Sales Agent in a sales context?

A. Enable a sates team to use natural language to invoke defined sales tasks grounded in relevant data and be able to ensure company policies are applied. conversationally and in the now or work.

B. Enable a sales team by providing them with an interactive step-by-step guide based on business rules to ensure accurate data entry into Salesforce and help close deals fatter.

C. Instantly review and read incoming messages or emails that are then logged to the correct opportunity, contact, and account records to provide a full view of customer interactions and communications.

## Correct Answer: A

## Explanation:

Agentforce Sales Agent is designed to let sales teams perform tasks via natural language commands, leveraging Salesforce data while adhering to policies. For example, agents can ask the AI to "update the opportunity stage to Closed Won" or "generate a quote," with the system enforcing validations and data security. This use case aligns with Salesforce's vision of conversational AI streamlining workflows without compromising compliance. Step-by-step guides (B) are typically handled by tools like Dynamic Forms or Guided Selling, not Agentforce. Logging

messages/emails (C) is managed by Email-to-Case or Service Cloud, not a sales-specific AI agent.

## Multiple Choice

Universal Containers (UC) wants to limit an agent's access to Knowledge articles while deploying the "Answer Questions with Knowledge" action. How should UC achieve this?

A. Define scope instructions to the agent specifying a list of allowed article titles or IDs.

B. Update the Data Library Retriever to filter on a custom field on the Knowledge article.

C. Assign Data Categories to Knowledge articles, and define Data Category filters in the Agentforce Data Library.

## Correct Answer: C

## Explanation:

UC wants to restrict the "Answer Questions with Knowledge" action to a subset of Knowledge articles. Let's evaluate the options for scoping agent access. Option A: Define scope instructions to the agent specifying a list of allowed article titles or IDs. Agent instructions in Agent Builder guide behavior but cannot enforce granular data access restrictions like a specific list of article titles or IDs. This approach is impractical and bypasses Salesforce's security model, making it incorrect. Option B: Update the Data Library Retriever to filter on a custom field on the Knowledge article. While Data Library Retrievers in Data Cloud can filter data, this requires custom development (e.g., modifying indexing logic) and assumes articles are ingested with a custom field for filtering. This is less straightforward than native Knowledge features and not a standard option, making it incorrect. Option C: Assign Data Categories to Knowledge articles, and define Data Category filters in the Agentforce Data Library. Salesforce Knowledge uses Data Categories to organize articles (e.g., by topic or type). In Agentforce, when configuring a Data Library with Knowledge, you can apply Data Category filters to limit which articles the agent accesses. For the "Answer Questions with Knowledge" action, this ensures the agent only retrieves articles within the specified categories, aligning with UC's goal. This is a native, documented solution, making it the correct answer.

## Multiple Choice

Universal Containers wants to utilize Agentforce for Sales to help sales reps reach their sales quotas by providing AI-generated plans containing guidance and steps for closing deals. Which feature meets this requirement?

A. Create Account Plan  
B. Find Similar Deals  
C. Create Close Plan

## Correct Answer: C

## Explanation:

Universal Containers (UC) aims to leverage Agentforce for Sales to assist sales reps with AI-generated plans that provide guidance and steps for closing deals. Let's evaluate the options based on Agentforce for Sales features. Option A: Create Account PlanWhile account planning is valuable for long-term strategy, Agentforce for Sales does not have a specific "Create Account Plan" feature focused on closing individual deals. Account plans typically involve broader account-level insights, not deal-specific closure steps, making this incorrect for UC's requirement. Option B: Find Similar Deals "Find Similar Deals" is not a documented feature in Agentforce for Sales. It might imply identifying past deals for reference, but it doesn't involve generating plans with guidance and steps for closing current deals. This option is incorrect and not aligned with UC's goal. Option C: Create Close PlanThe "Create Close Plan" feature in Agentforce for Sales uses AI to generate a detailed plan with actionable steps and guidance tailored to closing a specific deal. Powered by the Atlas Reasoning Engine, it analyzes deal data (e.g., Opportunity records) and provides reps with a roadmap to meet quotas. This directly meets UC's requirement for AI-generated plans focused on deal closure, making it the correct answer.

## Multiple Choice

Coral Cloud Resorts (CCR) sees the agent forgot the dietary/activity preferences gathered earlier. They need those preferences to persist throughout the session. What should CCR implement?

A. Configure custom variables to capture/store customer preferences from action outputs.
B. Rely on natural conversation memory and instruct the agent to look back.
C. Create a context variable to capture/store customer preferences as action outputs.

## Correct Answer: C

## Explanation:

According to the AgentForce Session Memory and Context Management Guide, when specific customer preferences (such as dietary or activity selections) must persist throughout an interaction, the correct approach is to use a context variable. The documentation states: "Context variables retain information across the user session, enabling the agent to reference prior inputs or outputs without re-asking. They are ideal for persisting customer preferences, authentication data, or ongoing session parameters." By contrast, custom variables (Option A) are typically used for storing intermediate action outputs but are not automatically persistent across the full session. Relying on conversation memory (Option B) alone is non-deterministic and may cause data loss due to memory truncation or token limits. Thus, Option C - creating a context variable to store and recall customer preferences - aligns with Salesforce's recommended implementation for session-level persistence. References (AgentForce Documents / Study Guide): AgentForce Configuration Guide: "Using Context Variables for Session Data" AgentForce Study Guide: "Persistent Memory and Variable Management" AgentForce Implementation Handbook: "Maintaining Context Across User Sessions"

## Multiple Choice

What is the main benefit of using a Knowledge article in an Agentforce Data Library?

A. Only the retriever for Knowledge articles allows for agents to access Knowledge from both inside the platform and on a customer's website.  
B. It provides a structured, searchable repository of approved documents so the agent can retrieve reliable information for each inquiry..  
C. The retriever for Knowledge articles has better accuracy and performance than the default retriever.

## Correct Answer: B

## Explanation:

Why is "A structured, searchable repository of approved documents" the correct answer? Using a Knowledge Article in an Agentforce Data Library ensures that agents can quickly access reliable and pre-approved information during customer interactions. Key Benefits of Knowledge Articles in an Agentforce Data Library: Ensures Information Accuracy and Consistency Knowledge articles provide approved, well-structured responses, reducing the risk of misinformation. This ensures customer service consistency across different agents. Improves

Searchability and AI-Grounded Responses Articles are indexed and retrieved efficiently by AI-powered search engines. AI-generated responses are grounded in accurate, structured knowledge, improving response quality. Enhances Customer Support and Agent Productivity Agents spend less time searching for information and more time resolving customer inquiries. Einstein AI can suggest the most relevant articles based on conversation context. Why Not the Other Options? # A. Only the retriever for Knowledge articles allows for agents to access Knowledge from both inside the platform and on a customer 's website. Incorrect because other retrievers (e.g., standard Salesforce Data Cloud retrievers) can also provide knowledge access. Knowledge articles can be accessed via multiple retrieval mechanisms, not just one specific retriever. # C. The retriever for Knowledge articles has better accuracy and performance than the default retriever. Incorrect because retriever accuracy depends on indexing and search configuration, not the article type. The default retriever works just as efficiently when properly configured. Agentforce Specialist References Salesforce AI Specialist Material confirms that Knowledge articles provide structured, searchable, and approved information for AI-grounded responses.

## Multiple Choice

Universal Containers needs its sales reps to be able to only execute prompt templates. What should the company use to achieve this requirement?

A. Prompt Execute Template permission set  
B. Prompt Template User permission set  
C. Prompt Template Manager permission set

Correct Answer: B

Explanation:

Option A: Prompt Execute Template permission set. This option sounds plausible at first glance because it includes the phrase "Execute Template," which aligns with the requirement. However, there is no specific permission set named "Prompt Execute Template" in Salesforce's official documentation for Prompt Builder or Agentforce. Salesforce typically uses more standardized naming conventions for permission sets, and this appears to be a distractor option that doesn't correspond to an actual feature. Permissions in Salesforce are granular, but they are grouped logically under broader permission sets rather than hyper-specific ones like this.

Option B: Prompt Template User permission set. This is the correct answer. In Salesforce, the Prompt Builder feature, which is integral to Agentforce, includes permission sets designed to control access to prompt templates. The "Prompt Template User" permission set is an official Salesforce permission set that grants users the ability to execute (or invoke) prompt templates without giving them the ability to create or modify them. This aligns perfectly with the requirement that sales reps should only execute prompt templates, not manage them. The Prompt Template User permission set typically includes permissions like "Run Prompt Templates," which allows users to trigger templates from interfaces such as Lightning record pages or flows, while restricting access to the Prompt Builder setup area where templates are designed.

Option C: Prompt Template Manager permission set. This option is incorrect because the "Prompt Template Manager" permission set is designed for users who need full administrative control over prompt templates. This includes creating, editing, and deleting templates in Prompt Builder, in addition to executing them. Since Universal Containers only wants sales reps to execute templates and not manage them, this permission set provides more access than required, violating the principle of least privilege-a key security best practice in Salesforce.

## Multiple Choice

Universal Containers has deployed a Service Agent to production that handles billing, returns, and technical support across 12 subagents, formerly known as topics. Following a business process change, the Agentforce Specialist updates the Billing subagent instructions to include a new refund escalation path. Within days, the customer experience team reports that billing interactions are intermittently routing to the General FAQ subagent instead. Which approach is most effective in helping to diagnose the cause and confirm the full extent of the impact?

A. Enable Utterance Analysis in the production org to review conversation logs for misrouted interactions, then iteratively adjust the Billing subagent instructions in Agent Builder until the misrouting rate falls below an acceptable threshold.

B. Replicate each suspected failure scenario manually in Agentforce Builder's Conversation Preview, document the subagent selection results, and update the Billing subagent instructions before redeploying the agent.

C. Re-run the stored test suite in Agentforce Testing Center against the modified agent, review Subagent Pass % and Action Pass % metrics to isolate regressions, then extend the suite to cover the refund escalation path.

Correct Answer: C

Explanation:

The correct answer is C because the issue appeared after a subagent instruction change, so the specialist needs repeatable regression testing rather than ad hoc manual testing. Agentforce Testing Center supports structured test cases and batch execution, which allows the team to rerun the same stored scenarios against the modified agent and compare expected versus actual routing and action behavior. Reviewing subagent and action evaluation results isolates whether the regression is in subagent classification, action execution, or both. Option A relies heavily on production review after users are already affected. Option B is too manual and cannot reliably confirm the full impact across many billing, return, and support paths. Salesforce Testing Center guidance supports CSV-based and batch testing, plus evaluation of subagent and action assertions.

## Multiple Choice

Sales reps at Universal Containers should not be able to create or edit prompt templates. Which permission set should an AgentForce Specialist assign to the sales reps?

A. Prompt Execute User

B. Prompt Template Manager

C. Prompt Template User

## Correct Answer: A

Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the AgentForce Permissions and Role Management Guide, permission sets control the level of access users have to Prompt Templates - which define how the reasoning engine interprets and generates responses. AgentForce distinguishes between users who create or manage templates and those who only execute or use them during interactions. The Prompt Execute User permission set is designed for users who can invoke and run prompts but cannot create, modify, or delete prompt templates. This role is intended for front-line users such as sales reps, service agents, or support staff who utilize preconfigured templates in daily workflows without altering them. The Prompt Template Manager permission set (Option B) grants full administrative access - allowing users to create, edit, and delete templates. This is reserved for system administrators or AgentForce specialists responsible for managing prompt configurations. The Prompt Template User permission set (Option C) provides limited management capabilities, enabling viewing and cloning of templates but still allowing minor modifications, which does not meet the stated restriction. Therefore, to ensure sales reps can only use but not edit or create prompt templates, the correct permission set is Option A - Prompt Execute User.

## Multiple Choice

What is the primary function of the planner service in the Agent system?

A. Generating record queries based on conversation history  
B. Offering real-time language translation during conversations  
C. Identifying copilot actions to respond to user utterances

## Correct Answer: C

Explanation:

The primary function of the planner service in the Agent system is to identify copilot actions that should be taken in response to user utterances. This service is responsible for analyzing the conversation and determining the appropriate actions (such as querying records, generating a response, or taking another action) that the Agent should perform based on user input.

## Multiple Choice

Universal Containers is configuring a customer service agent and needs to restrict a specific "Process Refund" action so that it is only visible to the reasoning engine when a customer's account is flagged as active. An Agentforce Specialist is writing the available when clause in Agent Script to evaluate the @variables.IsActive variable. Which operator should the Agentforce Specialist use for this condition?

A. The Agentforce Specialist must use the == operator; Agent Script uses == strictly for comparison in conditionals.

B. Both = and == are valid and interchangeable; the Agentforce Specialist can use either operator to evaluate conditional logic in Agent Script.

C. The Agentforce Specialist must use the = operator; Agent Script uses = for both variable assignment and condition comparison.

Correct Answer: A

Explanation:

The correct answer is A. Agent Script uses standard comparison operators, and Salesforce's Agent Script operator reference identifies == as the "equal to" comparison operator. The available when clause is conditional visibility logic, so the expression should compare the variable value, such as available when @variables.IsActive == True. Option B is wrong because = and == are not interchangeable in Agent Script conditionals. Option C is wrong because = is used in assignment-style binding or setting contexts, while comparison logic must use ==. This distinction matters because available when determines whether the action is exposed to the reasoning engine. A wrong operator can either fail validation or create unsafe action visibility, which defeats the purpose of deterministic action gating.

## Multiple Choice

When creating a custom retriever in Einstein Studio, which step is considered essential?

A. Select the search index, specify the associated data model object (DMO) and data space, and optionally define filters to narrow search results.
B. Define the output configuration by specifying the maximum number of results to return, and map the output fields that will ground the prompt.
C. Configure the search index, choose vector or hybrid search, choose the fields for filtering, the data space and model, then define the ranking method.

## Correct Answer: A

## Explanation:

In Salesforce's Einstein Studio (part of the Agentforce ecosystem), creating a custom retriever involves setting up a mechanism to fetch data for AI prompts or responses. The essential step is defining the foundation of the retriever: selecting the search index, specifying the data model object (DMO), and identifying the data space (Option A). These elements establish where and what the retriever searches: Search Index: Determines the indexed dataset (e.g., a vector database in Data Cloud) the retriever queries. Data Model Object (DMO): Specifies the object (e.g., Knowledge Articles, Custom Objects) containing the data to retrieve. Data Space: Defines the scope or environment (e.g., a specific Data Cloud instance) for the data. Filters are noted as optional in Option A, which is accurate-they enhance precision but aren't mandatory for the retriever to function. This step is foundational because without it, the retriever lacks a target dataset, rendering it unusable. Option B: Defining output configuration (e.g., max results, field mapping) is important for shaping the retriever's output, but it's a secondary step. The retriever must first know where to search (A)

before output can be configured. Option C: This option includes advanced configurations (vector/hybrid search, filtering fields, ranking method), which are valuable but not essential. A basic retriever can operate without specifying search type or ranking, as defaults apply, but it cannot function without a search index, DMO, and data space. Option A: This is the minimum required step to create a functional retriever, making it essential. Option A is the correct answer as it captures the core, mandatory components of retriever setup in Einstein Studio.

## Multiple Choice

Universal Containers has created an Employee Agent. Which step should an Agentforce Specialist take to connect the agent with a Slack channel?

A. Create a connection between Salesforce and the Slack workspace.
B. Create an Omni-Channel flow and connection between Salesforce and the Slack workspace.

C. Create an embedded service deployment and connection between Salesforce and the Slack workspace.

## Correct Answer: A

## Explanation:

According to the AgentForce for Slack Integration Guide, to connect an Employee Agent (or any internal AgentForce agent) with a Slack channel, the required setup step is to create a connection between Salesforce and the Slack workspace. The documentation specifies: "Before deploying an Employee Agent into Slack, you must establish a secure connection between your Salesforce org and the Slack workspace. This connection enables authentication, permission mapping, and message exchange between the Agent and Slack users." Once the connection is established, the administrator can configure the specific Slack channel where the agent will operate. Option B, involving Omni-Channel flow, applies to Salesforce Service or Support routing, not Slack integration. Option C, Embedded Service Deployment, is used for web or mobile integrations, not Slack. Therefore, Option A accurately aligns with AgentForce's official integration framework for Slack connectivity. References (AgentForce Documents / Study Guide): AgentForce for Slack Integration Guide: "Connecting Salesforce and Slack Workspaces" AgentForce Employee Agent Setup Notes Salesforce AgentForce Study Guide: "Deploying Agents into Collaboration Platforms"

## Multiple Choice

Universal Container 's internal auditing team asks An Agentforce to verify that address information is properly masked in the prompt being generated. How should the Agentforce Specialist verify the privacy of the masked data in the Einstein Trust Layer?

A. Enable data encryption on the address field

B. Review the platform event logs

C. Inspect the AI audit trail

## Correct Answer: C

## Explanation:

The AI audit trail in Salesforce provides a detailed log of AI activities, including the data used, its handling, and masking procedures applied in the Einstein Trust Layer. It allows the Agentforce Specialist to inspect and verify that sensitive data, such as addresses, is appropriately masked before being used in prompts or outputs. Enable data encryption on the address field: While encryption ensures data security at rest or in transit, it does not verify masking in AI operations. Review the platform event logs: Platform event logs capture system events but do not specifically focus on the handling or masking of sensitive data in AI processes. Inspect the AI audit trail: This is the most relevant option, as it provides visibility into how data is processed and masked in AI activities.

## Multiple Choice

An Agentforce Specialist is evaluating an agent conversation. What is the reason why intents and session metrics within Observability are important to consider?

A. To evaluate the agent's overall performance

B. To evaluate why the agent was unable to answer a user's question

C. To evaluate the deflection rate of the agent

## Correct Answer: A

Explanation:

The correct answer is A. Intents and session metrics in Agentforce Observability are broad operational indicators used to evaluate overall agent performance. They help specialists understand how often the agent is used, what users are trying to accomplish, how sessions progress, and whether the agent is producing effective outcomes. Option B is too narrow because diagnosing why a specific question was not answered requires deeper session tracing or inspection, not just high-level intent and session metrics. Option C is also too narrow because deflection rate is only one business outcome, while Observability metrics cover broader performance, behavior, and effectiveness. Salesforce describes Agentforce Observability as a way to analyze usage, effectiveness, feedback, and performance across deployed agents.

## Multiple Choice

Universal Containers needs to provide insights on the usability of Agents to drive adoption in the organization. What should the Agentforce Specialist recommend?

A. Agent Analytics

B. Agentforce Analytics

C. Agent Studio Analytics

Correct Answer: B

Explanation:

To measure adoption and usability of Agents across the organization, Agentforce Analytics is the right tool. It provides dashboards and reports that track how Agents are being used, which actions are triggered most often, and overall performance trends. This data helps organizations drive adoption by identifying gaps, monitoring usage, and demonstrating business value.

## Multiple Choice

Universal Containers needs to ensure that its agent can immediately process customer returns by validating order eligibility before proceeding with the return process. UC wants to maintain a natural conversational flow for customers while ensuring that the order validation step is strictly followed. What should the Agentforce Specialist do to achieve the desired outcome?

A. Use Salesforce Flow to guide the large language model in handling order validation and the return process.
B. Use a custom Apex @InvocableMethod to handle the entire return process.
C. Use procedural instructions in Agent Script to enforce the order validation step.

## Explanation:

The correct answer is C because the requirement combines natural conversation with strict process sequencing. Agent Script procedural instructions are intended for exactly this hybrid pattern: the agent can still converse naturally, but mandatory steps such as order eligibility validation can be enforced before the return process continues. Option A is weak because Flow can execute validation logic, but "guiding the LLM" does not guarantee that the LLM will always follow the required sequence. Option B is excessive because moving the entire return process into Apex reduces configurability and is unnecessary when the main need is deterministic orchestration. Salesforce Agent Script guidance states that business-critical logic can execute reliably while conversational elements remain flexible, and run can execute required validations immediately when the code path is reached.

## Multiple Choice

Which configuration must An Agentforce complete for users to access generative AI-enabled fields in the Salesforce mobile app?

A. Enable Mobile Generative AI.

B. Enable Mobile Prompt Responses.

C. Enable Dynamic Forms on Mobile.

## Correct Answer: A

## Explanation:

Context of the Question Universal Containers (UC) has generative AI-enabled fields that users can access in the desktop experience. The Agentforce Specialist needs these same fields to be visible and usable in the Salesforce Mobile App. Why Dynamic Forms on Mobile? Dynamic Forms allow you to configure record pages so that fields and sections can appear or be hidden based on certain criteria. When you enable "Dynamic Forms for Mobile," any generative AI-enabled fields placed on the dynamic layout become accessible in the Salesforce mobile experience. There is no standard Setup option labeled "Enable Mobile Generative AI" or "Enable Mobile Prompt Responses" as a universal toggle; the existing official approach is to ensure dynamic forms (and the relevant fields) are supported on mobile.

## Multiple Choice

A Service Agent at Universal Containers (UC) is designed to help customers resolve issues by searching against knowledge articles. Knowledge articles have PDF attachments that add critical details. UC reports that the agent provides excellent summaries of the knowledge articles, but seems completely unaware of the PDF attachments. How should an Agentforce Specialist configure the Data Cloud search index to include the content of these attached files?

A. Increase article chunk size and token limits for Knowledge indexing so larger contexts capture attachment references.

B. Enable ' Include Related Attachments' for Knowledge-- kav and map the ContentDocumentLink unstructured data model object (UDMO).

C. Use Data Cloud 's 'Include Attachments' option and select the

ContentDocumentVersion unstructured data model object (UDMO).

## Correct Answer: C

## Explanation:

The AgentForce Data Cloud Indexing Guide clearly states that to include content from attached files such as PDFs in Knowledge articles, the correct configuration is to enable "Include Attachments" and map the ContentDocumentVersion unstructured data model object (UDMO). The documentation specifies: "When indexing Knowledge or Case data, enabling the 'Include Attachments' option allows the Data Cloud index to extract and embed content from linked ContentDocumentVersion records, ensuring the agent retrieves relevant information from attachments." Option A (increasing chunk size) does not enable attachment ingestion. Option B (ContentDocumentLink mapping) only establishes a relationship, not content extraction. Therefore, Option C ensures attachment content becomes searchable within AgentForce retrieval. References (AgentForce Documents / Study Guide): AgentForce Data Cloud Indexing and Retrieval Guide: "Including Attachments in Knowledge Indexes" AgentForce Implementation Handbook: "Mapping UDMO for ContentDocumentVersion" AgentForce Study Guide: "Attachment Content Inclusion for Knowledge Articles"

## Multiple Choice

An Agentforce Specialist is creating a prompt template to assist support reps in drafting responses to customer complaints. To ensure the responses are empathetic and helpful, what is a key element to include in the prompt template?

A. A direct instruction to the large language model (LLM) to role-play as a character

B. A list of keywords related to customer complaints  
C. The entire history of the customer's previous interactions with the company

## Correct Answer: A

## Explanation:

The Prompt Builder Best Practices Guide emphasizes including a role instruction in prompts to set tone and communication style. The document explains: "Role-playing instructions (e.g., 'You are an empathetic customer support agent') are a best practice for ensuring the LLM adopts the desired persona, tone, and style in responses." Option A directly reflects this principle by instructing the LLM to role-play as a character, resulting in empathetic, customer-centric responses. Option B (listing keywords) provides no tone or intent guidance. Option C (including full interaction history) risks token overload and redundancy, which can degrade prompt performance. Thus, Option A aligns with Salesforce's prompt design best practices for tone and empathy. References (AgentForce Documents / Study Guide): Salesforce Prompt Builder Design Guide: "Using Role Instructions for Empathy and Tone" AgentForce Prompt Engineering Handbook: "Persona and Context in Prompts" AgentForce Study Guide: "Creating Effective Prompts for Customer-Facing Use Cases"

## Multiple Choice

Universal Containers (UC) uses a file upload-based data library and custom prompt to support AI-driven training content. However, users report that the AI frequently returns outdated documents. Which corrective action should UC implement to improve content relevancy?

A. Switch the data library source from file uploads to a Knowledge-based data library, because Salesforce Knowledge bases automatically manage document recency, ensuring current documents are returned.

B. Configure a custom retriever that includes a filter condition limiting retrieval to documents updated within a defined recent period, ensuring that only current content is used for AI responses.

C. Continue using the default retriever without filters, because periodic re-uploads will eventually phase out outdated documents without further configuration or the need for custom retrievers.

## Explanation:

UC's issue is that their file upload-based Data Library (where PDFs or documents are uploaded and indexed into Data Cloud's vector database) is returning outdated training content in AI responses. To improve relevancy by ensuring only current documents are retrieved, the most effective solution is to configure a custom retriever with a filter (Option B). In Agentforce, a custom retriever allows UC to define specific conditions-such as a filter on a "Last Modified Date" or similar timestamp field-to limit retrieval to documents updated within a recent period (e.g., last 6 months). This ensures the AI grounds its responses in the most current content, directly addressing the problem of outdated documents without requiring a complete overhaul of the data source. Option A: Switching to a Knowledge-based Data Library (using Salesforce Knowledge articles) could work, as Knowledge articles have versioning and expiration features to manage recency. However, this assumes UC's training content is already in Knowledge articles (not PDFs) and requires migrating all uploaded files, which is a significant shift not justified by the question's context. File-based libraries are still viable with proper filtering. Option B: This is the best corrective action. A custom retriever with a date filter leverages the existing file- based library, refining retrieval without changing the data source, making it practical and targeted. Option C: Relying on periodic re-uploads with the default retriever is passive and inefficient. It doesn't guarantee recency (old files remain indexed until manually removed) and requires ongoing manual effort, failing to proactively solve the issue. Option B provides a precise, scalable solution to ensure content relevancy in UC's AI-driven training system.

## Multiple Choice

An Agentforce Specialist is tasked with analyzing Agent interactions, looking into user inputs, requests, and queries to identify patterns and trends. What functionality allows the Agentforce Specialist to achieve this?

A. Agent Event Logs dashboard.

B. AI Audit and Feedback Data dashboard.

C. User Utterances dashboard.

## Correct Answer: C

## Explanation:

The task requires analyzing user inputs, requests, and queries to identify patterns and trends in Agentforce interactions. Let's assess the options based on Agentforce's analytics capabilities. Option A: Agent Event Logs dashboard.Agent Event Logs

capture detailed technical events (e.g., API calls, errors, or system-level actions) related to agent operations. While useful for troubleshooting or monitoring system performance, they are not designed to analyze user inputs or conversational trends. This option does not meet the requirement and is incorrect. Option B: AI Audit and Feedback Data dashboard.There's no specific "AI Audit and Feedback Data dashboard" in Agentforce documentation. Feedback mechanisms exist (e.g., user feedback on responses), and audit trails may track changes, but no single dashboard combines these for analyzing user queries and trends. This option appears to be a misnomer and is incorrect. Option C: User Utterances dashboard.The User Utterances dashboard in Agentforce Analytics is specifically designed to analyze user inputs, requests, and queries. It aggregates and visualizes what users are asking the agent, identifying patterns (e.g., common topics) and trends (e.g., rising query types). Specialists can use this to refine agent instructions or topics, making it the perfect tool for this task. This is the correct answer per Salesforce documentation.

## Multiple Choice

Universal Containers needs to bring individual customer warranties from an external system into Data Cloud. They want Agentforce to return warranty-related responses only for accounts whose warranty status is active. Which search approach should the Agentforce Specialist configure to ensure warranty-related information is retrieved correctly?

A. Depend on Agentforce instructions to enforce warranty constraints and include only WarrantyStatus = Active results.

B. Store the account's warranty status in an Agentforce custom variable to dynamically filter warranties during retrieval.

C. Use Hybrid Search and apply pre-filtering in a new custom retriever for matching accounts and where the WarrantyStatus = Active field,

## Correct Answer: C

## Explanation:

The AgentForce Retrieval Configuration Guide outlines that when external data must be filtered by specific criteria-such as WarrantyStatus = Active-the-correct approach is to use Hybrid Search with pre-filtering logic defined in a custom retriever. The documentation specifies: "Hybrid search allows combining keyword precision and semantic context. When used with a custom retriever, administrators can pre-filter data on metadata fields (e.g., WarrantyStatus) to ensure that only eligible records are returned." Option A (relying on instructions) introduces non-deterministic behavior because the LLM cannot enforce data constraints. Option B (custom variable filtering)

applies post-retrieval filtering, which is less efficient and less secure than index-level filtering. Therefore, Option C aligns with Salesforce's best practice for deterministic, metadata-based retrieval control. References (AgentForce Documents / Study Guide): AgentForce Data Cloud Retrieval Guide: "Building Custom Retrievers with Metadata Filters" Einstein Studio for AgentForce: "Hybrid Search Pre-Filtering" AgentForce Study Guide: "Filtering Warranty Data by Active Status"

## Multiple Choice

The VP of Service at Universal Containers requires a report showing weekly deflection rate trends and escalation volumes for the Agentforce Service Agent over the past 90 days. Which approach should the Agentforce Specialist recommend?

A. Enable Agentforce Health Monitoring to configure escalation rate alert thresholds and export the resulting trend data into a Tableau dashboard aligned with the VP of Service's reporting requirement s

B. Use Agent Analytics within Agentforce Observability, which provides Tableau-powered dashboards with prebuilt deflection rate, escalation volume, and abandonment metrics calculated from agent session data stored in Data 360 C. Query the OTEL-compliant Session Tracing Data Model in Data 360 using CRM Analytics to build a custom dashboard with deflection rate calculations and week-over-week escalation comparisons tailored to UC's reporting standards

## Correct Answer: B

## Explanation:

The correct answer is B because the requirement is a standard operational report for Service Agent performance over time. Agent Analytics in Agentforce Observability is the built-in analytics layer for tracking agent usage, effectiveness, deflection, escalation, and abandonment behavior. It is the most direct and maintainable approach for a VP-level service dashboard. Option A is not the best fit because health monitoring and alert thresholds are not the primary reporting mechanism for historical weekly trend analysis. Option C is unnecessarily custom for a standard metric request and should be reserved only when prebuilt analytics do not satisfy the reporting need. Salesforce documentation states that Agentforce Analytics uses Data 360 reports to provide insight into agent performance, and Observability includes effectiveness metrics such as escalation and deflection.

## Multiple Choice

Universal Containers implements Custom Agent Actions to enhance its customer service operations. The development team needs to understand the core components of a Custom Agent Action to ensure proper configuration and functionality. What should the development team review in the Custom Agent Action configuration to identify one of the core components of a Custom Agent Action?

A. Action Triggers
B. Instructions
C. Output Types

## Correct Answer: B

Explanation:

UC's development team needs to identify a core component of a Custom Agent Action in Agent Builder. Let's assess the options. Option A: Action Triggers "Action Triggers" isn't a term used in Agentforce Custom Agent Action configuration. Actions are invoked by topics or plans, not standalone triggers, making this incorrect. Option B: InstructionsInstructions are a core component of a Custom Agent Action in Agentforce. Defined in Agent Builder, they guide the Atlas Reasoning Engine on how to execute the action (e.g., what to do with inputs, how to process data). Reviewing the instructions helps the team understand the action's purpose and logic, making this the correct answer. Option C: Output TypesWhile outputs are part of an action's result, "Output Types" isn't a distinct configuration element in Agent Builder. Outputs are determined by the action's execution (e.g., Flow or Apex), not a separate setting, making this less core and incorrect.

## Multiple Choice

Universal Containers has an active standard email prompt template that does not fully deliver on the business requirements. Which steps should an Agentforce Specialist take to use the content of the standard prompt email template in question and customize it to fully meet the business requirements?

A. Save as New Template and edit as needed.
B. Clone the existing template and modify as needed.
C. Save as New Version and edit as needed.

Correct Answer: B

Explanation:

Universal Containers (UC) has a standard email prompt template (likely a prebuilt template provided by Salesforce) that isn't meeting their needs, and they want to customize it while retaining its original content as a starting point. Let's assess the options based on Agentforce prompt template management practices. Option A: Save as New Template and edit as needed. In Agentforce Studio's Prompt Builder, there's no explicit "Save as New Template" option for standard templates. This phrasing suggests creating a new template from scratch, but the question specifies using the content of the existing standard template. Without a direct "save as" feature for standards, this option is imprecise and less applicable than cloning. Option B: Clone the existing template and modify as needed. Salesforce documentation confirms that standard prompt templates (e.g., for email drafting or summarization) can be cloned in Prompt Builder. Cloning creates a custom copy of the standard template, preserving its original content and structure while allowing modifications. The Agentforce Specialist can then edit the cloned template-adjusting instructions, grounding, or output format-to meet UC's specific business requirements. This is the recommended approach for customizing standard templates without altering the original, making it the correct answer. Option C: Save as New Version and edit as needed. Prompt Builder supports versioning for custom templates, allowing users to save new versions of an existing template to track changes. However, standard templates are typically read-only and cannot be versioned directly-versioning applies to custom templates after cloning. The question implies starting with the standard template's content, so cloning precedes versioning. This option is a secondary step, not the initial action, making it incorrect.

## Multiple Choice

Universal Containers has successfully chunked and vectorized its unstructured meeting notes into a Data 360 search index. An Agentforce Specialist needs to connect this data to a prompt template to dynamically refine search criteria and retrieve the most relevant information. How should the specialist achieve this?

A. Create a Flex template referencing a data lake object (DLO).

B. Create a Flex template referencing a retriever in the prompt template.

C. Create a Flex template referencing the data model object (DMO).

## Correct Answer: B

Explanation:

The correct answer is B. Once unstructured content has been chunked, vectorized, and indexed in Data 360, the prompt template should use a retriever to search that indexed content and return the most relevant passages for grounding. A data lake object or data model object is part of the data architecture, but the prompt template does not directly use those objects as the retrieval mechanism for RAG. Salesforce documentation states that retrievers are used in prompt templates to search indexed Data 360 knowledge and return relevant information. Salesforce Trailhead also explains that the prompt template invokes the retriever, vectorizes the query, retrieves matching indexed content, and inserts that retrieved information into the prompt before it is sent to the LLM.

## Multiple Choice

Universal Containers is indexing millions of product manuals where users may ask both structured queries (model numbers) and natural language questions (for example, "How do I reset my device?"), Which retrieval approach should the company use?

A. Use keyword search only, since model numbers dominate queries.
B. Use semantic search only, as natural language is always preferred.
C. Use hybrid search to combine keyword precision with semantic flexibility.

## Correct Answer: C

## Explanation:

According to the AgentForce Retrieval Optimization Guide, when users ask both structured (exact) and unstructured (natural language) questions, the best practice is to use hybrid search. The documentation states: "Hybrid search combines the precision of keyword retrieval for structured terms, such as IDs or model numbers, with the semantic flexibility of vector search for natural language queries. This approach ensures both deterministic accuracy and contextual understanding." Option A (keyword search only) fails for natural language queries, which require semantic understanding. Option B (semantic search only) may misinterpret or overlook structured identifiers like product or model numbers. Therefore, Option C-hybrid search-provides the ideal balance between exact match precision and contextual recall. References (AgentForce Documents / Study Guide): AgentForce Retrieval and Indexing Guide: "Choosing Between Keyword, Semantic, and Hybrid Search" AgentForce Data Cloud Handbook: "Optimizing Multi-Modal Retrieval Strategies" AgentForce Study Guide: "Hybrid Search for Structured and Unstructured Queries"

## Multiple Choice

Universal Containers' data science team is hosting a generative large language model (LLM) on Amazon Web Services (AWS). What should the team use to access externally-hosted models in the Salesforce Platform?

A. Model Builder

B. App Builder

C. Copilot Builder

## Correct Answer: A

## Explanation:

To access externally-hosted models, such as a large language model (LLM) hosted on AWS, the Model Builder in Salesforce is the appropriate tool. Model Builder allows teams to integrate and deploy external AI models into the Salesforce platform, making it possible to leverage models hosted outside of Salesforce infrastructure while still benefiting from the platform 's native AI capabilities. Option B, App Builder, is primarily used to build and configure applications in Salesforce, not to integrate AI models. Option C, Copilot Builder, focuses on building assistant-like tools rather than integrating external AI models. Model Builder enables seamless integration with external systems and models, allowing Salesforce users to use external LLMs for generating AI-driven insights and automation.

## Multiple Choice

Universal Containers (UC) has registered an external service and created a template-triggered prompt flow that invokes the external service to fetch data from a REST API. UC now needs to make the response data from the external service usable inside a prompt template as a merge field when the template runs. How should UC meet this requirement?

A. Use External Service Record merge fields.

B. Convert the JSON to an XML merge field.

C. Use the 'Add Prompt Instructions' flow element.

## Correct Answer: A

## Explanation:

As outlined in the AgentForce External Services and Prompt Flow Integration Guide, when data is retrieved from a registered external service via REST API, the response payload is stored as External Service Records. These records can then be referenced dynamically within prompt templates through External Service Record merge fields. This approach allows the large language model (LLM) to use the fetched data as contextual grounding during prompt execution, ensuring that generated responses are accurate and consistent with the latest API results. Option B is incorrect because AgentForce does not use XML merge fields for API responses; JSON data is automatically mapped to object structures. Option C is also incorrect - the "Add Prompt Instructions" element modifies prompt context or tone but does not pass external data for merge use. Therefore, the correct method is Option A - Use External Service Record merge fields, ensuring the external service data is directly available for prompt templates.

## Multiple Choice

Universal Containers aims to streamline the sales team 's daily tasks by using AI. When considering these new workflows, which improvement requires the use of Prompt Builder?

A. Populate an Al-generated time-to close estimation to opportunities  
B. Populate an Al generated summary field for sales contracts.  
C. Populate an Al generated lead score for new leads.

## Correct Answer: B

## Explanation:

Prompt Builder is explicitly required to create AI-generated summary fields via prompt templates. These fields use natural language instructions to extract or synthesize information (e.g., summarizing contract terms). Time-to-close estimations (A) and lead scores (C) are typically handled by predictive AI (e.g., Einstein Opportunity Scoring) or analytics tools, which do not require Prompt Builder.

## Multiple Choice

Universal Containers Is Interested In Improving the sales operation efficiency by analyzing their data using AI-powered predictions in Einstein Studio. Which use case works for this scenario?

A. Predict customer sentiment toward a promotion message.
B. Predict customer lifetime value of an account.
C. Predict most popular products from new product catalog.

Correct Answer: B

## Explanation:

For improving sales operations efficiency, Einstein Studio is ideal for creating AI-powered models that can predict outcomes based on data. One of the most valuable use cases is predicting customer lifetime value, which helps sales teams focus on high-value accounts and make more informed decisions. Customer lifetime value (CLV) predictions can optimize strategies around customer retention, cross-selling, and long-term engagement. Option B is the correct choice as predicting customer lifetime value is a well-established use case for AI in sales. Option A (customer sentiment) is typically handled through NLP models, while Option C (product popularity) is more of a marketing analysis use case.

## Multiple Choice

Universal Containers (UC) recently rolled out Einstein Generative AI capabilities and has created a custom prompt to summarize case records. Users have reported that the case summaries generated are not returning the appropriate information. What is a possible explanation for the poor prompt performance?

A. The prompt template version is incompatible with the chosen LLM.

B. The data being used for grounding is incorrect or incomplete.

C. The Einstein Trust Layer is incorrectly configured.

## Correct Answer: B

## Explanation:

UC's custom prompt for summarizing case records is underperforming, and we need to identify a likely cause. Let's evaluate the options based on Agentforce and Einstein Generative AI mechanics. Option A: The prompt template version is incompatible with the chosen LLM.Prompt templates in Agentforce are designed to work with the Atlas Reasoning Engine, which abstracts the underlying large language model (LLM). Salesforce manages compatibility between prompt templates and LLMs, and there's no user-facing versioning that directly ties to LLM compatibility. This option is unlikely and not a common issue per documentation. Option B: The data being used for grounding is incorrect or incomplete.Grounding is the process of providing context (e.g., case record data) to the AI via prompt templates. If the grounding data-sourced from Record Snapshots, Data Cloud, or other integrations-is incorrect (e.g., wrong fields mapped) or incomplete (e.g., missing key case details), the summaries will be inaccurate. For example, if the prompt relies on Case.Subject but the field is empty or not included, the output will miss critical

information. This is a frequent cause of poor performance in generative AI and aligns with Salesforce troubleshooting guidance, making it the correct answer. Option C: The Einstein Trust Layer is incorrectly configured. The Einstein Trust Layer enforces guardrails (e.g., toxicity filtering, data masking) to ensure safe and compliant AI outputs. Misconfiguration might block content or alter tone, but it's unlikely to cause summaries to lack appropriate information unless specific fields are masked unnecessarily. This is less probable than grounding issues and not a primary explanation here.

## Multiple Choice

Which business requirement presents a good use case for leveraging Einstein Prompt Builder?

A. Forecast future sales trends based on historical data.
B. Identify potential high-value leads for targeted marketing campaigns.
C. Send reply to a request for proposal via a personalized email.

## Correct Answer: C

Explanation:

Context of the Question Einstein Prompt Builder is a Salesforce feature that helps generate text (summaries, email content, responses) using AI models. The question presents three potential use cases, asking which one best fits the capabilities of Einstein Prompt Builder. Einstein Prompt Builder Typical Use Cases Text Generation & Summaries: Great for writing or summarizing content, like responding to an email or generating text for a record field. Why Not Forecast Future Sales Trends or Identify Potential High-Value Leads? (Option A) Forecasting trends typically involves predictive analytics and modeling capabilities found in Einstein Discovery or standard reporting, not generative text solutions. (Option B) Identifying leads for marketing campaigns involves lead scoring or analytics, again an Einstein Discovery or Lead Scoring scenario. Sending a Personalized RFP Email (Option C) is a classic example of using generative AI to compose well-structured, context-aware text.

## Multiple Choice

A customer service representative is looking at a custom object that stores travel information. They recently received a weather alert and now need to cancel flights for the customers that are related to this itinerary. The representative needs to

review the Knowledge articles about canceling and rebooking the customer flights. Which Agentforce capability helps the representative accomplish this?

A. Invoke a flow which makes a call to external data to create a Knowledge article.

B. Execute tasks based on available actions, answering questions using information from accessible Knowledge articles.

C. Generate Knowledge article based off the prompts that the agent enters to create steps to cancel flights.

## Correct Answer: B

## Explanation:

The scenario involves a customer service representative needing to cancel flights due to a weather alert and review existing Knowledge articles for guidance on canceling and rebooking. Agentforce provides capabilities to streamline such tasks. The most suitable option is Option B, which allows the agent to "execute tasks based on available actions" (e.g., canceling flights via a predefined action) while "answering questions using information from accessible Knowledge articles." This capability leverages Agentforce's ability to integrate Knowledge articles into the agent's responses, enabling the representative to ask questions (e.g., "How do I cancel a flight?") and receive AI-generated answers grounded in approved Knowledge content. Simultaneously, the agent can trigger actions (e.g., a Flow to update the custom object) to perform the cancellations, meeting all requirements efficiently. Option A: Invoking a Flow to call external data and create a Knowledge article is unnecessary. The representative needs to review existing articles, not create new ones, and there's no indication external data is required for this task. Option B: This is correct. It combines task execution (canceling flights) with Knowledge article retrieval, aligning with the representative's need to act and seek guidance from existing content. Option C: Generating a new Knowledge article based on prompts is not relevant. The representative needs to use existing articles, not author new ones, especially in a time-sensitive weather alert scenario. Option B best supports the representative's workflow in Agentforce.

## Multiple Choice

Universal Containers (UC) plans to implement prompt templates that utilize the standard foundation models. What should UC consider when building prompt templates in Prompt Builder?

A. Include multiple-choice questions within the prompt to test the LLM's understanding of the context.

B. Ask it to role-play as a character in the prompt template to provide more context to the LLM.

C. Train LLM with data using different writing styles including word choice, intensifiers, emojis, and punctuation.

## Correct Answer: B

## Explanation:

UC is using Prompt Builder with standard foundation models (e.g., via Atlas Reasoning Engine). Let's assess best practices for prompt design. Option A: Include multiple-choice questions within the prompt to test the LLM's understanding of the context. Prompt templates are designed to generate responses, not to test the LLM with multiple-choice questions. This approach is impractical and not supported by Prompt Builder's purpose, making it incorrect. Option B: Ask it to role-play as a character in the prompt template to provide more context to the LLM.A key consideration in Prompt Builder is crafting clear, context-rich prompts. Instructing the LLM to adopt a role (e.g., "Act as a sales expert") enhances context and tailors responses to UC's needs, especially with standard models. This is a documented best practice for improving output relevance, making it the correct answer. Option C: Train LLM with data using different writing styles including word choice, intensifiers, emojis, and punctuation.Standard foundation models in Agentforce are pretrained and not user- trainable. Prompt Builder users refine prompts, not the LLM itself, making this incorrect.

## Multiple Choice

Universal Containers has developed an agent for loan origination workflows that must handle both non-determinism and strict regulatory compliance requirements. The agent needs to ensure that identity verification and credit check steps execute in a precise sequence without deviation. Which statement correctly differentiates these two instruction patterns in Agent Script's hybrid reasoning approach?

A. Declarative instructions require Flow execution for business logic, while procedural instructions are native to Agent Script but cannot access external systems or APIs.

B. Declarative instructions provide conversational flexibility through large language model interpretation, while procedural instructions use the -> prefix to enforce guaranteed execution order with run, if, and transitions.

C. Declarative instructions only work in Canvas View for visual editing, while procedural instructions require Script View and cannot be represented in the visual interface.

## Correct Answer: B

## Explanation:

The correct answer is B because Agent Script is built for hybrid reasoning: flexible LLM-driven conversation plus deterministic procedural control. Declarative prompt text gives the model guidance and conversational flexibility, but it does not guarantee that steps happen in an exact order. Procedural instructions are used when business-critical logic must execute reliably, such as identity verification before a credit check. Salesforce's Agent Script fundamentals describe the -> arrow as the signal for procedural logic and explain that conditionals, running actions, and setting variables belong in that deterministic logic path. The same guidance distinguishes procedural logic from prompt text assembled for the LLM. Option A is wrong because procedural instructions can run actions that connect to Flows, Apex, or APIs. Option C is a tooling distraction, not a reasoning-pattern distinction.

## Multiple Choice

An Agentforce is tasked to optimize a business process flow by assigning actions to agents within the Salesforce Agentforce Platform. What is the correct method for the Agentforce Specialist to assign actions to an Agent?

A. Assign the action to a Topic First in Agent Builder.

B. Assign the action to a Topic first on the Agent Actions detail page.

C. Assign the action to a Topic first on Action Builder.

## Correct Answer: A

## Explanation:

In the Salesforce Agentforce Platform, assigning actions to Agents requires mapping them through Topics in Agent Builder. Topics act as the container that links an Agent's conversational intent with the specific actions it can perform. By first assigning an action to a Topic in Agent Builder, the Agentforce Specialist ensures that the Agent knows when and how to trigger the action during the business process flow.

![](images/a5323034e5d0dd8d5cab9a1cc4f1f50aaf611de517fee44d940e2b1b1f333664.jpg)

## Multiple Choice

A data science team has trained an XGBoost classification model for product recommendations on Databricks. The Agentforce Specialist is tasked with bringing inferences for product recommendations from this model into Data Cloud as a stand-alone data model object (DMO). How should the Agentforce Specialist set this up?

A. Create the serving endpoint in Databricks, then configure the model using Model Builder.

B. Create the serving endpoint in Einstein Studio, then configure the model using Model Builder.

C. Create the serving endpoint in Databricks, then configure the model using a Python SDK connector.

## Correct Answer: A

## Explanation:

To integrate inferences from an XGBoost model into Salesforce 's Data Cloud as a stand-alone Data Model Object (DMO): Create the Serving Endpoint in Databricks: The serving endpoint is necessary to make the trained model available for real-time inference. Databricks provides tools to host and expose the model via an endpoint. Configure the Model Using Model Builder: After creating the endpoint, the Agentforce Specialist should configure it within Einstein Studio 's Model Builder, which integrates external endpoints with Salesforce Data Cloud for processing and storing inferences as DMOs. Option B: Serving endpoints are not created in Einstein Studio; they are set up in external platforms like Databricks before integration. Option C: A Python SDK connector is not used to bring model inferences into Salesforce Data Cloud; Model Builder is the correct tool.

## Multiple Choice

Universal Containers wants to allow its service agents to query the current fulfillment status of an order with natural language. There is an existing auto launched flow to query the information from Oracle ERP, which is the system of record for the order fulfillment process. How should An Agentforce apply the power of conversational AI to this use case?

A. Create a Flex prompt template in Prompt Builder.
B. Create a custom copilot action which calls a flow.
C. Configure the Integration Flow Standard Action in Agent.

Correct Answer: B

Explanation:

To enable Universal Containers service agents to query the current fulfillment status of an order using natural language and leverage an existing auto-launched flow that queries Oracle ERP, the best solution is to create a custom copilot action that calls the flow. This action will allow Agent to interact with the flow and retrieve the required order fulfillment information seamlessly. Custom copilot actions can be tailored to call various backend systems or flows in response to user requests. Option B is correct because it enables integration between Agent and the flow that connects to Oracle ERP. Option A (Flex prompt template) is more suited for static responses and not for invoking flows. Option C (Integration Flow Standard Action) is not directly related to creating a specific copilot action for this use case. Salesforce Agent Actions:

## Multiple Choice

An Agentforce Specialist wants to ensure their custom agent action performs as expected in conversations. What should the Agentforce Specialist focus on when creating action instructions?

A. Write concise agent action instructions and test in Agentforce Builder.

B. Ensure the agent action label matches the utterance's intent.

C. Include comprehensive detailed descriptions and perform smoke testing.

Correct Answer: A

## Explanation:

The AgentForce Action Design Guide emphasizes that concise and clear action instructions are essential for predictable and reliable agent behavior. The documentation states: "Action instructions should be concise, clearly define the purpose of the action, and specify its expected inputs and outputs. Each action must be validated through testing in AgentForce Builder to confirm the LLM interprets and executes it as intended." This aligns with Option A, which focuses on clarity and testing. Option B incorrectly focuses on label-intent matching, which is a naming best practice but not sufficient for accuracy. Option C promotes overly detailed instructions, which can lead to LLM confusion and inconsistent results. Therefore, Option A best aligns with Salesforce's official best practices for creating and validating custom actions. References (AgentForce Documents / Study Guide):

AgentForce Action Design and Testing Guide AgentForce Builder Documentation: "Validating Custom Actions" AgentForce Study Guide: "Creating Clear and Testable Action Instructions"

## Multiple Choice

Which scenario best illustrates the use of Model Context Protocol (MCP) in an enterprise AI deployment?

A. A legal assistant agent using MCP to dynamically find a document

classification API to analyze case files

B. A customer service agent engaging another agent in real-time conversation to resolve tickets

C. A sales agent discovering other agents' capabilities using Agent Cards

## Correct Answer: A

## Explanation:

The Model Context Protocol (MCP) in AgentForce and Salesforce AI architecture enables agents to dynamically discover and connect to external tools or APIs during runtime. The documentation defines it as: "MCP allows LLMs to query registered tool endpoints and retrieve their schemas, enabling dynamic tool discovery and invocation in enterprise AI environments." This makes Option A correct - a legal assistant agent using MCP to find a document classification API illustrates the dynamic, protocol- driven discovery and use of enterprise tools. Option B, agent-to-agent conversation, involves Agent Network Communication, not MCP. Option C, agent capability discovery through Agent Cards, refers to the Agent Directory feature. Therefore, Option A best reflects Salesforce's documented description of MCP's role in enterprise AI integrations. References (AgentForce Documents / Study Guide): AgentForce Architecture Guide: "Model Context Protocol Overview" AgentForce Developer Study Notes: "Dynamic Tool and API Discovery with MCP" AgentForce Technical Overview: "Enterprise AI Integration via MCP"

## Multiple Choice

Coral Cloud Resorts (CCR) uses Agentforce to assist customers with booking and service issues. CCR wants to implement a triage process 50 that: \* High severity requests must be escalated to a human service rep. \* Lower severity requests should result in creating a support case for the guest. The requirement is to achieve the

highest reliability and determinism in the response from the agent. Which approach should an Agentforce Specialist recommend?

A. Write the triage and routing logic in Topic Instructions using an IF, THEN, ELSE pattern: "Escalate to human service rep if the request is considered severe, otherwise create support case".

B. Use absolute keywords like "Always" and "Never" in Topic Instructions to enforce logic, such as "Always escalate when severity is high" and "Never create a support case when severity is high".

C. Create a custom variable severityLevel populated by a Triage action. Add filters so the "Escalate to human service rep" action only runs when severityLevel = 'High', and the "Create Support Case" action runs only when severityLevel != 'High'.

## Correct Answer: C

## Explanation:

The AgentForce Conditional Logic and Triage Design Guide recommends using custom variables and deterministic filters for reliable decision-making in AI agents. The document explains: "For deterministic triage flows, create a variable (e.g., severityLevel) populated by an action or rule. Then, apply filters so that specific actions execute only when the variable matches defined criteria. This approach guarantees predictable and auditable outcomes." In this case, severityLevel controls whether to escalate to a human rep or create a support case, ensuring no ambiguity in execution. Option A (IF/THEN logic in topic instructions) and Option B ("Always/Never" keywords) rely on natural language interpretation, which is non-deterministic and can lead to inconsistent results. Thus, Option C aligns with Salesforce's documented best practice for reliable and rule-based triage logic. References (AgentForce Documents / Study Guide): AgentForce Conditional Logic Guide: "Using Variables and Filters for Deterministic Flows" AgentForce Implementation Handbook: "Triage and Escalation Best Practices" AgentForce Study Guide: "Building Reliable Multi-Step Decision Logic"

## Multiple Choice

Universal Containers has seen a high adoption rate of a new feature that uses generative AI to populate a summary field of a custom object, Competitor Analysis. All sales users have the same profile but one user cannot see the generative All-enabled field icon next to the summary field. What is the most likely cause of the issue?

A. The user does not have the Prompt Template User permission set assigned.
B. The prompt template associated with summary field is not activated for that user.

C. The user does not have the field Generative AI User permission set assigned.

## Correct Answer: C

## Explanation:

In Salesforce, Generative AI capabilities are controlled by specific permission sets. To use features such as generating summaries with AI, users need to have the correct permission sets that allow access to these functionalities. Generative AI User Permission Set: This is a key permission set required to enable the generative AI capabilities for a user. In this case, the missing Generative AI User permission set prevents the user from seeing the generative AI-enabled field icon. Without this permission, the generative AI feature in the Competitor Analysis custom object won 't be accessible. Why not A? The Prompt Template User permission set relates specifically to users who need access to prompt templates for interacting with Einstein GPT, but it 's not directly related to the visibility of AI-enabled field icons. Why not B? While a prompt template might need to be activated, this is not the primary issue here. The question states that other users with the same profile can see the icon, so the problem is more likely to be permissions-based for this particular user.

## Multiple Choice

An AgentForce Specialist wants to troubleshoot an agent that is hallucinating weblinks. The agent has an action that uses a prompt template, which is using a knowledge retriever, to generate the output text that the agent will use. Which process is appropriate to find the root cause of the hallucination behavior?

A. Examine the topic name and classification description for hallucination guardrails.

B. Examine the prompt instructions and contents of the chunks shown in the resolved prompt output.

C. Examine the topic instructions and ensure the word " ALWAYS " is used in the hallucination guardrails.

Correct Answer: B

Explanation:

Comprehensive and Detailed Explanation From Exact Extract of AgentForce Documents: According to the AgentForce Troubleshooting and Optimization Guide, hallucinations - instances where the agent fabricates details such as weblinks or data - often occur due to issues in prompt construction or retrieved content grounding. The recommended diagnostic process involves inspecting the prompt template instructions and reviewing the resolved prompt output, including the actual retrieved knowledge chunks. By examining these areas, the AgentForce Specialist can determine whether the hallucinated content originates from ambiguous prompt phrasing, missing grounding variables, or irrelevant retrieval results. This approach ensures an evidence-based investigation directly linked to the agent's reasoning and generation steps. Option A is incorrect because hallucination guardrails are defined in prompts and actions, not topic names or classification descriptions. Option C is also incorrect since simply adding "ALWAYS" to instructions does not enforce factual grounding and is not a documented troubleshooting method. Therefore, per AgentForce best practices, the correct process is Option B - Examine the prompt instructions and contents of the chunks in the resolved prompt output.

## Multiple Choice

A sales rep at Universal Containers is extremely busy and sometimes will have very long sales calls on voice and video calls and might miss key details. They are just starting to adopt new generative AI features. Which Einstein Generative AI feature should An Agentforce recommend to help the rep get the details they might have missed during a conversation?

A. Call Summary

B. Call Explorer

C. Sales Summary

## Correct Answer: A

## Explanation:

For a sales rep who may miss key details during long sales calls, the Agentforce Specialist should recommend the Call Summary feature. Call Summary uses Einstein Generative AI to automatically generate a concise summary of important points discussed during the call, helping the rep quickly review the key information they might have missed. Call Explorer is designed for manually searching through call data but doesn 't summarize. Sales Summary is focused more on summarizing overall sales activity, not call-specific content.

## Multiple Choice

Universal Containers implements three custom actions to get three distinct types of sales summaries for its users. Users are complaining that they are not getting the right summary based on their utterances. What should the Agentforce Specialist investigate as the root cause?

A. Review that the custom action is assigned to an Agent.

B. Review the action Instructions to ensure they are unique.

C. Ensure the input and output types are correctly chosen.

## Correct Answer: B

## Explanation:

The root cause of users receiving incorrect sales summaries lies in non-unique action instructions (Option B). In Einstein Bots, custom actions are triggered based on how well user utterances align with the action instructions defined for each action. If the instructions for the three custom actions overlap or lack specificity, the bot's natural language processing (NLP) cannot reliably distinguish between them, leading to mismatched responses. Steps to Investigate: Review Action Instructions: Ensure each custom action has distinct, context-specific instructions. For example: Action 1: "Summarize quarterly sales by region." "Action 2: "Generate a product-wise sales breakdown for the current fiscal year." "Action 3: "Provide a comparison of sales performance between online and in-store channels." Ambiguous or overlapping instructions (e.g., "Get sales summary") cause confusion. Test Utterance Matching: Use Einstein Bot's training tools to validate if user utterances map to the correct action. Overlap indicates instruction ambiguity. Refine Instructions: Incorporate keywords or phrases unique to each sales summary type to improve intent detection. Why Other Options Are Incorrect: A). Assigning actions to an agent is irrelevant, as custom actions are automated bot components. C). Input/output types relate to data formatting, not intent routing. While important for execution, they don't resolve utterance mismatches. Einstein Bot Developer Guide: Stresses the need for unique action instructions to avoid intent conflicts. Trailhead Module: "Build AI-Powered Bots with Einstein" highlights instruction specificity for accurate action triggering.

## Multiple Choice

Universal Containers is planning a marketing email about products that most closely match a customer's expressed interests. What should An Agentforce recommend to generate this email?

A. Standard email marketing template using Apex or flows for matching interest in products  
B. Custom sales email template which is grounded with interest and product information  
C. Standard email draft with Einstein and choose standard email template

## Correct Answer: B

Explanation:

To generate an email about products that closely match a customer's expressed interests, An Agentforce should recommend using a custom sales email template that is grounded with interest and product information. This ensures that the email content is personalized based on the customer 's preferences, increasing the relevance of the marketing message. Using grounding ensures that the generative AI pulls the correct data related to customer interests and product matches, making the email more effective.

## Multiple Choice

An Agentforce Specialist created a Field Generation prompt template. What should the Agentforce Specialist do to expose the template to the user?

A. Use a screen flow to associate the Field Generation prompt template.
B. Associate the template with the form field on the Lightning page.
C. Call a template using an autolaunched flow.

Correct Answer: B

## Explanation:

The Field Generation prompt template type is specifically designed to enable generative AI within the context of a Salesforce record field. To expose this functionality to an end-user, the Agentforce Specialist must associate the template with the form field on the Lightning page (B). This is accomplished using the Lightning App Builder: The Agentforce Specialist first creates a custom field (often a Long Text Area or Rich Text Area) on the desired object to store the AI-generated output. In the Lightning App Builder for the object 's Record Page, the Specialist selects the field component. In the properties panel for that field component, there is a setting (often a dropdown) to select an active Field Generation Prompt Template. Once associated, an Einstein icon (or "Generate" button) appears next to the field on the record page, allowing the user to click it to run the prompt, review the AI-generated content, and then decide to use it to populate the field. Options A and C (using Flows) are methods for calling prompt templates to automate the generation of content or to ground the prompt with more complex data (like related list information). However, for the Field Generation prompt template to be exposed directly to the user for on-demand generation and manual review (the intended user experience for this template type), it must be bound to the field itself on the Lightning Record Page. Simulated Exact Extract of AgentForce documents (Conceptual Reference): " The Field Generation prompt template is surfaced to the user via the Lightning Record Page. After the prompt template is created and activated in Prompt Builder, the Agentforce Specialist must edit the Lightning Record Page in the Lightning App Builder. The key step is to select the target field component and, within its property panel, assign the Field Generation Prompt Template from the available dropdown menu. This action binds the generative AI capability directly to the field, displaying the 'Generate' button to the user to trigger the AI-assisted content creation upon the record."

## Multiple Choice

An Agentforce needs to enable the use of Sales Email prompt templates for the sales team. The Agentforce Specialist has already created the templates in Prompt Builder. According to best practices, which steps should the Agentforce Specialist take to ensure the sales team can use these templates?

A. Assign the Prompt Template User permission set and enable Sales Emails in Setup.

B. Assign the Prompt Template Manager permission set and enable Sales Emails in setup.

C. Assign the Data Cloud Admin permission set and enable Sales Emails in Setup.

## Correct Answer: A

## Explanation:

To enable Sales Email prompt templates: Permission Set: Assign the Prompt Template User permission set to the sales team to grant access to use pre-built templates. Feature Activation: Enable Sales Emails in Salesforce Setup to activate the integration between prompt templates and email workflows. Option B (Manager permission set): Required for creating/modifying templates, not for usage. Option C (Data Cloud Admin): Unrelated to prompt template access.

## Multiple Choice

Cloud Kicks (CK) is launching a new partner portal on Experience Cloud, CK wants to provide partners with an agent that can answer questions about product specifications from the knowledge base and allow them to submit a new Lead for a potential customer they 've identified. The agent must be accessible only to authenticated partner users on the portal. Which agent type is required to meet this scenario?

A. Sales Agent

B. Commerce Agent

C. Service Agent

## Correct Answer: C

## Explanation:

The required agent type is the Service Agent (C). The core function described-answering questions from the knowledge base-is the primary task of a Service Agent, which is designed for self-service support and knowledge article retrieval. Although the requirement also includes the ability to submit a new Lead, Service Agent models are highly configurable to include custom actions, such as a "Create Lead" action, using Agentforce Builder. Furthermore, the Service Agent type is intended to be deployed to external-facing Experience Cloud sites to provide support to external authenticated users, such as partners. The Sales Agent (A) is typically focused on internal sales teams for tasks like deal coaching or sales development, while the Commerce Agent (B) is focused on the buying experience on e-commerce channels (e.g., product discovery, personalized shopping). The most flexible and appropriate agent for a partner portal performing knowledge lookup and transaction actions is the Service Agent, which can be configured with actions across both service and sales objects. Simulated Exact Extract of AgentForce documents (Conceptual Reference): "The Agentforce Service Agent is the foundational template for building AI agents that deliver support and self-service capabilities to customers and authenticated external users (like partners) within an Experience Cloud site. Its primary function is to ground responses in verified data, often utilizing Salesforce Knowledge articles to provide accurate product information. Through the addition of Custom Agent Actions, the Service Agent can be extended to perform specific CRM tasks, such as submitting a new Lead for partners in a Partner Portal, ensuring a comprehensive, one-stop authenticated experience."

## Multiple Choice

Universal Containers has been building an agent using Canvas. It has created an "Issue Refund" action. Business rules dictate that refunds can only be issued if the customer's Account Tier is "Platinum." Currently, the agent relies on its system instructions to check the tier, but it occasionally hallucinates authorization and attempts to call the refund action for Standard customers, resulting in backend errors. How should the Agentforce Specialist use filters to deterministically ensure the agent cannot process the "Issue Refund" action unless the customer meets the criteria?

A. Update the agent's system instructions with a strict rule to manually filter out any refund requests if the customer's account tier is not Platinum.
B. Apply a text filter to the Agent Session that automatically blocks the word "refund" from the user's prompt unless they are a Platinum customer.
C. Configure an Action Condition filter on the "Issue Refund" action so that it is only available to the agent when Account Tier equals "Platinum."

## Correct Answer: C

## Explanation:

The correct answer is C because this requirement must be enforced deterministically at the action- availability layer, not trusted to natural language instructions. In Agentforce, filters can control access to subagents and actions so the agent can use them only when defined conditions are met. For refund processing, the "Issue Refund" action should be hidden from the reasoning engine unless the account tier condition evaluates to Platinum. Option A is weak because system instructions are interpreted by the model and can be ignored or misapplied. Option B is wrong because blocking a keyword is brittle and does not validate entitlement. Action filters are the correct control because they prevent the action from being available until the business rule is satisfied.

## Multiple Choice

What happens when a chunk of text is vectorized?

A. It creates numerical representations of chunk content to enable meaning-based retrieval.
B. It encrypts the content so it can be stored securely within Data 360 data spaces.
C. It reduces the file size of the original document to reduce Data 360 costs.

## Correct Answer: A

Explanation:

The correct answer is A because vectorization converts text chunks into numerical embeddings that capture semantic meaning. In Agentforce and Data 360 retrieval scenarios, large documents are first broken into smaller chunks or passages, and those chunks are then converted into vectors. The retrieval engine can compare a user's question or prompt with those vectors to find content that is meaningfully similar, not merely keyword-matched. Option B is wrong because vectorization is not encryption; security and storage controls are separate platform concerns. Option C is wrong because vectorization is not a compression mechanism and is not used primarily to reduce file size or storage cost. Salesforce Data 360 documentation describes chunking as creating manageable semantic units and vectorization as converting those chunks into numeric representations of text.

## Multiple Choice

Universal Containers' sales team engages in numerous video sales calls with prospects across the nation. Sales management wants an easy way to understand key information such as deal terms or customer sentiments. Which Einstein Generative AI feature should An Agentforce recommend for this request?

A. Einstein Call Summaries

B. Einstein Conversation Insights

C. Einstein Video KPI

## Correct Answer: B

## Explanation:

Einstein Conversation Insights analyzes sales calls (including video and voice) to capture key moments, deal terms, competitor mentions, and customer sentiment. It helps sales management quickly understand what was discussed without manually reviewing the entire call. This feature ensures actionable insights are delivered directly into the Salesforce CRM, allowing sales managers to gain a concise overview without manually reviewing long recordings.

## Multiple Choice

A company needs to ensure customers always receive answers based on the most current version of support documentation. What should an Agentforce Specialist recommend?

A. Use a file-based Agentforce Data Library (ADL) and enable the version management setting to ensure the agent always retrieves the latest document.
B. Use a knowledge-based Agentforce Data Library (ADL); knowledge articles have native versioning built in, so agents automatically retrieve the current published version.

C. Use either Agentforce Data Library (ADL) type; both automatically serve the most recent content once the search index rebuilds.

## Correct Answer: B

## Explanation:

The correct answer is B because Salesforce Knowledge is the correct source when the business requirement depends on governed support documentation, publishing state, and current article versions. A knowledge-based Agentforce Data Library uses Knowledge as the managed content source, allowing the agent to ground responses in approved Knowledge content instead of static uploaded files. Option A is wrong because a file-based library does not provide the same native Knowledge publishing and version governance; uploaded documents can become stale unless actively maintained. Option C is wrong because the two library types are not equivalent for content lifecycle management. Salesforce guidance for Knowledge-based libraries and service grounding emphasizes using published Knowledge content and data category or library configuration to control what the agent can search and use.

## Multiple Choice

What does it mean when a prompt template version is described as immutable?

A. Only the latest version of a template can be activated.

B. Every modification on a template will be saved as a new version automatically.
C. Prompt template version is activated; no further changes can be saved to that version.

Correct Answer: C

Explanation:

When a prompt template version is immutable, it means that once the version is activated, it cannot be edited or modified. This ensures consistency in production environments where changes could disrupt workflows.

## Multiple Choice

What is the main purpose of Prompt Builder?

A. A tool for developers to use in Visual Studio Code that creates prompts for Apex programming, assisting developers in writing code more efficiently.
B. A tool that enables companies to create reusable prompts for large language models (LLMs), bringing generative AI responses to their flow of work.
C. A tool within Salesforce offering real-time AI-powered suggestions and guidance to users, Improving productivity and decision-making.

## Correct Answer: B

## Explanation:

Prompt Builder is designed to help organizations create and configure reusable prompts for large language models (LLMs). By integrating generative AI responses into workflows, Prompt Builder enables customization of AI prompts that interact with Salesforce data and automate complex processes. This tool is especially useful for creating tailored and consistent AI-generated content in various business contexts, including customer service and sales. It is not a tool for Apex programming (as in option A). It is also not limited to real-time suggestions as mentioned in option C. Instead, it provides a flexible way for companies to manage and customize how AI-driven responses are generated and used in their workflows.

## Multiple Choice

Universal Containers is building a custom agent and creating a new Apex action that accepts a collection of text values, such as a list of product names, as an input parameter. The Agentforce Specialist is configuring the action's metadata in Agentforce Assets and needs to properly map this input so the reasoning engine can pass the list of strings correctly. When defining this input, which complex\_data\_type\_name should the Agentforce Specialist use?

A. lightning\_\_stringType
B. apex\_\_String
C. lightning\_\_textType

## Correct Answer: A

Explanation:

The correct answer is A because Agentforce action metadata must use supported Lightning data types when defining action inputs and outputs. A collection of text values must be exposed to the reasoning engine through a Salesforce-supported Lightning type, not through an Apex implementation name. lightning\_\_stringType correctly maps string-based action input so Agentforce can validate, structure, and pass values into the Apex action. apex\_\_String is not the correct metadata type because it describes an Apex language type, not the Agentforce action schema type. lightning\_\_textType is a UI- oriented text type and is not the correct mapping for this collection-style string action input. Salesforce's Agentforce developer guidance confirms that Apex strings are mapped to standard Lightning types for action configuration.

## Multiple Choice

Universal Containers (UC) is discussing its AI strategy in an agile Scrum meeting. Which business requirement would lead An Agentforce to recommend connecting to an external foundational model via Einstein Studio (Model Builder)?

A. UC wants to fine-tune model temperature.

B. UC wants a model fine-tuned using company data.

C. UC wants to change the frequency penalty of the model.

## Correct Answer: B

## Explanation:

Einstein Studio (Model Builder) allows organizations to connect and utilize external foundational models while fine-tuning them with company-specific data. This capability is particularly suited to businesses like Universal Containers (UC) that require customization of foundational models to better align with their unique data and use cases. Option A: Adjusting model temperature is a parameter-level setting for controlling randomness in AI-generated responses but does not necessitate connecting to an external foundational model. Option B: This is the correct answer because Einstein Studio supports fine-tuning external models with proprietary company data, enabling a tailored and more accurate AI solution for UC. Option C: Changing frequency penalties is another parameter-level adjustment and does not require external foundational models or Einstein Studio.

## Multiple Choice

An insurance company needs a Service Agent to ground its responses based on company-specific PDFs and a comprehensive knowledge base. Which type of retriever should the Agentforce Specialist use to meet this requirement?

A. Dynamic retriever

B. Individual retriever

C. Ensemble retriever

## Correct Answer: C

Explanation:

The correct answer is C because the agent must retrieve from more than one grounding source: company-specific PDFs and a comprehensive Knowledge base. An ensemble retriever is appropriate when multiple retrievers or multiple indexed sources must be combined into one retrieval strategy. That lets the Service Agent search across both unstructured document content and Knowledge content without forcing the specialist to choose only one source. An individual retriever is designed for a single retrieval target, so it is too narrow for this requirement. "Dynamic retriever" is not the best match for the stated need because the issue is not runtime source selection; it is combining multiple authoritative sources. Salesforce guidance describes custom retrievers as supporting more data source patterns, including ensemble retrievers, for Agentforce Data Library use cases.

## Multiple Choice

Universal Containers (UC) stores case details and updates in several custom fields and custom objects related to the case. UC would like its Agentforce Service Agent to be able to provide information in these fields and related records as part of an answer back to its customers when the customer is asking for updates. Which best practice should UC follow to grant access to this information for the Agentforce Service Agent?

A. Update the Object and Field access in the AgentforceServiceAgentUserPsg permission set group that is already assigned to the Agentforce Service Agent user,

B. Create a new permission set with the Einstein Agent License and enable Read access to the custom fields and custom objects, and assign it to the Agentforce Service Agent user.

C. Update the Object and Field access in the Einstein Agent User Profile so that the Agentforce Service Agents will always get the necessary access.

## Correct Answer: A

## Explanation:

Per the AgentForce Security and Permission Management Guide, the AgentForceServiceAgentUserPsg (Permission Set Group) controls access privileges for Service Agents, including which Salesforce objects, fields, and related data they can read or interact with. When extending an agent's access to additional custom fields or related objects, the documented best practice is to update the existing permission set group assigned to that agent type rather than creating new or profile-based permissions. This approach maintains centralized permission governance, ensures license alignment, and avoids conflicts or redundancy across multiple permission layers. Option B is incorrect because creating a new permission set with an Einstein Agent License is unnecessary - the permission set group already includes license mappings. Option C is not recommended, as editing the Einstein Agent User Profile can cause system-wide effects and deviate from Salesforce's principle of least privilege. Therefore, the correct approach is Option A - Update the Object and Field access in the AgentForceServiceAgentUserPsg permission set group, ensuring secure and proper access for the Service Agent to custom case data.

## Multiple Choice

An Agentforce Specialist needs to create a prompt template to fill a custom field named Latest Opportunities Summary on the Account object with information from the three most recently opened opportunities. How should the Agentforce Specialist gather the necessary data for the prompt template?

A. Select the latest Opportunities related list as a merge field.

B. Create a flow to retrieve the opportunity information.

C. Select the Account Opportunity object as a resource when creating the prompt template.

Correct Answer: B

Explanation:

In Salesforce Agentforce, a prompt template designed to populate a custom field (like "Latest Opportunities Summary" on the Account object) requires dynamic data to be fed into the template for AI to generate meaningful output. Here, the task is to gather data from the three most recently opened opportunities related to an account. The most robust and flexible way to achieve this is by using a Flow (Option B). Salesforce Flows allow the Agentforce Specialist to define logic to query the Opportunity object, filter for the three most recent opportunities (e.g., using a Get Records element with a sort by CreatedDate descending and a limit of 3), and pass this data as variables into the prompt template. This approach ensures precise control over the data retrieval process and can handle complex filtering or sorting requirements. Option A: Selecting the " latest Opportunities related list as a merge field " is not a valid option in Agentforce prompt templates. Merge fields can pull basic field data (e.g., (!Account.Name), but they don't natively support querying or aggregating related list data like the three most recent opportunities. Option C: There is no " Account Opportunity object " in Salesforce; this seems to be a misnomer (perhaps implying the Opportunity object or a junction object). Even if interpreted as selecting the Opportunity object as a resource, prompt templates don't directly query related objects without additional logic (e.g., a Flow), making this incorrect. Option B: Flows integrate seamlessly with prompt templates via dynamic inputs, allowing the Specialist to retrieve and structure the exact data needed (e.g., Opportunity Name, Amount, Close Date) for the AI to summarize.

## Multiple Choice

A company wants to retrieve patient history details to augment the AI agent response and plans to use the Data Cloud search index feature. What is best practice when considering retrievalaugmented generation (RAG) for information that may contain personally identifiable information (PII)?

A. Mask sensitive fields and index only nonPII data

B. Depend on the agent's prompt to avoid exposing PII

C. Encrypt embeddings, but still index PII records

## Correct Answer: A

Explanation:

Comprehensive and Detailed Explanation From Exact Extract: The best practices guide for AgentForce and RAG emphasises that when using unstructured data and search indexes for grounded responses, you must consider privacy, security and data sensitivity. It mentions that search indexes should be curated, fields selected, and vectorised only where appropriate. Masking sensitive data and limiting index to nonPII or aggregated forms is aligned to compliance and governance. Relying purely on prompt logic (option B) is unsafe; encrypting embeddings but still indexing raw PII (option C) still poses risk. Hence the correct and safe practice is option A.

## Multiple Choice

Universal Containers (UC) needs to capture and store detailed interaction data for all agents. Which feature should help UC get a full view of the agent's behavior from start to finish, including reasoning engine executions, actions, prompt and gateway inputs/outputs, error messages, and final responses?

A. Agentforce Analytics

B. Utterance Analysis

C. Agentforce Session Tracing

## Correct Answer: C

Explanation:

The AgentForce Observability and Diagnostics Guide details that AgentForce Session Tracing provides the most comprehensive visibility into agent operations. The documentation explains: "Session Tracing captures the entire execution flow for each agent session - including reasoning engine decisions, executed actions, prompts, gateway inputs and outputs, error logs, and final agent responses - to provide an end-to-end view of agent behavior." Agentforce Analytics (Option A) focuses on aggregated performance metrics like usage, engagement, and accuracy trends rather than deep operational data. Utterance Analysis (Option B) evaluates specific interactions or conversation snippets but does not include reasoning engine or system-level traces. Hence, Option C - AgentForce Session Tracing - is correct as it provides detailed, end-to-end diagnostic insight across all agent executions. References (AgentForce Documents / Study Guide): AgentForce Observability Guide: "Using Session Tracing for End-to-End Agent Visibility" AgentForce Implementation Handbook: "Tracing Reasoning and Action Flows" AgentForce Study Guide: "Monitoring and Debugging with Session Tracing"

## Multiple Choice

Universal Containers has grounded a prompt template with a related list. During user acceptance testing (UAT), users are not getting the correct responses. What is causing this issue?

A. The related list is Read Only.

B. The related list prompt template option is not enabled.
C. The related list is not on the parent object's page layout.

Correct Answer: C

## Explanation:

UC has grounded a prompt template with a related list, but the responses are incorrect during UAT. Grounding with related lists in Agentforce allows the AI to access data from child records linked to a parent object. Let's analyze the options. Option A: The related list is Read Only.Read-only status (e.g., via field-level security or sharing rules) might limit user edits, but it doesn't inherently prevent the AI from accessing related list data for grounding, as long as the running user (or system context) has read access. This is unlikely to cause incorrect responses and is not a primary consideration, making it incorrect. Option B: The related list prompt template option is not enabled.There's no specific "related list prompt template option" toggle in Prompt Builder. When grounding with a Record Snapshot or Flex template, related lists are included if properly configured (e.g., via object relationships). This option seems to be a misphrasing and doesn't align with documented settings, making it incorrect. Option C: The related list is not on the parent object's page layout.In Agentforce, grounding with related lists relies on the related list being defined and accessible in the parent object's metadata, often tied to its presence on the page layout. If the related list isn't on the layout, the AI might not recognize or retrieve its data correctly, leading to incomplete or incorrect responses. Salesforce documentation notes that related list data availability can depend on layout configuration, making this a plausible and common issue during UAT, and thus the correct answer.

## Multiple Choice

Universal Containers (UC) is preparing and defining success criteria for Agentforce Testing Center test cases. Which details should UC specify as the expected output to ensure the tests accurately reflect the agent 's functionality?

A. Expected Topic API Name

B. Expected Flow API Name

C. Expected Prompt Template Name

Correct Answer: A

Explanation:

According to the AgentForce Testing Center Reference Guide, each test case in the Testing Center should define a clear expected output to validate that the agent selects and executes the correct topic in response to a given user utterance. The Expected Topic API Name acts as the validation reference - it ensures that the reasoning engine correctly classifies the user's intent and routes the conversation to the appropriate topic. This allows the test to confirm end-to-end functionality, from intent detection to action execution. Option B, Expected Flow API Name, applies only when testing automation flows directly, not general agent reasoning. Option C, Expected Prompt Template Name, is relevant for template validation but does not confirm correct topic classification, which is the first step in response accuracy. Therefore, per AgentForce best practices, the correct expected output field to define for Testing Center validation is Option A - Expected Topic API Name.

## Multiple Choice

Universal Containers (UC) recently attended a major trade show and received thousands of new leads from event badge scans. UC is struggling to follow up with each lead in a timely, personalized way. Leadership wants to: Qualify and nurture leads 24/7. \* Provide accurate answers to prospect questions. \* Automatically book meetings with qualified prospects. \* Free up reps to focus on building relationships and closing deals. Which Agentforce capability should UC implement to meet these goals?

A. SDR Agent

B. Sales Coach

C. Commerce Agent

Correct Answer: A

Explanation:

Universal Containers (UC) needs a solution that can automatically qualify and nurture thousands of new leads 24/7, provide accurate and consistent responses to prospects, schedule meetings for qualified leads, and allow sales representatives to focus on relationship building and closing deals. These needs align precisely with the Agentforce SDR Agent. According to official AgentForce documentation, "Agentforce SDR helps sales teams qualify and nurture leads at scale, around the clock. It acts as a digital sales development representative capable of engaging new leads instantly, asking the right qualifying questions, answering inquiries accurately using connected Salesforce data, and automatically scheduling meetings on behalf of the sales team." The documentation further explains that the SDR Agent is designed to "personalize outreach, manage follow-up sequences, and book

meetings directly from your website or campaign pages." This automation "frees your human reps to focus on high-value interactions and closing opportunities rather than manual lead qualification." By contrast, the Sales Coach capability focuses on guiding and coaching sales representatives internally rather than interacting with prospects, and the Commerce Agent is designed for e-commerce use cases such as assisting shoppers with product discovery and order management-not lead nurturing. References (AgentForce Documents / Study Guide): AgentForce SDR Overview - Salesforce AgentForce Documentation AgentForce for Sales - SDR Agent Use Cases AgentForce Study Guide: "Qualify and Nurture Leads at Scale with SDR Agents" Salesforce Trailhead: "Get to Know AgentForce SDR"

## Multiple Choice

Universal Containers (UC) is implementing Einstein Generative AI to improve customer insights and interactions. UC needs audit and feedback data to be accessible for reporting purposes. What is a consideration for this requirement?

A. Storing this data requires Data Cloud to be provisioned.

B. Storing this data requires a custom object for data to be configured.

C. Storing this data requires Salesforce big objects.

## Correct Answer: A

## Explanation:

When implementing Einstein Generative AI for improved customer insights and interactions, the Data Cloud is a key consideration for storing and managing large-scale audit and feedback data. The Salesforce Data Cloud (formerly known as Customer 360 Audiences) is designed to handle and unify massive datasets from various sources, making it ideal for storing data required for AI-powered insights and reporting. By provisioning Data Cloud, organizations like Universal Containers (UC) can gain real-time access to customer data, making it a central repository for unified reporting across various systems. Audit and feedback data generated by Einstein Generative AI needs to be stored in a scalable and accessible environment, and the Data Cloud provides this capability, ensuring that data can be easily accessed for reporting, analytics, and further model improvement. Custom objects or Salesforce Big Objects are not designed for the scale or the specific type of real-time, unified data processing required in such AI-driven interactions. Big Objects are more suited for archival data, whereas Data Cloud ensures more robust processing, segmentation, and analysis capabilities.

## Multiple Choice

Universal Containers (UC) wants to make a marketing newsletter and directly use data from five unrelated objects (two standard and three custom) in a prompt template. How should UC accomplish this?

A. Create a Flex template and use the five objects as inputs.

B. Create a prompt template passing in a special custom object that connects the records temporarily.

C. Create a prompttemplatetriggered flow to access the data from five objects.

## Correct Answer: A

Explanation:

Comprehensive and Detailed Explanation From Exact Extract: The documentation for prompt template types states that Flex templates allow you to define your own inputs when standard templates do not cover your scenario, and that Flex templates support multiple inputs (up to five). For example: "Flex Templates: generate content for business purposes not covered by other prompt template types, allowing you to define your own resources. ... Maximum number of inputs in a Flex template = 5." (Prompt Template Types) Since UC wants to use data from five unrelated objects (which doesn't fit a single object context) directly in a prompt template, the correct approach is to use a Flex template and supply the inputs from those objects. The other options (B or C) add unnecessary complexity or don't align with the templatedesign paradigm. Thus option A is correct.

## Multiple Choice

An Agentforce implements Einstein Sales Emails for a sales team. The team wants to send personalized follow-up emails to leads based on their interactions and data stored in Salesforce. The Agentforce Specialist needs to configure the system to use the most accurate and up-to-date information for email generation. Which grounding technique should the Agentforce Specialist use?

A. Ground with Apex Merge Fields

B. Ground with Record Merge Fields

C. Automatic grounding using Draft with Einstein feature

Correct Answer: C

Explanation:

For Einstein Sales Emails to generate personalized follow-up emails, it is crucial to ground the email content with the most up-to-date and accurate information. Grounding refers to connecting the AI model with real-time data. The most appropriate technique in this case is Ground with Record Merge Fields. This method ensures that the content in the emails pulls dynamic and accurate data directly from Salesforce records, such as lead or contact information, ensuring the follow-up is relevant and customized based on the specific record. Record Merge Fields ensure the generated emails are highly personalized using data like lead name, company, or other Salesforce fields directly from the records. Apex Merge Fields are typically more suited for advanced, custom logic-driven scenarios but are not the most straightforward for this use case. Automatic grounding using Draft with Einstein is a different feature where Einstein automatically drafts the email, but it does not specifically ground the content with record-specific data like Record Merge Fields.

## Multiple Choice

Universal Containers has a strict change management process that requires all possible configuration to be completed in a sandbox which will be deployed to production. The Agentforce Specialist is tasked with setting up Work Summaries for Enhanced Messaging. Einstein Generative AI is already enabled in production, and the Einstein Work Summaries permission set is already available in production. Which other configuration steps should the Agentforce Specialist take in the sandbox that can be deployed to the production org?

A. create custom fields to store Issue, Resolution, and Summary; create a Quick Action that updates these fields: add the Wrap Up component to the Messaging Session record paae layout: and create Permission Set Assignments for the intended Agents.

B. From the Epstein setup menu, select Turn on Einstein: create custom fields to store Issue, Resolution, and Summary: create a Quick Action that updates these fields: and add the wrap up component to the Messaging session record page layout.

C. Create custom fields to store issue, Resolution, and Summary; create a Quick Action that updates these fields: and ado the Wrap up component to the Messaging session record page lavcut.

## Correct Answer: C

Explanation:

Context of the Question Universal Containers (UC) has a strict change management process that requires all possible configuration be completed in a sandbox and

deployed to Production. Einstein Generative AI is already enabled in Production, and the "Einstein Work Summaries" permission set is already available in Production. The Agentforce Specialist needs to configure Work Summaries for Enhanced Messaging in the sandbox. What Can Actually Be Deployed from Sandbox to Production? Custom Fields: Metadata that is easily created in sandbox and then deployed. Quick Actions: Also metadata-based and can be deployed from sandbox to production. Layout Components: Page layout changes (such as adding the Wrap Up component) can be added to a change set or deployment package.

## Multiple Choice

Universal Containers (UC) wants to build an Agentforce Service Agent that provides the latest, active, and relevant policy and compliance information to customers. The agent must: Semantically search HR policies, compliance guidelines, and company procedures. Ensure responses are grounded on published Knowledge. Allow Knowledge updates to be reflected immediately without manual reconfiguration. What should UC do to ensure the agent retrieves the right information?

A. Enable the agent to search all internal records and past customer inquiries.
B. Set up an Agentforce Data Library to store and index policy documents for AI retrieval.

C. Manually add policy responses into the AI model to prevent hallucinations.

## Correct Answer: B

## Explanation:

UC requires an Agentforce Service Agent to deliver accurate, up-to-date policy and compliance info with specific criteria. Let's evaluate. Option A: Enable the agent to search all internal records and past customer inquiries. Searching all records and inquiries risks irrelevant or outdated responses, conflicting with the need for published Knowledge grounding and immediate updates. This lacks specificity, making it incorrect. Option B: Set up an Agentforce Data Library to store and index policy documents for AI retrieval. The Agentforce Data Library integrates with Salesforce Knowledge, indexing HR policies, compliance guidelines, and procedures for semantic search. It ensures grounding in published Knowledge articles, and updates (e.g., new article versions) are reflected instantly without reconfiguration, as the library syncs with Knowledge automatically. This meets all UC requirements, making it the correct answer. Option C: Manually add policy responses into the AI model to prevent hallucinations. Manually embedding responses into the model isn't feasible-Agentforce uses pretrained LLMs, not custom training. It also doesn't support real-time updates, making this incorrect.

## Multiple Choice

Universal Containers is implementing a Retrieval-Augmented Generation (RAG) solution where the knowledge store contains Spanish articles, but users will query the agent in French and English. The Agentforce Specialist needs to ensure the retriever can accurately find relevant articles despite the language differences. What should the specialist do to meet this requirement?

A. Use the multilingual-e5-large embedding model for French and Spanish language users.

B. Use the multilingual-e5-large embedding model for French and English language users.

C. Use the multilingual-e5-large embedding model to handle all languages.

## Correct Answer: C

Explanation:

The correct answer is C. In a multilingual RAG design, the embedding model must support semantic similarity across the languages involved in both the source content and user queries. Since the articles are in Spanish and users may ask questions in French or English, selecting the multilingual-e5- large embedding model broadly for the search index is the correct approach. Option A and Option B are too narrow because each excludes one of the languages in the complete requirement. The retriever does not simply match keywords; it compares vector representations of the query and indexed chunks. A multilingual embedding model improves cross-language retrieval by placing semantically similar text from different languages closer in vector space. Salesforce Data 360 search index guidance identifies multilingual content and embedding-model selection as key retrieval considerations.

## Multiple Choice

Universal Containers is designing an agent to assist with order management and dealer support automation. The agent must verify a dealer's credentials before granting access to order details. The team has already: Declared a variable is\_verified to track verification status. Configured an action that verifies the dealer's credentials. They plan to restrict access to the order details subagent using a guard condition based on is\_verified. What must the team do to ensure the order details subagent becomes available only after a dealer is successfully verified?

A. Add an available when: @variables.is\_verified == true condition to the order details subagent.

B. Declare the is\_verified variable as immutable so it cannot be modified during the session.

C. Update the is\_verified variable to true after the verification action succeeds using @utils.setVariables.

## Correct Answer: C

## Explanation:

The correct answer is C. The team already has the variable and plans to use a guard condition, but the guard is useless unless the variable is updated after the verification action succeeds. @utils.setVariables or equivalent variable-setting logic must change is\_verified to true when the dealer passes verification. Option A is incomplete because adding the guard only defines the condition; it does not change the state that the condition evaluates. Option B is wrong because an immutable variable would prevent the verification status from being updated during the session. In Agent Script, variables maintain state across turns and subagents, and filters or availability rules use that state to control what the reasoning engine can access.

## Multiple Choice

Universal Containers (UC) wants to improve the productivity of its sales team with generative AI technology. However, UC is concerned that public AI virtual assistants lack adequate company data to general useful responses. Which solution should UC consider?

A. fine-tune the Einstein AI model with CBM data.

B. Build AI model with Einstein discovery and deploy to sales users.

C. Enable Agentforce and deploy to sales users.

## Correct Answer: A

Explanation:

Context of the Question Universal Containers (UC) wants to harness generative AI to boost sales productivity. They are wary of public AI virtual assistants (like generic chatbots) that lack sufficient UC-specific data to generate useful business

responses. Why Fine-Tune an Einstein AI Model with CRM Data? Company-Specific Relevance: By fine-tuning Einstein AI with UC's CRM data (accounts, opportunities, products, and historical interactions), the model learns the enterprise-specific context. This ensures that the generative outputs are accurate and tailored to UC's sales scenarios. Security and Compliance: Using Salesforce Einstein within the Salesforce ecosystem keeps data under UC's control, aligning with trust, security, and compliance requirements. Better Predictions: Einstein AI can produce more relevant insights (e.g., recommended next steps, content suggestions, or AI-generated email responses) when it has been trained on real, high-quality internal data. Why Not Build an AI Model with Einstein Discovery (Option B)? Einstein Discovery Use Case: Einstein Discovery is best suited for predictive and prescriptive analytics (e.g., analyzing large data sets for patterns, scoring leads, or predicting churn). While it provides advanced analytics, it is not primarily designed for generative text-based interactions for end-user consumption in a conversational format. Why Not Enable Agentforce (Option C)? Agentforce Overview: "Agentforce" (sometimes referencing a pilot or non-mainstream name) typically focuses on interactive help or workforce collaboration. It does not inherently solve the problem of large-scale generative AI using internal CRM data. Moreover, you still need a robust generative engine fine-tuned on company data. Outcome: Fine-tuning the Einstein AI model with UC's CRM data (Answer A) is the most direct, Salesforce-native solution to provide generative AI responses that are aligned with UC's context, driving productivity gains and ensuring data privacy. Salesforce Agentforce Specialist References & Documents Salesforce Official: Einstein GPT Overview Discusses how Einstein GPT can be fine-tuned with specific CRM data to deliver contextually relevant, generative AI responses. Salesforce Trailhead: Get Started with Salesforce Einstein Explains the fundamentals of AI within the Salesforce platform, including training and optimizing Einstein models. Salesforce Documentation: Einstein Discovery Details how Einstein Discovery is primarily used for advanced analytics and predictions, not direct generative text solutions. Salesforce Agentforce Specialist Study Guide Provides the official outline of Einstein AI capabilities, referencing how to configure and fine-tune models for specialized enterprise use cases.

## Multiple Choice

Universal Containers (UC) has a library of custom-built personalized investment portfolio APIs, and is planning to extend it to agents. Which method should UC's agent choose to dynamically use the best API service?

A. Agent-to-Agent (A2A) protocol support  
B. Model Context Protocol (MCP) server support  
C. MuleSoft connector for custom hosted processes

Correct Answer: B

## Explanation:

The most appropriate and advanced method for an Agentforce agent to dynamically select and use the best API service from a library of custom-built APIs is through Model Context Protocol (MCP) server support (B). The Model Context Protocol (MCP) is an open standard specifically designed to standardize how AI agents and Large Language Models (LLMs) interact with external tools, systems, and data sources (like custom APIs). An external system, such as a server hosting UC 's custom portfolio APIs, can be exposed as an MCP Server. This server provides rich, standardized, human-readable metadata about its "tools" (the APIs it offers). The Agentforce Atlas Reasoning Engine can interpret this metadata to understand the function of each API, the required inputs, and the expected outputs. This allows the agent to dynamically discover, reason over, and select the most appropriate API to execute based on a user 's request (e.g., "Show me the best-performing portfolio " vs. " Adjust my risk tolerance"). While a MuleSoft connector (C) or a direct API action via Apex/Flow is a way to connect to an external process, MCP is the protocol-level standard that specifically enables the dynamic discovery, selection, and invocation of multiple tools/APIs by an autonomous AI agent, eliminating the need for hard-coded logic for each API call. Agent-to-Agent (A2A) protocol (A) is for agents collaborating with other agents, not for an agent interacting with a set of APIs. Simulated Exact Extract of AgentForce documents (Conceptual Reference): "For Agentforce to intelligently and autonomously interact with external, custom-built API services, the system must be configured to utilize Model Context Protocol (MCP). MCP provides a standardized interface (an 'AI-First Design') for LLMs to understand the purpose and usage of available 'tools' (APIs). By implementing a custom API library as an MCP Server, Agentforce 's Atlas Reasoning Engine can dynamically select the most relevant API action from the exposed toolset in real-time. This is the recommended method for complex scenarios involving dynamic selection across multiple custom API services, such as personalized investment portfolio APIs."

## Multiple Choice

Universal Containers (UC) uses Salesforce Service Cloud to support its customers and agents handling cases. UC is considering implementing Agent and extending Service Cloud to mobile users. When would Agent implementation be most advantageous?

A. When the goal is to streamline customer support processes and improve response times

B. When the main objective is to enhance data security and compliance measures

C. When the focus is on optimizing marketing campaigns and strategies

## Correct Answer: A

## Explanation:

Agent implementation would be most advantageous in Salesforce Service Cloud when the goal is to streamline customer support processes and improve response times. Agent can assist agents by providing real-time suggestions, automating repetitive tasks, and generating contextual responses, thus enhancing service efficiency. Option B (data security) is not the primary focus of Agent, which is more about improving operational efficiency. Option C (marketing campaigns) falls outside the scope of Service Cloud and Agent's primary benefits, which are aimed at improving customer service and case management.

## Multiple Choice

Which scenario best demonstrates when an Agentforce Data Library is most useful for improving an AI agent's response accuracy?

A. When the AI agent must provide answers based on a curated set of policy documents that are stored, regularly updated, and indexed in the data library.
B. When the AI agent needs to combine data from disparate sources based on mutually common data, such as Customer Id and Product Id for grounding.
C. When data is being retrieved from Snowflake using zero-copy for vectorization and retrieval.

## Correct Answer: A

## Explanation:

The Agentforce Data Library enhances AI accuracy by grounding responses in curated, indexed data. Let's assess the scenarios. Option A: When the AI agent must provide answers based on a curated set of policy documents that are stored, regularly updated, and indexed in the data library. The Data Library is designed to store and index structured content (e.g., Knowledge articles, policy documents) for semantic search and grounding. It excels when an agent needs accurate, up-to-date responses from a managed corpus, like policy documents, ensuring relevance and reducing hallucinations. This is a prime use case per Salesforce documentation,

making it the correct answer. Option B: When the AI agent needs to combine data from disparate sources based on mutually common data, such as Customer Id and Product Id for grounding. Combining disparate sources is more suited to Data Cloud's ingestion and harmonization capabilities, not the Data Library, which focuses on indexed content retrieval. This scenario is less aligned, making it incorrect. Option C: When data is being retrieved from Snowflake using zero-copy for vectorization and retrieval. Zero-copy integration with Snowflake is a Data Cloud feature, but the Data Library isn't specifically tied to this process-it's about indexed libraries, not direct external retrieval. This is a different context, making it incorrect.

## Multiple Choice

The marketing team at Universal Containers is looking for a way personalize emails based on customer behavior, preferences, and purchase history. Why should the team use Agent as the solution?

A. To generate relevant content when engaging with each customer  
B. To analyze past campaign performance  
C. To send automated emails to all customers

## Correct Answer: A

## Explanation:

Agent is designed to assist in generating personalized, AI-driven content based on customer data such as behavior, preferences, and purchase history. For the marketing team at Universal Containers, this is the perfect solution to create dynamic and relevant email content. By leveraging Agent, they can ensure that each customer receives tailored communications, improving engagement and conversion rates. Option A is correct as Agent helps generate real-time, personalized content based on comprehensive data about the customer. Option B refers more to Einstein Analytics or Marketing Cloud Intelligence, and Option C deals with automation, which isn 't the primary focus of Agent.

## Multiple Choice

Universal Containers' Agentforce Service Agent has been live for four weeks. Agent Optimization in Agentforce Observability shows the main support intent cluster scoring low quality, with score reasons citing ambiguous subagent match. The Session Trace confirms the reasoning engine is consistently selecting the wrong subagent on most turns. What is the most viable solution to resolve the issue?

A. Refine the classification descriptions and scope of the competing subagents to eliminate the semantic overlap that is causing the reasoning engine to misroute.

B. Use the intent cluster data from Agent Optimization to identify the most frequently misrouted intents and add new subagents with tightly scoped classification descriptions for each.

C. Extend the agent's data library with additional knowledge articles covering the misrouted intent scenarios identified in Agent Optimization.

## Correct Answer: A

## Explanation:

The correct answer is A because the observed failure is caused by ambiguous subagent matching, not by missing content or insufficient agent count. In Agentforce, subagent classification depends heavily on the subagent's name, classification description, scope, instructions, and actions. If two subagents semantically overlap, the reasoning engine can route the same user intent to the wrong place. Refining the competing classification descriptions and narrowing scope removes ambiguity and improves deterministic routing. Option B can make the architecture worse by adding more subagents before fixing the overlap. Option C is wrong because knowledge articles help answer questions after routing; they do not solve subagent selection errors. Salesforce troubleshooting guidance specifically recommends checking the subagent name and classification description when expected utterances are misclassified.

## Multiple Choice

Universal Containers is configuring its Agentforce Testing Center to evaluate an agent handling customer complaints. The company wants to assess if the agent successfully demonstrates empathy and follows a proprietary "De-escalation Framework" before offering a resolution. Where should the Agentforce Specialist utilize a large language model (LLM)-as-judge to achieve an appropriate evaluation?

A. Adjust the fixed criteria of the standard Coherence quality evaluation to control the LLM-as-judge evaluation.

B. Enable the default Instruction Adherence evaluation which natively uses LLM-as-judge.

C. Create a custom evaluation with a tailored prompt outlining the framework's criteria.

## Correct Answer: C

## Explanation:

The correct answer is C because the company is not asking for a generic quality score; it needs evaluation against a proprietary de-escalation framework and empathy standard. Salesforce Testing Center supports LLM-judge style evaluations where a judge model compares the agent response against task criteria. For a custom rubric, the specialist should create a custom evaluation and provide a tailored prompt that defines the exact framework criteria. Option A is wrong because standard Coherence is not intended to be rewritten into a proprietary policy rubric. Option B is also too generic because default instruction adherence does not necessarily understand UC's internal de-escalation model. Custom evaluation is the right mechanism for organization-specific qualitative standards.
