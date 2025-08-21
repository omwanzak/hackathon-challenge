# Hackathon Challenge: Stock Movement & Requisition Tracker

**Organized by:** Solutech Limited in collaboration with Tech Sisters Kenya  
**Format:** 3-hour CSR Challenge | Teams of 3 Tech Sisters  
**Presentation/Demo:** After the coding session  

---

## Getting Started

**Important:** The **team should fork this repository** before starting the challenge.  
- This allows your team to work independently without affecting the main repository.  
- All team members should collaborate on the forked repo and submit your solution from there.  

---

## Introduction

In Kenya's FMCG and distribution space, we have three key players:

- **Manufacturers:** Produce goods in bulk  
- **Distributors / Wholesalers:** Hold bulk stock from manufacturers and supply retail shops  
- **Van Sales Teams / Field Reps:** Handle last-mile deliveries to retail shops, ensuring goods reach the end point  

Currently, stock requests between retail shops and distributors often happen via WhatsApp messages or phone calls. This creates challenges:  

- No central record to support decision-making  
- Distributors lack visibility on product demand  
- Stock losses and disputes arise due to untracked overselling or underselling  

Your task is to build a **Stock Movement & Requisition Tracker** that digitizes and automates this process.

---

## Use Case

1. **Alex** (Van Sales Rep) needs 30 packets of Delmonte Pineapple Juice (500ml) for his Waiyaki Way route tomorrow.  
2. **Rayyidh** (Distributor, BestJuice) receives Alex’s requisition request, approves it, and records the uplift.  
3. Alex sees the approval, collects the goods from BestJuice Warehouse A, and loads them into his van.  
4. Alex delivers the goods to Mutie & Sons General Shop.  

This flow is currently manual and error-prone. Your solution should automate and track these operations.

---

## Team Structure

- **Teams of 3 Tech Sisters**  
- Assign roles based on key workflows:  
  - Van Sales Rep (Alex)  
  - Distributor (Rayyidh)  
  - Manufacturer (stock overview dashboard)  
- **Presentation Lead:** Decide early whether one member presents the full demo or each member presents her own role.  

---

## Roles & Workflows

### 1. Van Sales Representative (Alex)
- Log in  
- View van stock (seeded data)  
- Submit requisition requests (uplifts)  

**Restrictions:**  
- No duplicate requests for the same item/day  
- Cannot exceed van capacity  

### 2. Distributor Warehouse Staff (Rayyidh)
- Log in  
- View all requisition requests  
- Approve or reject requests  

**On approval:**  
- Warehouse stock decreases  
- Van stock increases  

**Restrictions:**  
- Stock cannot go negative  
- Cannot approve more than available stock  

### 3. Manufacturer Manager
- Log in  
- View a dashboard showing:  
  - Manufacturer warehouse stock  
  - Distributor stock  
  - Van stock  
  - Pending requisitions  

**Bonus:** View stock movement history

---

## Technical Scope

- **Frontend:** ReactJS, VueJS, NuxtJS, Plain JS, or Flutter  
- **Backend:** NodeJS, Laravel, PHP, or Python  
- **Authentication:** Role-based login (mocked with seeded users)  

**Core Models:**  
- Users (roles: Rep, Distributor, Manager)  
- Products  
- Stock (Manufacturer, Distributor, Van)  
- Requisitions (pending/approved/rejected)  
- StockMovements (log transfers)

---

## Deliverables (within 3 hours)

- Requisition flow: Van Rep → Distributor → stock updated  
- Stock movement logs  
- Manufacturer dashboard with summary view  
- Presentation/demo flow (after coding session)

---

## Assessment Criteria

| Category | Criteria | Description / Indicators | Weight (%) |
|----------|---------|-------------------------|------------|
| **Technical Skills (60%)** | Innovation & Creativity | - Originality of the solution<br>- Novel approach to problem<br>- Creative use of tools/resources | 20% |
| | Technical Execution | - Functionality of prototype/solution<br>- Accuracy & reliability of outputs<br>- Efficiency (time/resources used) | 20% |
| | Problem-Solving Ability | - Clarity in identifying the problem<br>- Relevance of solution to real-world needs<br>- Practicality & scalability | 20% |
| **Soft Skills (40%)** | Teamwork & Collaboration | - Equal contribution from members<br>- Conflict management<br>- Evidence of collective decision-making | 15% |
| | Communication | - Clarity of ideas shared<br>- Use of simple and professional language<br>- Active listening & engagement | 10% |
| | Leadership & Initiative | - Task delegation & accountability<br>- Proactive problem-solving<br>- Encouraging team participation | 10% |
| | Presentation & Confidence | - Structured, engaging presentation<br>- Confidence in delivery<br>- Handling Q&A effectively | 5% |
| **TOTAL** |  |  | 100% |

**Scoring:** Each criterion is scored 1–5. Weighted scores are calculated based on the weight percentage, contributing to the **Final % Score**.

---

## Suggested 3-Hour Coding Timeline

| Time | Activity |
|------|---------|
| 0:00 – 0:15 | Team Planning: Assign roles (Van Rep, Distributor, Manufacturer) & Presentation Lead, agree on workflows |
| 0:15 – 0:35 | Project Setup: Initialize repo/project, seed data (users, roles, products, stock) |
| 0:35 – 1:25 | Core Feature Development: Van Rep requisition flow, Distributor approval/rejection, stock updates |
| 1:25 – 2:05 | Dashboard Implementation: Manufacturer stock summary & requisitions |
| 2:05 – 2:40 | Testing & Debugging: Each member tests her assigned role, validate end-to-end workflow |
| 2:40 – 3:00 | Final Touches: Polish UX, stock movement logs, prepare for presentation |

---

## Presentation/Demo Flow (after coding session)

By the end, judges should be able to:

1. Log in as Van Rep (Alex) → Create requisition  
2. Log in as Distributor (Rayyidh) → Approve request → Stock updates  
3. Log in as Manufacturer → View updated stock balances + requisition status  

The Presentation Lead (or all members) will guide the demo and explain workflows, highlighting any bonus features implemented.