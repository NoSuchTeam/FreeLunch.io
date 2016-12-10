import sqlite3 as sqlite
from contextlib import closing
import csv


def connect_db():
    return sqlite.connect('data.db')

def init_db():
    with closing(connect_db()) as db:
        with open('./database/tables.sql', mode = 'rb') as f:
            # print f.read()
            # db.cursor().executescript(f.read())
            db.cursor().execute("""drop table if exists organizations;""")
            db.cursor().execute("""create table organizations (
                id integer primary key autoincrement,
                name text,
                address1 text,
                address2 text,
                city text,
                state text,
                zip text,
                county text,
                phone text,
                fax text,
                tty text,
                toll_free text,
                hotline text,
                email text,
                website text,
                fb_name text,
                fb_url text,
                twitter text,
                lat real,
                lng real
            );""")


    #     db.cursor().execute("""
    #     create table suggestions(
    #     id integer primary key autoincrement,
    #     name text,
    #     location text,
    #     phone text,
    #     email text,
    #     description text
    # );""")

        db.commit()
        print "commited"

init_db()

with open('./data.csv', 'rb') as f:
    with closing(connect_db()) as db:
            db.text_factory = str
            csvr = csv.reader(f)
            row = []
            for i in csvr:
                row = [x for x in i]
                row.insert(0,None)
                print row
                db.cursor().execute("insert into organizations values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", row)
            db.commit()