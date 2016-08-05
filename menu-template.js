const menuTemplate = [
  {
    label: '',
    submenu: [
      {
        label: 'About',
        role: 'about'
      }
    ]
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'New',
      },
      {
        label: 'Save',
      },
      {
        label: 'Quit',
        role: 'quit'
      }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'something'
      }
    ]
  }
]

module.exports = menuTemplate
