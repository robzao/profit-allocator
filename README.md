# Profit Allocator

## What is this project?

The Profit Allocator is a minimal tool designed to quickly determine the net profit and **allocate that profit into specific shares**. It automates the distribution of funds based on **fixed fractions** for investments and cash reserves.

It allows for immediate calculation of how a business's revenue is allocated after initial deductions.

---

## How It Works

The calculation process requires only two inputs to determine the distribution into four resulting shares:

### Input Fields

| Field | Restriction | Description |
| :--- | :--- | :--- |
| **Gross Profit ($)** | Number >= 0 | The total revenue amount before any deductions or expenses. |
| **Discounts ($)** | Number >= 0 | The total value of discounts applied to sales or initial deductions. |

### Calculation Logic

The following operations define the profit sharing rules:

* **Net Profit:** Calculated as Gross Profit minus Discounts.
* **Investments:** One-third (1/3) of the Net Profit is allocated here.
* **Cash:** One-sixth (1/6) of the Net Profit is allocated here.
* **General:** The **remaining half** (1/2) of the Net Profit is allocated here, after the Investments and Cash allocations.

### Output Fields

| Field | Description |
| :--- | :--- |
| **Net Profit** | The final profit amount after deductions. (Reference for allocation) |
| **Investments** | The amount reserved for future investments. |
| **Cash** | The amount reserved for immediate cash reserves or rainy funds. |
| **General** | The remaining profit, available for general use. |

---

### Formatting Standards

* **Decimal Separator:** Use the **dot (`.`)** for decimal separation (e.g., `500.25`).
* **Currency Display:** The output uses the simple `$ 0.00` format.
