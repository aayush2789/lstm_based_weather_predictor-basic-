import pandas as pd
data=[{"name":"Alice","age":25,"scores":{"mid":25,"end":40},"attendence":['A','P','P','P']},{"name":"bob","age":20,"scores":{"mid":25,"end":40},"attendence":['A','P','P','P']},
        {"name":"Lucy","age":40,"scores":{"mid":25,"end":40},"attendence":['A','P','P','P']}]
df=pd.json_normalize(data)
print(df)
