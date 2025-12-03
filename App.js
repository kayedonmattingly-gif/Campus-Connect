// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, StyleSheet, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

// Theme Colors
const colors = {
  primaryBlue: '#0033A0',
  accentYellow: '#FFD100',
  background: '#F5F7FA',
  white: '#FFFFFF',
};

//  Events Screen
function EventsScreen() {
  const eventsData = [
    { id: '1', title: 'Midway Masquerade', date: 'Dec 2, 2025', location: 'Marrs Hall', time: '8:30-10:30pm' },
    { id: '2', title: 'Last Supper', date: 'Dec 3, 2025', location: 'Piper Dining Hall', time: '9-10pm' },
    { id: '3', title: 'Nurses Pinning Ceremony', date: 'Dec 19, 2025', location: 'Duthie Auditorium', time: '4-6pm' },
    { id: '4', title: 'Christmas Holiday', date: 'Dec 24- Jan 1 2026', location:  'Campus will be closed during this time.', time: 'ALL DAY EVENT' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>Date: {item.date}</Text>
            <Text style={styles.meta}>Location: {item.location}</Text>
            <Text style={styles.meta}>Time: {item.time}</Text>
            <Pressable style={styles.button} onPress={() => alert(`RSVP for ${item.title}`)}>
              <Text style={styles.buttonText}>RSVP</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

//  Clubs Screen
function ClubsScreen() {
  const clubsData = [
    {
      id: '1',
      name: 'Alpha Lambda Delta',
      advisor: 'Dr. Carrie Christensen',
      description: 'A nationally recognized honor society for high achieving first year students.'
    },
    {
      id: '2',
      name: 'Eagle Outreach',
      advisor: 'Brent Hudgins',
      description: 'Service-oriented organization connecting Midway University with local community needs.'
    },
    {
      id: '3',
      name: 'Fellowship of Christian Athletes (FCA)',
      advisor: 'Emily Woodside',
      description: 'Mission to lead coaches and athletes into a growing relationship with Jesus Christ.'
    },
    {
      id: '4',
      name: 'Gamma Beta Phi (GBP)',
      advisor: 'Miranda Marks',
      description: 'National honors and service society with watchwords of service, scholarship, and character.'
    },
    {
      id: '5',
      name: 'LGBT+',
      advisor: 'Gina DeArth Pendley',
      description: 'Provides a safe space, positivity, awareness, and resources for LGBT+ topics.'
    },
    {
      id: '6',
      name: 'Midway Activities Council (MAC)',
      advisor: 'Brent Hudgins',
      description: 'Student-led group planning and promoting campus events and cultural programming.'
    },
    {
      id: '7',
      name: 'Midway Association of Nursing Students (MANS)',
      advisor: 'Candy Lockhart & Kelly Furlong',
      description: 'Pre-professional org supporting nursing students and encouraging health-related participation.'
    },
    {
      id: '8',
      name: 'Midway Horse Association (MHA)',
      advisor: 'TBD',
      description: 'Promotes interest in equine industries and fosters academic/social interaction.'
    },
    {
      id: '9',
      name: 'Multicultural Student Association (MSA)',
      advisor: 'Mona Chorera',
      description: 'Inclusive community fostering cultural exchanges and support for international students.'
    },
    {
      id: '10',
      name: 'Psychology Club',
      advisor: 'Dr. Edie McClellan',
      description: 'Organizes service projects, attends conferences, and hosts speakers on behavioral sciences.'
    },
    {
      id: '11',
      name: 'Student Advisory Council on Student Betterment',
      advisor: 'Vice President of Student Affairs',
      description: 'Advises administration to ensure student voices are heard and campus is welcoming.'
    },
    {
      id: '12',
      name: 'Student Athletics Board',
      advisor: 'TBD',
      description: 'Represents students on athletics issues, governance, and campus event support.'
    },
    {
      id: '13',
      name: 'Student Government Association (SGA)',
      advisor: 'Student Affairs Office',
      description: 'Coordinates student concerns, extracurriculars, and fosters cooperation across campus.'
    },
    {
      id: '14',
      name: 'Tri-Beta',
      advisor: 'Dr. John Delfino & Dr. Cynthia Ryder',
      description: 'Biology honor society promoting research, diversity, and appreciation of biological study.'
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={clubsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.meta}>Advisor: {item.advisor}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}


//  Groups Screen
function GroupsScreen() {
  const [groups, setGroups] = useState([
    { id: '1', name: 'CSE -310 Study Group', members: 12 },
    { id: '2', name: 'Biology Lab Prep', members: 8 },
    { id: '3', name: 'Chemistry Final Review', members: 15 },
  ]);
  const [newGroupName, setNewGroupName] = useState('');

  const createGroup = () => {
    if (!newGroupName.trim()) return;
    const id = (groups.length + 1).toString();
    setGroups([{ id, name: newGroupName.trim(), members: 1 }, ...groups]);
    setNewGroupName('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          value={newGroupName}
          onChangeText={setNewGroupName}
          placeholder="Create a group (e.g., MATH200 Exam Prep)"
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={createGroup}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.meta}>{item.members} member(s)</Text>
            <Pressable style={styles.button} onPress={() => alert(`Joined ${item.name}`)}>
              <Text style={styles.buttonText}>Join</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

//  Profile Screen
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Midway University Campus Connect</Text>
        <Text style={styles.meta}>Discover events, join study groups, and connect with clubs!</Text>
      </View>
    </View>
  );
}

//  Main App
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primaryBlue,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: colors.accentYellow },
          headerStyle: { backgroundColor: colors.primaryBlue },
          headerTintColor: colors.accentYellow,
        }}
      >
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Clubs" component={ClubsScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  card: {
    backgroundColor: colors.primaryBlue,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: { fontSize: 18, color: colors.accentYellow, fontWeight: 'bold' },
  meta: { fontSize: 14, color: colors.white },
  button: {
    marginTop: 10,
    backgroundColor: colors.accentYellow,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: colors.primaryBlue, fontWeight: 'bold' },
  inputRow: { flexDirection: 'row', marginBottom: 10 },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
