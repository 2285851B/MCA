#libraries
from music21 import *

#variables
filePath = "D:/Users/NewUsername/Documents/Uni/Year 3/DMIS Year 3/Music Curation and Analytics/The_Unforgiven.mei"
p = converter.parse(filePath)

#functions
print(p)
for el in p.recurse().notes:
    print(el.offset, el, el.activeSite)
    
print (p.parts[0].analyze('ambitus'))

voice = p.parts[0]
voice.measures(1,10).plot()

p.plot('histogram','octave', xHideUnused=False, yAxisLabel='Number of Pitches')
