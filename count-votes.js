function countingVotes(votes)
{
  voteCount = {}
  // Each candidate should be a key in the dictionary
  // Each time a candidates name appears in the array
  // add another count to the dictionary

  /*
  voteCount = {'veronic': 3, 'mary': 0, 'alex': 0}


   */

  for (i = 0; i < votes.length ; i++)
  {
    if (!voteCount[votes[i]])
    {
      voteCount[votes[i]] = 1;
    }
    else {
      voteCount[votes[i]]++;
    }
  }

  console.log(voteCount);
  let tiedNames = ["mary", "alex", "michael"]
  return tiedNames.sort()[tiedNames.length-1];  
}


const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

countingVotes(votes);
