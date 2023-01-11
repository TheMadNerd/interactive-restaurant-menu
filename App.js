class App extends React.Component {
    state = {
        items: [
            { id: 1, content: "herbata", active: true },
            { id: 2, content: "ziemniaki", active: false },
            { id: 3, content: "ryż", active: false },
            { id: 4, content: "zupa", active: false },
            { id: 5, content: "piwo", active: false },
            { id: 6, content: "chleb", active: true },
        ]
    }

    handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if(id === item.id) {
                item.active = !item.active
            }
            return item
        })
        this.setState({
            items: items
        })
    }

    render() {
        return(
           <React.Fragment>
                <Header items={this.state.items}/>
                <ListItem items={this.state.items} changeStatus={this.handleChangeStatus}/>
           </React.Fragment>
        );
    }
}