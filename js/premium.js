document.querySelector('.calculate').addEventListener('click', function () {
  
  let priceinput = Number(document.querySelector('.priceinput').value)

  let phoneage = document.getElementById('phoneage').options[
    document.getElementById('phoneage').selectedIndex
  ].index

  let payinterval = document.getElementById('payinterval').options[
    document.getElementById('payinterval').selectedIndex
  ].index
  
  let thief = document.getElementById('thief').options[
    document.getElementById('thief').selectedIndex
  ].index



  if (thief === 0) {
    document.querySelector('.notice4').textContent =
      'Please choose an option with or without thief protection *'
  } else if (thief === 1) {
    document.querySelector('.notice4').textContent = ''
    if (payinterval === 0) {
      document.querySelector('.notice2').textContent =
        'Please choose to pay monthly or yearly *'
    } else if (payinterval === 1) {
      document.querySelector('.notice2').textContent = ''
      if (phoneage === 0) {
        document.querySelector('.notice').textContent =
          'Please choose the purchase date of your phone *'
      } else if (phoneage === 1) {
        document.querySelector('.notice').textContent = ''

        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 7 + 2.5
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 11 + 2.5
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 13 + 2.5
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      } else if (phoneage === 2) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.userinput').textContent =
            'This entry cannot be empty *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 5 + 2.5
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 8 + 2.5
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 11 + 2.5
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      }
    } else if (payinterval === 2) {
      document.querySelector('.notice2').textContent = ''
      if (phoneage === 0) {
        document.querySelector('.notice').textContent =
          'Please choose the purchase date of your phone *'
      } else if (phoneage === 1) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            7 * 12 + 2.5 * 12
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            11 * 12 + 2.5 * 12
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            13 * 12 + 2.5 * 12
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      } else if (phoneage === 2) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            5 * 12 + 2.5 * 12
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            8 * 12 + 2.5 * 12
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent =
            11 * 12 + 2.5 * 12
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      }
    }
  } else if (thief === 2) {
    document.querySelector('.notice4').textContent = ''
    if (payinterval === 0) {
      document.querySelector('.notice2').textContent =
        'Please choose to pay monthly or yearly *'
    } else if (payinterval === 1) {
      document.querySelector('.notice2').textContent = ''
      if (phoneage === 0) {
        document.querySelector('.notice').textContent =
          'Please choose the purchase date of your phone *'
      } else if (phoneage === 1) {
        document.querySelector('.notice').textContent = ''

        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'This entry cannot be empty *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 7
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 11
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 13
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      } else if (phoneage === 2) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.userinput').textContent = '*'
          document.querySelector('.premiumprice').textContent = 5
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.userinput').textContent = '*'
          document.querySelector('.premiumprice').textContent = 8
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.userinput').textContent = '*'
          document.querySelector('.premiumprice').textContent = 11
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.userinput').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      }
    } else if (payinterval === 2) {
      document.querySelector('.notice2').textContent = ''
      if (phoneage === 0) {
        document.querySelector('.notice').textContent =
          'Please choose the purchase date of your phone *'
      } else if (phoneage === 1) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = '*'
          document.querySelector('.premiumprice').textContent = 7 * 12
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = '*'
          document.querySelector('.premiumprice').textContent = 11 * 12
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = '*'
          document.querySelector('.premiumprice').textContent = 13 * 12
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      } else if (phoneage === 2) {
        document.querySelector('.notice').textContent = ''
        if (!priceinput) {
          document.querySelector('.notice5').textContent =
            'Please enter the purchase price of your phone *'
          document.querySelector('.premiumprice').textContent = 0
        } else if (priceinput >= 50 && priceinput <= 300) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 5 * 12
        } else if (priceinput >= 301 && priceinput <= 800) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 8 * 12
        } else if (priceinput >= 801 && priceinput <= 3000) {
          document.querySelector('.notice5').textContent = ''
          document.querySelector('.premiumprice').textContent = 11 * 12
        } else if (priceinput < 50 || priceinput > 3000) {
          document.querySelector('.notice5').textContent =
            'The phone price has to be between 50 and 3000 Euros'
          document.querySelector('.premiumprice').textContent = 0
        }
      }
    }
  }
})
