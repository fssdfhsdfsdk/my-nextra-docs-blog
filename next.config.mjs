import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  defaultShowCopyCode: true,
  latex: { renderer: 'mathjax' }
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
})