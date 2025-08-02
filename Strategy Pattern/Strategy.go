package main

import (
    "fmt"
    "sort"
)

// Strategy interface with a method for processing data
type Strategy interface {
    DoAlgorithm(data []string) []string
}

// SortStrategy implements sorting
type SortStrategy struct{}

func (s SortStrategy) DoAlgorithm(data []string) []string {
    result := make([]string, len(data))
    copy(result, data)
    sort.Strings(result) // Sorts the array in ascending order
    return result
}

// ReverseStrategy implements reversing
type ReverseStrategy struct{}

func (r ReverseStrategy) DoAlgorithm(data []string) []string {
    result := make([]string, len(data))
    copy(result, data)
    for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
        result[i], result[j] = result[j], result[i]
    }
    return result
}

// Context uses a strategy
type Context struct {
    strategy Strategy
}

func NewContext(strategy Strategy) *Context {
    return &Context{strategy: strategy}
}

func (c *Context) Execute(data []string) {
    result := c.strategy.DoAlgorithm(data)
    fmt.Println(result)
}

func main() {
    context := NewContext(SortStrategy{})
    context.Execute([]string{"a", "b", "c", "d", "e"}) // Output: [a b c d e]

    context2 := NewContext(ReverseStrategy{})
    context2.Execute([]string{"a", "b", "c", "d", "e"}) // Output: [e d c b a]
}