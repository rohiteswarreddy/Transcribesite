// ... (Your server.js code)
 // Import the registration model
const Dashboard = require('./src/dashboard'); // Import the dashboard model
const  RegistrationForm  = require('./src/register');
// ... (Your other API routes)

// Handle login requests
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body; 

    // Find the user in the database
    const user = await RegistrationForm.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    // Compare passwords (using bcrypt)
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Authentication successful
    res.status(200).json({ message: 'Login successful' }); 
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.get('/dashboard', async (req, res) => {
  try {
    const dashboardData = await Dashboard.getDashboardData();
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
});
