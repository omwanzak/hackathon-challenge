# FMCG Stock Movement & Requisition Tracker

A comprehensive stock management system designed for Kenya's Fast-Moving Consumer Goods (FMCG) distribution network. This system digitizes and automates the traditionally manual process of stock requisitions between van sales representatives, distributors, and manufacturers.
## Team Members
Group Assignment: Tech Sisters Kenya Challenge

Van Sales Rep Role: [Team Member Name]
Distributor Role: [Team Member Name]
Manager Role: [Team Member Name]

## Project Overview
### Problem Statement
In Kenya's FMCG distribution space, stock requests between retail shops and distributors currently happen via WhatsApp messages or phone calls, creating:

No central record to support decision-making
Distributors lack visibility on product demand
Stock losses and disputes due to untracked overselling or underselling

#### Solution
Our system automates the stock movement workflow:

Van Sales Reps submit digital requisition requests for stock
Distributors approve/reject requests with automatic inventory updates
Manufacturers monitor the entire supply chain via comprehensive dashboards

##### Features Implemented
🚐 Van Sales Representative Features

View current van stock inventory
Submit requisition requests to distributors
Track request status (pending/approved/rejected)
Automatic validation for van capacity limits
Prevention of duplicate requests

#### Distributor Features

View all incoming requisition requests
Approve/reject requests with one-click actions
Real-time warehouse stock level monitoring
Automatic stock updates upon approval
Business rule enforcement (no negative stock)

#### Manager Dashboard

Complete supply chain overview
Stock level monitoring across all locations
Pending requisitions summary
Stock movement history and audit trail
Real-time inventory analytics

#### Authentication & Security

Role-based access control
Secure login for three user types
Protected routes based on user permissions
Session management

Technology Stack
Frontend

React - Modern JavaScript framework
Tailwind CSS - Utility-first CSS framework
React Router - Client-side routing
Axios - HTTP client for API calls

Backend

Laravel - PHP web framework
MySQL - Relational database
Laravel - API authentication

Prerequisites
Before you begin, ensure you have the following installed:

