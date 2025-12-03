# Midway University Campus Connect (React Native + Expo)

A Midway-themed mobile app that helps students discover events, connect with clubs and organizations, and create or join study groups. Built with React Native and Expo for rapid, cross-platform development.

---

## Objectives

- **Unify campus engagement** by centralizing events, clubs, and study groups in one app.
- **Increase participation** through clear discovery, RSVP, and group-joining flows.
- **Reflect Midway identity** with consistent blue and yellow theme across UI.
- **Provide a foundation** for future features like notifications, maps, and authentication.

---

## Motivation

Campus information is often scattered across emails, posters, and word-of-mouth. Students miss valuable opportunities to connect and participate. Campus Connect solves this by offering an easy-to-use hub for campus life—streamlined navigation, clear visuals, and authentic Midway branding.

---

## Features and functions

- **Events:** Scrollable list of upcoming activities with titles, dates, locations, and RSVP.
- **Clubs directory:** Detailed list of clubs and organizations with advisors and descriptions.
- **Study groups:** Create, list, and join groups to collaborate on coursework or interests.
- **Branding:** Midway blue (#0033A0) and yellow (#FFD100) theme, consistent UI components.
- **Responsive UI:** Simple, accessible layout that works well on phones.

Future-ready:
- **Push notifications:** Alerts for event reminders and group updates.
- **Maps/location:** Show event venues and campus points of interest.
- **Authentication:** Student login to personalize content and protect data.
- **Backend persistence:** Store events, groups, RSVPs, and profiles.

---

## Tech stack

- **React Native:** Cross-platform UI components (iOS/Android).
- **Expo:** Development, testing, and build tooling.
- **React Navigation:** Bottom tab navigation across major app sections.
- **Core RN components:** FlatList, Pressable, TextInput, StatusBar.

---

## Screens and code overview

- **Events screen:** Renders a list of event cards using `FlatList`. Each card has title, date, location, and an RSVP button (`Pressable`) for interaction.
- **Clubs screen:** Displays clubs with advisor and description—students can learn about opportunities at a glance.
- **Groups screen:** Provides a `TextInput` for new group creation; groups render in a list with a “Join” button.
- **Profile screen:** Branded welcome panel with usage tips.

---

## Installation and running (Expo Go)

1. Create the project:
